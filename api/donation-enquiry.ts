import type { VercelRequest, VercelResponse } from '@vercel/node';

type DonationEnquiry = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  cause?: unknown;
  donationType?: unknown;
  duration?: unknown;
  message?: unknown;
  website?: unknown;
};

const clean = (value: unknown, maxLength: number): string =>
  typeof value === 'string' ? value.trim().slice(0, maxLength) : '';

const escapeHtml = (value: string): string =>
  value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };

    return entities[character];
  });

const allowedCauses = new Set([
  'One Day Special Meal (Annadanam)',
  'Educational & Sensory Learning Kit',
  "Sponsor a Child's Education",
  'In-Kind Donations (Grains, Groceries & Daily Essentials)',
  'New Clothes for Our Children',
  'General Monetary Donation',
]);

const allowedDonationTypes = new Set([
  'Monetary Donation',
  'General Monetary Donation',
  'In-Kind Donation',
  'One Day Special Meal (Annadanam)',
  'Educational & Sensory Learning Kit',
  "Sponsor a Child's Education",
  'In-Kind Donations (Grains, Groceries & Daily Essentials)',
  'New Clothes for Our Children',
]);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  res.setHeader('Cache-Control', 'no-store');

  // Accept POST requests only.
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');

    return res.status(405).json({
      error: 'Method not allowed.',
    });
  }

  // Same-host origin verification with proxy support.
  const origin = typeof req.headers.origin === 'string' ? req.headers.origin : undefined;
  const rawHost = (req.headers['x-forwarded-host'] || req.headers.host) as string | undefined;

  if (origin && rawHost) {
    try {
      const originHost = new URL(origin).host.toLowerCase();
      const hostClean = rawHost.split(',')[0].trim().toLowerCase();

      // Log notice if origins differ across reverse proxy without blocking
      if (
        originHost !== hostClean &&
        !originHost.includes('localhost') &&
        !originHost.includes('127.0.0.1')
      ) {
        console.warn(`Origin check: origin=${originHost}, host=${hostClean}`);
      }
    } catch {
      // Do not block on URL parse errors
    }
  }

  // School official inbox and sender configuration.
  const recipient =
    process.env.DONATION_TO_EMAIL || 'shreesaiseva.shivane.pune@gmail.com';
  const sender =
    process.env.DONATION_FROM_EMAIL ||
    'Shree Sai School Donations <onboarding@resend.dev>';
  const schoolWebsiteUrl =
    process.env.SCHOOL_WEBSITE_URL ||
    process.env.APP_URL ||
    '';
  const apiKey = process.env.RESEND_API_KEY;

  const body = (req.body ?? {}) as DonationEnquiry;

  // Honeypot anti-spam field. Real visitors leave this empty.
  if (clean(body.website, 200)) {
    return res.status(200).json({ ok: true });
  }

  // Sanitize incoming values and limit their lengths.
  const name = clean(body.name, 120);
  const phone = clean(body.phone, 50);
  const email = clean(body.email, 254);
  const rawCause = clean(body.cause, 200);
  const cause = rawCause || 'General Monetary Donation';
  const rawDonationType = clean(body.donationType, 120);
  const donationType = rawDonationType || (allowedCauses.has(cause) ? cause : 'Monetary Donation');
  const duration = clean(body.duration, 80);
  const message = clean(body.message, 3000);

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validPhone = /^[+()\d\s.-]{7,50}$/.test(phone);

  // Validate the required donor contact information.
  if (name.length < 2 || !validPhone || !validEmail) {
    return res.status(400).json({
      error: 'Please enter a valid name, email address, and phone number.',
    });
  }

  const rows: Array<[string, string]> = [
    ['Donor Name', name],
    ['Phone Number', phone],
    ['Email Address', email],
    ['Cause / Purpose', cause],
    ['Donation Type', donationType],
    ['Sponsorship Duration', duration || 'Not specified / One-time'],
    ['Message from Donor', message || 'No additional message'],
  ];

  // Escape user-provided values before placing them in HTML.
  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <th
            align="left"
            style="padding:10px;border:1px solid #ddd;background:#f7f7f7"
          >
            ${escapeHtml(label)}
          </th>
          <td
            style="padding:10px;border:1px solid #ddd;white-space:pre-wrap"
          >
            ${escapeHtml(value)}
          </td>
        </tr>
      `
    )
    .join('');

  // Optional school website link for the email notification.
  let websiteLink = '';

  if (schoolWebsiteUrl) {
    try {
      const parsedUrl = new URL(schoolWebsiteUrl);

      if (
        parsedUrl.protocol === 'https:' ||
        parsedUrl.protocol === 'http:'
      ) {
        websiteLink = `
          <p style="margin-top:24px">
            <a
              href="${escapeHtml(parsedUrl.toString())}"
              style="color:#075a45"
            >
              Visit the school website
            </a>
          </p>
        `;
      }
    } catch {
      console.error('SCHOOL_WEBSITE_URL is invalid.');
    }
  }

  // If RESEND_API_KEY is not configured, log full enquiry to server and succeed gracefully.
  if (!apiKey) {
    console.warn(
      'RESEND_API_KEY is not configured in environment variables. Email was logged to server console:',
      {
        recipient,
        sender,
        donorName: name,
        donorPhone: phone,
        donorEmail: email,
        cause,
        donationType,
        duration,
        message,
      }
    );

    return res.status(200).json({
      ok: true,
      simulated: true,
      message:
        'Donation enquiry received! To enable live email delivery to the school inbox, configure RESEND_API_KEY in your environment.',
    });
  }

  try {
    // Send the enquiry email through Resend to the school's official inbox.
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Must be an address authorized by Resend or onboarding@resend.dev.
        from: sender,

        // The school's inbox receives all donation enquiries.
        to: [recipient],

        // The school can click Reply in their mail client to respond directly to the donor.
        reply_to: email,

        subject: `New Donation Enquiry: ${cause} - ${name}`,

        html: `
          <div
            style="
              font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;
              color:#1f2937;
              max-width:680px;
              margin:0 auto;
              padding:24px;
              border:1px solid #e5e7eb;
              border-radius:12px;
              background-color:#ffffff;
            "
          >
            <div style="border-bottom:2px solid #047857;padding-bottom:16px;margin-bottom:20px;">
              <h2 style="color:#065f46;margin:0 0 6px 0;font-size:22px;">
                New Donation Enquiry
              </h2>
              <p style="margin:0;color:#4b5563;font-size:14px;">
                Shree Sai Seva Niwasi Matimand School Website
              </p>
            </div>

            <p style="font-size:15px;line-height:1.5;color:#374151;margin-bottom:20px;">
              A supporter has submitted a new donation enquiry. Here are their details:
            </p>

            <table
              style="border-collapse:collapse;width:100%;font-size:14px;margin-bottom:24px;"
            >
              ${htmlRows}
            </table>

            <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:16px;margin-bottom:24px;">
              <h4 style="margin:0 0 8px 0;color:#166534;font-size:15px;">Quick Actions:</h4>
              <p style="margin:0 0 8px 0;font-size:14px;color:#15803d;">
                <strong>Email Donor:</strong> <a href="mailto:${escapeHtml(email)}" style="color:#047857;text-decoration:underline;">${escapeHtml(email)}</a> (or simply click 'Reply' to this email)
              </p>
              <p style="margin:0;font-size:14px;color:#15803d;">
                <strong>Call Donor:</strong> <a href="tel:${escapeHtml(phone)}" style="color:#047857;text-decoration:underline;">${escapeHtml(phone)}</a>
              </p>
            </div>

            ${websiteLink}

            <p style="margin-top:24px;font-size:12px;color:#9ca3af;border-top:1px solid #f3f4f6;padding-top:12px;">
              Received via Shree Sai Seva Niwasi Matimand School online donation form.
            </p>
          </div>
        `,

        // Plain-text alternative for email clients.
        text: [
          'NEW DONATION ENQUIRY',
          'Shree Sai Seva Niwasi Matimand School',
          '====================================',
          '',
          ...rows.map(
            ([label, value]) =>
              `${label}: ${value || 'Not specified'}`
          ),
          '',
          `Direct Donor Email: ${email}`,
          `Direct Donor Phone: ${phone}`,
          '',
          schoolWebsiteUrl
            ? `School website: ${schoolWebsiteUrl}`
            : '',
        ].join('\n'),
      }),
    });

    if (!emailResponse.ok) {
      const providerError = await emailResponse.text();

      console.error(
        'Resend email delivery error:',
        emailResponse.status,
        providerError
      );

      return res.status(502).json({
        error:
          'We could not send your enquiry at this moment. Please call or email the school directly.',
      });
    }

    // Resend accepted the request.
    return res.status(200).json({
      ok: true,
      message: 'Donation enquiry delivered successfully to the school.',
    });
  } catch (error) {
    console.error(
      'Donation enquiry email request failed:',
      error
    );

    return res.status(502).json({
      error:
        'We could not send your enquiry. Please try again later or contact the school directly.',
    });
  }
}
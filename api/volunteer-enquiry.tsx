import type { VercelRequest, VercelResponse } from '@vercel/node';

type VolunteerEnquiry = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  city?: unknown;
  skillCategory?: unknown;
  availability?: unknown;
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
    process.env.VOLUNTEER_TO_EMAIL ||
    process.env.DONATION_TO_EMAIL ||
    'shreesaiseva.shivane.pune@gmail.com';

  const sender =
    process.env.VOLUNTEER_FROM_EMAIL ||
    process.env.DONATION_FROM_EMAIL ||
    'Shree Sai School Volunteers <onboarding@resend.dev>';

  const schoolWebsiteUrl =
    process.env.SCHOOL_WEBSITE_URL ||
    process.env.APP_URL ||
    '';

  const apiKey = process.env.RESEND_API_KEY;

  const body = (req.body ?? {}) as VolunteerEnquiry;

  // Honeypot anti-spam field. Real visitors leave this empty.
  if (clean(body.website, 200)) {
    return res.status(200).json({ ok: true });
  }

  // Sanitize and limit lengths of incoming values.
  const name = clean(body.name, 120);
  const phone = clean(body.phone, 50);
  const email = clean(body.email, 254);
  const city = clean(body.city, 120);
  const skillCategory = clean(body.skillCategory, 150) || 'Teaching / Educational Activities';
  const availability = clean(body.availability, 120) || 'Weekends (Saturday/Sunday)';
  const message = clean(body.message, 2000);

  const validPhone = /^[+()\d\s.-]{7,50}$/.test(phone);
  const hasValidEmail = email.length === 0 || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Validate required fields.
  if (name.length < 2) {
    return res.status(400).json({
      error: 'Please enter a valid full name.',
    });
  }

  if (!validPhone || phone.length < 10) {
    return res.status(400).json({
      error: 'Please enter a valid 10-digit phone number.',
    });
  }

  if (!hasValidEmail) {
    return res.status(400).json({
      error: 'Please enter a valid email address or leave it blank.',
    });
  }

  const cleanPhoneDigits = phone.replace(/\D/g, '');

  const rows: Array<[string, string]> = [
    ['Volunteer Full Name', name],
    ['Contact Phone (WhatsApp)', phone],
    ['Email Address', email || 'None provided'],
    ['City / Town', city || 'Not specified'],
    ['Area of Interest / Skill', skillCategory],
    ['Availability Preference', availability],
    ['Message / Notes', message || 'None provided'],
  ];

  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <th
            align="left"
            style="padding:10px 14px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;color:#374151;width:38%;"
          >
            ${escapeHtml(label)}
          </th>
          <td
            style="padding:10px 14px;border:1px solid #e5e7eb;white-space:pre-wrap;color:#1f2937;"
          >
            ${escapeHtml(value)}
          </td>
        </tr>
      `
    )
    .join('');

  // Optional school website link.
  let websiteLink = '';
  if (schoolWebsiteUrl) {
    try {
      const parsedUrl = new URL(schoolWebsiteUrl);
      if (parsedUrl.protocol === 'https:' || parsedUrl.protocol === 'http:') {
        websiteLink = `
          <p style="margin-top:24px;text-align:center;">
            <a
              href="${escapeHtml(parsedUrl.toString())}"
              style="color:#047857;font-weight:600;text-decoration:none;"
            >
              Visit School Website →
            </a>
          </p>
        `;
      }
    } catch {
      // ignore invalid URL
    }
  }

  // Graceful fallback when RESEND_API_KEY is not configured yet.
  if (!apiKey) {
    console.warn(
      'RESEND_API_KEY is not configured in environment variables. Volunteer enquiry logged to server console:',
      {
        recipient,
        sender,
        volunteerName: name,
        phone,
        email,
        city,
        skillCategory,
        availability,
        message,
      }
    );

    return res.status(200).json({
      ok: true,
      simulated: true,
      message:
        'Volunteer enquiry received! To enable live email delivery to the school inbox, configure RESEND_API_KEY in your environment.',
    });
  }

  try {
    const emailSubject = `New Volunteer Application: ${name} (${skillCategory}) - ${city || 'Pune'}`;

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email || recipient,
        subject: emailSubject,
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
            <div style="border-bottom:3px solid #047857;padding-bottom:16px;margin-bottom:20px;">
              <span style="font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#047857;background:#ecfdf5;padding:4px 8px;border-radius:4px;">
                Volunteer Program
              </span>
              <h2 style="color:#065f46;margin:10px 0 4px 0;font-size:22px;">
                New Volunteer Application
              </h2>
              <p style="margin:0;color:#6b7280;font-size:13px;">
                Shree Sai Seva Niwasi Matimand School Website
              </p>
            </div>

            <p style="font-size:14px;line-height:1.6;color:#374151;margin-bottom:20px;">
              A compassionate supporter has submitted a volunteer form offering their time and skills to support our special children. Here are their details:
            </p>

            <table
              style="border-collapse:collapse;width:100%;font-size:13px;margin-bottom:24px;border:1px solid #e5e7eb;"
            >
              <tbody>
                ${htmlRows}
              </tbody>
            </table>

            <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:16px;margin-bottom:24px;">
              <h4 style="margin:0 0 10px 0;color:#166534;font-size:14px;font-weight:700;">
                Quick Contact Actions:
              </h4>
              <p style="margin:0 0 8px 0;font-size:13px;color:#15803d;">
                <strong>Call Volunteer:</strong> <a href="tel:${escapeHtml(phone)}" style="color:#047857;text-decoration:underline;">${escapeHtml(phone)}</a>
              </p>
              ${
                cleanPhoneDigits
                  ? `<p style="margin:0 0 8px 0;font-size:13px;color:#15803d;">
                      <strong>WhatsApp:</strong> <a href="https://wa.me/${cleanPhoneDigits.length === 10 ? '91' + cleanPhoneDigits : cleanPhoneDigits}" style="color:#047857;text-decoration:underline;">Message on WhatsApp</a>
                    </p>`
                  : ''
              }
              ${
                email
                  ? `<p style="margin:0;font-size:13px;color:#15803d;">
                      <strong>Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color:#047857;text-decoration:underline;">${escapeHtml(email)}</a> (or reply directly to this notification)
                    </p>`
                  : ''
              }
            </div>

            ${websiteLink}

            <p style="margin-top:24px;font-size:11px;color:#9ca3af;border-top:1px solid #f3f4f6;padding-top:12px;text-align:center;">
              Received via Shree Sai Seva Niwasi Matimand School online volunteer portal.
            </p>
          </div>
        `,
        text: [
          'NEW VOLUNTEER APPLICATION',
          'Shree Sai Seva Niwasi Matimand School',
          '====================================',
          '',
          ...rows.map(([label, value]) => `${label}: ${value || 'Not specified'}`),
          '',
          `Direct Phone: ${phone}`,
          email ? `Direct Email: ${email}` : '',
          '',
          schoolWebsiteUrl ? `School Website: ${schoolWebsiteUrl}` : '',
        ]
          .filter(Boolean)
          .join('\n'),
      }),
    });

    if (!emailResponse.ok) {
      const providerError = await emailResponse.text();
      console.error('Resend volunteer email delivery error:', emailResponse.status, providerError);
      return res.status(502).json({
        error: 'We could not send your volunteer enquiry at this moment. Please call or email the school directly.',
      });
    }

    return res.status(200).json({
      ok: true,
      message: 'Volunteer application delivered successfully to the school.',
    });
  } catch (error) {
    console.error('Volunteer enquiry email request failed:', error);
    return res.status(502).json({
      error: 'We could not send your enquiry. Please try again later or contact the school directly.',
    });
  }
}

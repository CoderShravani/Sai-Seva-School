# Shree Sai Seva Niwasi Matimand School Website

Official website for Shree Sai Seva Niwasi Matimand School (run by Chaitanya Sevabhavi Sanstha, Registration No. MAH/1428/2010/TRUST), located in Dangat Industrial Estate, Shivane, Pune – 411023, Maharashtra, India.

The school is a dedicated residential special school providing academic education, daily living skills, speech and motor therapy, vocational training, and residential hostel care for children and young adults with intellectual and developmental challenges.

## About the Project

This web application serves as the primary digital portal for parents, donors, volunteers, and the community. Key capabilities include:

- **Bilingual Interface:** Full support for both English and Marathi (`मराठी`), allowing families and community members to navigate comfortably.
- **Accessibility Suite:** Integrated accessibility controls including high-contrast view, dyslexia-friendly typography, font scaling, and reduced motion modes.
- **Online Admissions:** Three-step pre-enrollment form with instant printable acknowledgement slips for parents and notification dispatch to the school office.
- **Donation and Sponsorship:** Transparent banking and UPI details with one-click copying for 80G tax-exempt contributions, meal sponsorships (Annadanam), educational kits, and in-kind needs.
- **Curriculum and Therapy Details:** Detailed pedagogical overviews of Diksha coursework, speech therapy, sensory integration, vocational crafts, and counseling.
- **Campus Life and Celebrations:** Real event galleries and student activity documentation (national holidays, festivals, sports, achievements).
- **Institutional Governance:** Published registration numbers, trust documents, child protection policies, and contact information.

## Technology Stack

- **Frontend Framework:** React 19 with TypeScript
- **Bundler and Development Server:** Vite 6
- **Styling:** Tailwind CSS v4 with custom accessibility overrides
- **Icons:** Lucide React
- **Motion:** Motion library for smooth interface transitions
- **Backend API Handlers:** Vercel Serverless Functions (`@vercel/node`) located in `/api`
- **Email Delivery Service:** Resend API (used by serverless API handlers for dispatching parent and donor enquiries)

## Project Structure

```text
├── api/                      # Serverless backend API handlers
│   ├── admission-enquiry.tsx # Processes admission pre-enrollment forms
│   ├── donation-enquiry.tsx  # Processes donation pledges and receipt requests
│   ├── enquiry-form.tsx      # Processes general visit and information queries
│   └── volunteer-enquiry.tsx # Processes volunteer applications
├── public/                   # Static media served at the root URL
│   ├── [1-49].jpg            # Authentic school campus, classroom, and activity photos
│   ├── certificates.pdf      # Legal registration and trust documents
│   ├── school_brochure.pdf   # Official school informational brochure
│   ├── dahihandi.mp4         # Campus festival celebration video
│   ├── school_logo.jpg       # Institutional school logo
│   └── *.png, *.jpg          # Page banners, icons, founder photos, and event media
├── src/                      # Application source code
│   ├── components/           # Reusable UI components (Navbar, Footer, Hero, Modals)
│   ├── context/              # React contexts (Language, Accessibility, SchoolData)
│   ├── data/                 # Bilingual content stores (schoolData, programs, galleries, translations)
│   ├── pages/                # Distinct page views (Home, About, Programs, Admissions, Donate, Contact, etc.)
│   ├── types.ts              # TypeScript interface definitions
│   ├── App.tsx               # Main page router and modal coordinator
│   ├── main.tsx              # React DOM mounting entry point
│   └── index.css             # Tailwind v4 configuration and accessibility styling
├── .env.example              # Example environment variable template
├── .gitignore                # Git exclusion rules
├── bun.lock                  # Dependency lockfile
├── index.html                # HTML entry point with metadata and fonts
├── package.json              # Project dependencies and script declarations
├── tsconfig.json             # TypeScript compiler settings
└── vite.config.ts            # Vite build configuration
```

## Getting Started

### Prerequisites

- **Node.js:** v18.0.0 or later (v20+ recommended)
- **Package Manager:** `bun` or `npm`

### Installation

Clone the repository and install the declared dependencies:

```bash
# Using npm
npm install

# Using bun
bun install
```

### Development Server

Start the local development server:

```bash
npm run dev
```

The application will start on port 3000 (accessible at `http://localhost:3000`).

## Environment Configuration

Copy `.env.example` to create your local `.env` file:

```bash
cp .env.example .env
```

The application uses the following environment variables:

| Variable Name | Purpose | Default / Fallback |
| :--- | :--- | :--- |
| `RESEND_API_KEY` | API key from Resend for sending emails from API routes | Optional in local dev (logs to console if missing) |
| `ADMISSION_TO_EMAIL` | Recipient email for student admission queries | `shreesaiseva.shivane.pune@gmail.com` |
| `DONATION_TO_EMAIL` | Recipient email for donation and 80G receipt queries | `shreesaiseva.shivane.pune@gmail.com` |
| `CONTACT_TO_EMAIL` | Recipient email for campus visit and general queries | `shreesaiseva.shivane.pune@gmail.com` |
| `VOLUNTEER_TO_EMAIL` | Recipient email for volunteer registrations | `shreesaiseva.shivane.pune@gmail.com` |
| `ADMISSION_FROM_EMAIL`| Verified sender address for admission emails | `Shree Sai School Admissions <onboarding@resend.dev>` |
| `DONATION_FROM_EMAIL` | Verified sender address for donation emails | `Shree Sai School Donations <onboarding@resend.dev>` |
| `SCHOOL_WEBSITE_URL` | Canonical URL included in email body links | Defaults to `APP_URL` or empty |

*Note: In local development, if `RESEND_API_KEY` is not provided, the API routes simulate successful submissions and log the enquiry payload to the server console.*

## Available Commands

The following scripts are defined in `package.json`:

- `npm run dev`: Starts the Vite development server with host binding.
- `npm run build`: Compiles TypeScript and creates an optimized production bundle in `dist/`.
- `npm run preview`: Previews the generated production build locally.
- `npm run lint`: Runs `tsc --noEmit` to validate all TypeScript code across the project.
- `npm run clean`: Cleans build artifacts (`dist/` and `server.js`).

## API Routes

Serverless API routes are located in `/api` and are invoked directly by the frontend forms:

- `POST /api/admission-enquiry`: Validates parent contact information, student details, disability type, and residential care requirements, sending a formatted email to the admissions coordinator.
- `POST /api/donation-enquiry`: Receives donor pledges, sponsorship preferences (meals, learning kits, groceries), and 80G receipt requests.
- `POST /api/enquiry-form`: Receives campus visit bookings and general inquiries.
- `POST /api/volunteer-enquiry`: Receives community volunteer applications and skill offers.

All handlers include honeypot anti-spam verification, string length validation, and HTML entity escaping.

## Production Build and Deployment

### Build Verification

Run the production build:

```bash
npm run build
```

The output bundle will be placed in `dist/`, containing minified JavaScript, CSS, and optimized static assets.

### Deployment Platforms

- **Vercel:** Connect the repository to Vercel. Vercel automatically detects the Vite build (`npm run build`, output directory `dist`) and mounts files in `/api` as serverless functions. Add `RESEND_API_KEY` in Vercel Project Settings under Environment Variables.
- **Other Static Hosts:** If deploying only the static frontend to Netlify, Cloudflare Pages, or GitHub Pages, ensure form submissions either connect to an external serverless endpoint or third-party form handler.

## Maintenance and Security

- **Protecting Secrets:** Never commit `.env` or files containing private credentials. All secret keys must be configured via hosting environment variables.
- **Dependency Hygiene:** Avoid ad-hoc dependency modifications without testing the build. Keep `bun.lock` or `package-lock.json` in sync with `package.json`.
- **Content Verification:** When updating school contact details, bank accounts, or trust registration data, update both the English and Marathi entries in `src/data/schoolData.ts` to ensure bilingual parity.

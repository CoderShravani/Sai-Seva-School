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


## Available Commands

The following scripts are defined in `package.json`:

- `npm run dev`: Starts the Vite development server with host binding.
- `npm run build`: Compiles TypeScript and creates an optimized production bundle in `dist/`.
- `npm run preview`: Previews the generated production build locally.
- `npm run lint`: Runs `tsc --noEmit` to validate all TypeScript code across the project.
- `npm run clean`: Cleans build artifacts (`dist/` and `server.js`).



## Production Build

### Build Verification

Run the production build:

```bash
npm run build
```






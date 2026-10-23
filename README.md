# Disney School website

Responsive React + Vite + Tailwind CSS school website starter for **Disney Jr./Sr. International Prep./Public School**, Muzaffarpur, Bihar.

## Included
- Responsive header with mobile navigation
- Hero section, academic programs, school story and facilities
- Photo gallery, admissions call-to-action, FAQs and contact section
- Click-to-call phone links and Google Maps search link
- Component-based structure and central school content data
- Responsive styles and accessible interaction labels

## Run locally
Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

To verify production build:

```bash
npm run build
npm run preview
```

## Main files
- `src/App.jsx` — page composition
- `src/components/` — reusable page sections
- `src/data/siteData.js` — school details, programs, facilities and FAQs
- `src/index.css` — Tailwind directives and custom responsive design
- `tailwind.config.js` — theme tokens and font family

## Before publishing
1. Replace illustrative stock photos with real school/campus photographs for authenticity.
2. Confirm school name styling, classes offered, admission dates, fees, timings, facilities and school policies with the school administration.
3. Add the official logo and verified social links if available.
4. Test on a real phone, check image loading, and run `npm run build`.
5. Deploy the built `dist/` folder to Netlify, Vercel or a compatible static host.

**Note:** This is a frontend website starter. It does not include a backend, admission database, admin dashboard, or a form that stores enquiries. Those can be added once the school confirms the required workflow.

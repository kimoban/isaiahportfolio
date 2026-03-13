# Isaiah Portfolio

Personal portfolio site for Isaiah Kimoban N-yilyal, built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui.

## Tech Stack

- Vite
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Vitest

## Local Development

```sh
npm install
npm run dev
```

## Quality Checks

```sh
npm run build
npm run lint
npm test
```

## Contact Form Setup

This project is wired for Formspree so the contact form can submit directly to your inbox without requiring a backend.

1. Create a form at Formspree.
2. Copy your endpoint, which looks like `https://formspree.io/f/your-form-id`.
3. Create a local `.env` file using `.env.example`.
4. Set `VITE_FORMSPREE_ENDPOINT` to your Formspree endpoint.

If the environment variable is not set or direct delivery fails, the site falls back to opening the visitor's default email app.

## Deploying To Vercel

1. Import the repository into Vercel.
1. Keep the framework preset as `Vite`.
1. Use the default commands:

```txt
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

1. Deploy.

Set `VITE_FORMSPREE_ENDPOINT` in Vercel if you want direct contact form delivery in production.

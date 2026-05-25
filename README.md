# Hostsy Website

Premium corporate housing website built with Next.js, React, Tailwind CSS, and Framer Motion.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production Build

```bash
npm run lint
npm run build
```

## Netlify Deployment

This project includes `netlify.toml` with the production build settings Netlify expects for a modern Next.js app:

- Base directory: `website` if connecting the parent `HOSTSY` folder, otherwise leave blank if connecting this folder as the repository root.
- Build command: `npm run build`
- Publish directory: `.next`
- Node version: `20`

Netlify applies the current OpenNext adapter automatically for supported Next.js versions, so this project does not pin `@netlify/plugin-nextjs`.

## Deployment Checklist

- Confirm the production domain in `src/app/layout.tsx` metadata before launch.
- Keep Hostsy logo and hero assets in `public/` so they are bundled with the deploy.
- Run `npm run build` locally before pushing a client presentation version.

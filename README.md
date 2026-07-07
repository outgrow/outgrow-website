# out:grow

Marketing site for out:grow, an AI adoption consultancy for small and medium web, commerce, and 360 agencies. Built with Next.js (App Router) and styled-components.

## Getting started

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

- `RESEND_API_KEY` — required for the `/contact` form to send email via [Resend](https://resend.com). Without it, the form will render but submissions will fail server-side.

## Structure

- `app/` — routes (App Router). Each route is a thin server component that renders shared `components/` and exports its `metadata`.
- `components/` — presentational, styled-components-based UI, shared across routes.
- `content/` — plain-data copy for each page (used for both JSX rendering and machine-readable output).
- `styles/` — colors, media query breakpoints, fonts, and the global CSS reset.

## Scripts

- `yarn dev` — start the dev server.
- `yarn build` — production build.
- `yarn start` — run a production build (run `yarn build` first).
- `yarn lint` — lint the codebase.

## Deployment

Deploys to [Vercel](https://vercel.com) with zero configuration.

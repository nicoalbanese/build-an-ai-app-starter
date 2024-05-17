# Next.js + PostgreSQL Auth Starter

This is a [Next.js](https://nextjs.org/) starter kit that uses [NextAuth.js](https://next-auth.js.org/) for simple email + password login, [Drizzle](https://orm.drizzle.team) as the ORM, and a [Neon Postgres](https://vercel.com/postgres) database to persist the data.

## Deploy Your Own

You can clone & deploy it to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnicoalbanese%2Fbuild-an-ai-app-starter&env=OPENAI_API_KEY)

## Developing Locally

You can clone & create this repo with the following command

```bash
npx create-next-app nextjs-typescript-starter --example "https://github.com/vercel/nextjs-postgres-auth-starter"
```

## Getting Started

First, create a Postgres instance and run the following code:

```bash
CREATE TABLE IF NOT EXISTS "User" (
  id SERIAL PRIMARY KEY,
  email VARCHAR(64) NOT NULL,
  password VARCHAR(64) NOT NULL
);
```

Finally, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

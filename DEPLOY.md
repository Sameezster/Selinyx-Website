# Deploying Selinyx to Vercel (free)

This guide takes the site live on **Vercel** by connecting a **Git repo**, so every push auto-deploys. The repo is already initialized locally (branch `main`) with a first commit.

> Note on the free tier: Vercel's free **Hobby** plan is officially for non-commercial/personal projects. It's perfect for getting Selinyx live and sharing a preview now. For a production commercial site, plan to move to the **Pro** plan later (custom domains still work on Hobby in the meantime).

---

## Step 0 — Confirm it builds locally (recommended, 2 min)

From the project folder:

```bash
npm install
npm run build
```

If `npm run build` finishes with "Compiled successfully", you're good. If it reports an error, fix it before pushing (Vercel runs the same `next build`).

---

## Step 1 — Put the code on GitHub

You need a GitHub (or GitLab/Bitbucket) account and an empty repo.

1. Go to <https://github.com/new>.
2. Name it e.g. `selinyx-website`. Leave it **empty** — do **not** add a README, .gitignore, or license (the project already has them).
3. Click **Create repository**. Copy the repo URL, e.g. `https://github.com/<you>/selinyx-website.git`.

Then, from the project folder, connect and push:

```bash
git remote add origin https://github.com/<you>/selinyx-website.git
git push -u origin main
```

If prompted to authenticate, use the GitHub sign-in / personal access token flow in your terminal.

---

## Step 2 — Import the repo into Vercel

1. Go to <https://vercel.com> and sign in (the "Continue with GitHub" option is easiest — it links your repos).
2. Click **Add New… → Project**.
3. Find `selinyx-website` in the list and click **Import**.
4. Vercel auto-detects **Next.js** — you don't need to change anything:
   - Framework Preset: **Next.js**
   - Build Command: `next build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)
5. Click **Deploy**.

The first build takes ~1–2 minutes. When it finishes you'll get a live URL like `https://selinyx-website.vercel.app`.

---

## Step 3 — Every future change

Because the repo is connected, deploying is just:

```bash
git add -A
git commit -m "your message"
git push
```

Vercel rebuilds and ships automatically. Pull requests also get their own preview URLs.

---

## Step 4 (optional) — Custom domain

Custom domains work on the free Hobby plan.

1. In your Vercel project: **Settings → Domains → Add**.
2. Enter your domain (e.g. `selinyx.com`).
3. Vercel shows the DNS records to set. Add them at your domain registrar:
   - For a root domain: an **A** record to Vercel's IP, **or** follow Vercel's nameserver instructions.
   - For `www`: a **CNAME** to `cname.vercel-dns.com`.
4. Vercel issues an SSL certificate automatically once DNS propagates (minutes to a few hours).

After adding a real domain, update the URL in two places so SEO metadata is correct:

- `app/layout.tsx` → `const siteUrl = "https://selinyx.com";`
- `app/sitemap.ts` and `app/robots.ts` → the `baseUrl` / sitemap URL.

---

## Before "real" production launch

The contact form, newsletter, and chat widget currently use **client-side mock handlers** — they show success states but don't send anything yet. To make them functional, wire them to a backend, for example:

- A form service (Formspree, Resend, your own API route under `app/api/...`).
- An email/CRM provider for the newsletter.

Everything else (pages, SEO, responsiveness, dark mode, animations) is production-ready as-is.

---

### Quick reference

| Action | Command |
| --- | --- |
| Install deps | `npm install` |
| Local dev | `npm run dev` → http://localhost:3000 |
| Production build check | `npm run build` |
| Push & auto-deploy | `git push` |

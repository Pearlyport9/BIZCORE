# Decap CMS Setup Guide

## Overview

This project uses [Decap CMS](https://decapcms.org/) (formerly Netlify CMS) to manage blog posts. 
Admins can create, edit, and publish posts through a dashboard at `/admin/`.

## How to Access

1. Push this repository to GitHub
2. Deploy to Vercel (connected to the GitHub repo)
3. Visit `https://bizcore.vercel.app/admin/`
4. Log in with your GitHub account (see OAuth setup below)

For local development, visit `http://localhost:5173/admin/` after running `npm run dev`.

## GitHub OAuth Setup (Required for Production)

Decap CMS requires a GitHub OAuth App to authenticate admin users:

1. Go to GitHub Settings → Developer settings → OAuth Apps → New OAuth App
2. Set:
   - **Application name**: BIZCORE CMS
   - **Homepage URL**: `https://bizcore.vercel.app`
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`
3. Save the Client ID and Client Secret
4. Deploy an OAuth proxy (see: https://decapcms.org/docs/oauth-client/) or use Netlify's hosted service

**Alternative (simpler):** Deploy the Decap CMS OAuth proxy to Vercel using:
- https://github.com/vencax/decap-cms-github-oauth-provider

## Updating the Config

Edit `public/admin/config.yml` to update:
- `repo` — set to `your-org/your-repo-name`
- `branch` — the deployment branch (usually `main`)

## Creating Blog Posts

1. Log in at `/admin/`
2. Click "New Blog Post"
3. Fill in: Title, Publish Date, Author, Category, Excerpt, Featured Image, Tags
4. Write the body content using the Markdown editor
5. Click "Publish"

## Building After Changes

After publishing posts via Decap CMS, the changes are saved directly to the GitHub repo.
Vercel will automatically rebuild and redeploy.

If building locally, run:

```bash
npm run build
```

This generates the `posts.json` index and builds the Vite project.

## File Structure

```
public/
  admin/
    index.html     # Decap CMS entry point
    config.yml     # CMS configuration
  content/
    blog/
      posts.json   # Auto-generated index (created by build:index script)
      *.md         # Individual blog post Markdown files
  uploads/         # Images uploaded via Decap CMS
```

## Local Development

Run the dev server:

```bash
npm run dev
```

The admin panel is at `http://localhost:5173/admin/`.
For local CMS usage without GitHub, use the Decap CMS local backend proxy:

```bash
npx decap-server
```

Then in another terminal:

```bash
npm run dev
```

Set `local_backend: true` in `config.yml` for local development.

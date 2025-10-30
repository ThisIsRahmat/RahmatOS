# Deployment Guide

This guide explains how to deploy your site with cached book data from Literal.club.

## How It Works

1. **Build Time**: Books are fetched from Literal.club API and saved to `public/data/books.json`
2. **Runtime**: The API endpoint reads from the cached JSON file (no API calls)
3. **Updates**: GitHub Action runs weekly to refresh the cache

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

This will install `tsx` and `@types/node` needed to run the fetch script.

### 2. Generate Initial Cache

```bash
npm run fetch-books
```

This creates `public/data/books.json` with your book data.

### 3. Test Locally

```bash
npm run dev
```

Your site should now load books from the cached file.

### 4. Set Up GitHub Secrets

For the weekly update to work, add your Literal.club token to GitHub:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `LITERAL_TOKEN`
5. Value: Your Literal.club API token
6. Click **Add secret**

### 5. Deploy

#### Option A: Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variable:
   - Name: `LITERAL_TOKEN`
   - Value: Your Literal.club token
4. Deploy!

The build command `npm run build` will automatically fetch books before building.

#### Option B: Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add environment variable:
   - Key: `LITERAL_TOKEN`
   - Value: Your Literal.club token
5. Deploy!

#### Option C: Other Platforms

Any platform that supports Astro will work. Just ensure:
- Build command: `npm run build`
- Environment variable `LITERAL_TOKEN` is set

## Weekly Updates

The GitHub Action `.github/workflows/update-books-cache.yml` will:

1. Run every Sunday at midnight UTC
2. Fetch fresh book data from Literal.club
3. Commit the updated `public/data/books.json`
4. Push to your repository
5. (Optional) Trigger a redeploy

### Manual Updates

You can manually trigger the cache update:

1. Go to **Actions** tab in your GitHub repository
2. Click **Update Books Cache** workflow
3. Click **Run workflow**

Or run locally:

```bash
npm run fetch-books
git add public/data/books.json
git commit -m "chore: update books cache"
git push
```

## Optional: Trigger Redeploy After Cache Update

To automatically redeploy when the cache updates:

### Vercel

1. Get your deploy hook URL:
   - Go to Project Settings → Git → Deploy Hooks
   - Create a new hook
2. Add as GitHub secret: `DEPLOY_HOOK_URL`
3. Uncomment the last section in `.github/workflows/update-books-cache.yml`

### Netlify

1. Get your build hook URL:
   - Go to Site settings → Build & deploy → Build hooks
   - Create a new hook
2. Add as GitHub secret: `DEPLOY_HOOK_URL`
3. Uncomment the last section in `.github/workflows/update-books-cache.yml`

## Troubleshooting

### Books not showing

1. Check if `public/data/books.json` exists
2. Run `npm run fetch-books` to generate it
3. Check console for errors

### Build fails

1. Make sure `LITERAL_TOKEN` environment variable is set
2. Check if the token is valid
3. Try running `npm run fetch-books` locally to test

### Weekly update not working

1. Check GitHub Actions tab for errors
2. Verify `LITERAL_TOKEN` secret is set
3. Check if the workflow has write permissions:
   - Settings → Actions → General → Workflow permissions
   - Select "Read and write permissions"

## Cache Files

- `public/data/books.json` - Contains all your book data
- Should be committed to git (weekly updates will modify it)
- Updated automatically every week via GitHub Actions

## Development vs Production

- **Development**: Uses the same cached file (fast, no API calls)
- **Production**: Uses the same cached file (fast, no API calls)
- **Updates**: Handled by GitHub Actions (weekly) or manually

This approach ensures:
- Fast page loads (no API calls)
- Lower API usage (weekly instead of per-request)
- Reliable data (cached locally)
- Easy updates (automated weekly)

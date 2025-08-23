# Dishanth H.G — Portfolio (Static Site)

A clean, modern, responsive **static** portfolio site you can deploy **free** on GitHub Pages, Netlify, or Vercel.

## Live Setup (GitHub Pages)

### Option A — User/Org Site (recommended)
1. Create a GitHub account (if you don’t have one).
2. Create a new public repository **named exactly**: `<your-username>.github.io`
3. Download `dishanth-portfolio.zip` and extract it.
4. Drag & drop **all files** (index.html, styles.css, script.js, assets/) into the repo.
5. Commit. GitHub Pages will auto‑publish at `https://<your-username>.github.io` within a minute.

### Option B — Project Site
1. Create a public repo with any name, e.g. `portfolio`.
2. Upload the files.
3. Go to **Settings → Pages** → Build and deployment → Source: **Deploy from a branch** → Branch: `main` (root).
4. Your site will publish at the URL shown in Pages.

## Netlify (drag‑and‑drop)
1. Go to https://app.netlify.com/drop
2. Drag the **unzipped** folder. It deploys instantly and gives you a free URL.
3. For a form backend, add [Netlify Forms](https://docs.netlify.com/forms/setup/) (optional).

## Vercel
1. Create a new project and import the repo.
2. Vercel detects it as static and deploys.

## Custom Domain (optional)
- Configure a domain in your host DNS to point to GitHub Pages/Netlify/Vercel. Follow the platform docs.

## Editing Content
- Update text in **index.html** (About, Skills, Projects, Achievements, Contact).
- Replace the avatar:
  - Put your photo at `assets/profile.jpg` and replace the placeholder markup if desired.
- Resume download button points to `assets/Dishanth_Resume.docx` (already included). You can replace with a PDF later.

## Contact Form (no backend required)
- Current form uses your default mail app (`mailto:`). For an inbox backend:
  - [Formspree](https://formspree.io/) free tier works by replacing the form with their endpoint.
  - [Netlify Forms] works when deployed on Netlify with a special attribute.

## Next Steps / Enhancements
- Add more projects with screenshots (place images under `assets/` and add `<img>` inside each project card).
- Add Google Analytics (GA4) or Plausible for privacy‑friendly analytics.
- Add SEO: Update `<title>`, `<meta>` descriptions, and Open Graph tags.
- Accessibility: Ensure good contrast for your images and alt text.

## Local Preview
Just open `index.html` in a browser (double click). No build step is needed.

---

**Made for Dishanth H.G.**
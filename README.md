# Gasthaus Schlössle

A lightweight, responsive single-page restaurant template built with plain HTML, CSS and a small JavaScript helper. Drop the files into a folder or repository and edit the content (menu, images, contact info) to match your restaurant.

Live demo: open `index.html` in a browser (no build tools required).

## Files
- `index.html` — main page markup (header, hero, menu, about, gallery, contact).
- `styles.css` — responsive styles and layout.
- `script.js` — small scripts for mobile nav and demo form handling.
- `images/` — put `hero.jpg` and gallery images here (or update paths in `index.html` and `styles.css`).

## Quick start (local preview)
1. Save the files into a folder:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `images/` (optional)
2. Open `index.html` directly in your browser, or run a simple local server:
   - Python 3:
     ```
     python -m http.server 8000
     ```
     then open http://localhost:8000

## Customize
- Brand: edit the site title, phone number, and email in `index.html`.
- Hero image: replace `images/hero.jpg` and update the CSS background if needed.
- Menu: edit the items and prices inside the menu section (`<article class="menu-card">`).
- Hours & address: edit the About/Hours block in `index.html`.
- Gallery: replace or add images in the `images/` folder and update `index.html`.
- Contact form: `script.js` currently handles the form as a demo (alerts and local reset). Replace the handler with an API call or a form service (Formspree, Netlify Forms, etc.) to receive messages.

Example: replace the form submit handler in `script.js` with a POST to your server or an external service.

## Responsive / Accessibility notes
- The layout is mobile-first and will collapse to a single column on small screens.
- Navigation toggle is keyboard accessible; ensure any added interactive elements also support keyboard and ARIA attributes where needed.

## Deploy
- GitHub Pages:
  - Create a repository (or use this repo).
  - Push files to the `main` branch (or `gh-pages` branch) and enable Pages from the repository settings.
  - For a user site, name the repository `<username>.github.io` and GitHub will publish from `main`.
- Any static host will work (Netlify, Vercel, Surge, Firebase Hosting). Upload the folder or connect the repo.

## Form integration suggestions
- Formspree: a quick zero-backend option to receive email.
- Netlify Forms: automatic capture if you deploy on Netlify (add `netlify` attributes to the form).
- Custom backend: POST form data as JSON to your server endpoint and handle email/DB storage there.

## License
This template is provided under the MIT License. See `LICENSE` to modify or include an alternative license.

## Contact
Maintainer: alenhajduk8  
Repository: https://github.com/alenhajduk8/jebiga.github.io

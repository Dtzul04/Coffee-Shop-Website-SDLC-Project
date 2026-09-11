# Coffee Shop Website

A responsive single-page website for a fictional coffee shop, built as part of an SDLC team project for INEW 2330.

---

## Tech Stack

- HTML5
- CSS3
- JavaScript (vanilla + jQuery)

---

## Features

- [x] Responsive design
- [x] Hero section
- [x] Menu section
- [x] About section
- [x] Social media integration
- [x] Contact section / footer

---

## How to Run

1. Clone the repo:
  ```
   git clone [your-repo-url]
  ```
2. Open `index.html` in your browser.

---

## Project Structure

```
coffee-shop-website/
├── index.html
├── README.md
├── .gitignore
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── about/
    ├── logo/
    ├── menu/
    └── social/
```

---

## Team & Roles

| Name      | Role                                                              |
| --------- | ----------------------------------------------------------------- |
| Daniel T. | Content Strategist (Lead), Content Developer, SEO Specialist      |
| Adriana   | Content Designer, Menu & Product Specialist, Marketing Specialist |

---

## Git Workflow

- **Pull before you edit**, push right after you're done.
- No direct commits to `main` — use a feature branch for your section.
- Open a Pull Request to merge; the other person reviews before merging.
- Give a heads up before editing shared files (like this README) to avoid conflicts.

---

## Deployment

Hosted via **GitHub Pages**.

---

## Notes

Social links use `href="#"` placeholders because this is a fictional shop for class.

### What went wrong with our merges / PRs (lessons for the team)

After we accepted all feature PRs into `main`, the site looked broken even though each branch had been fine on its own. Here’s what happened and what we should do differently:

1. **Everyone edited the same shared files**
   - `index.html`, `css/style.css`, and `README.md` were changed on every branch (`about-social`, `hero-menu`, `contact-footer`).
   - When PRs merged, later branches overwrote earlier work instead of combining sections.
   - Result: About/social HTML disappeared, header CSS was missing, About CSS (images + social icons) was dropped, and README credits were replaced.

2. **Conflicts were not fully combined**
   - Git warned about conflicts (and “unmerged files” / stash issues during pulls).
   - Choosing one side (“Accept Current” / “Accept Incoming”) kept only one person’s section and deleted the other.
   - Correct approach: keep both and our partner’s hero/menu/contact and our About/social in the same file.

3. **Pulling with uncommitted / unfinished merge work made it worse**
   - `git pull origin main` failed when local edits would be overwritten.
   - Stash → pull → stash pop (or merge) without resolving conflicts left the repo in a half-merged state (`Pulling is not possible because you have unmerged files`).
   - Fix order when stuck: `git merge --abort` (if needed) → stash or commit → pull → resolve conflicts carefully → commit.

4. **What we fixed after the merges**
   - Restored About + social HTML on `main`.
   - Restored missing About/social CSS and header layout CSS.
   - Restored contact details from the contact branch.
   - Combined README notes/credits from both teammates.
   - Tightened menu spacing so items don’t feel cramped on the photos.

5. **What to do next time**
   - Pull `main` before starting and again before opening a PR.
   - Prefer editing **only your section** when possible; tell the other person before changing shared layout/CSS/README.
   - On conflicts, merge both sides and don’t accept only one version of `index.html` / `style.css`.
   - After merging a PR, pull `main` and check the live page so missing sections are caught early.
   - Don’t open another PR until the previous merge looks correct in the browser.

### Image & icon sources

**About photos (Pexels)**
- https://www.pexels.com/
  1. onetoforseeforall
  2. Sami Abdullah

**Social icons (Icons8)**
- https://icons8.com/

**Logo and menu images (Unsplash / Pixabay)**
- [https://unsplash.com/photos/clear-drinking-glass-with-tea-kbch-i63YTg](https://unsplash.com/photos/clear-drinking-glass-with-tea-kbch-i63YTg)
- [https://unsplash.com/photos/clear-glass-filled-ice-coffee-vZOZJH_xkUk](https://unsplash.com/photos/clear-glass-filled-ice-coffee-vZOZJH_xkUk)
- [https://pixabay.com/photos/bread-croissant-food-breakfast-101636/](https://pixabay.com/photos/bread-croissant-food-breakfast-101636/)
- [https://pixabay.com/vectors/cup-espresso-tea-coffee-beverage-149682/](https://pixabay.com/vectors/cup-espresso-tea-coffee-beverage-149682/)

*Built for INEW 2330 – Capstone Course, Dallas College*

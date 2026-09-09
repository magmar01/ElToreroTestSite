# Test deployment

This repository is a standalone staging rebuild of the El Torero site. Production is not connected to this repository.

## GitHub Pages preview

The repository includes a GitHub Actions workflow at `.github/workflows/pages.yml` that publishes the `main` branch as a static GitHub Pages site whenever changes are pushed.

The intended preview URL is:

`https://magmar01.github.io/ElToreroTestSite/`

GitHub Pages must be enabled for this repository with **Settings → Pages → Source: GitHub Actions**. Because this repository is currently private, GitHub account/plan eligibility for Pages may apply. No custom domain or production hosting is required.

After the site is approved, the repository can be promoted/replaced into the production deployment workflow separately.

# El Torero Test Site

This repository is the standalone test/staging rebuild for El Torero Mexican Restaurant.

## Goal

`ElToreroTestSite` is its own implementation. It does **not** modify or depend on the code structure of `ElToreroSite`.

The original `ElToreroSite` repository is used only as the visual reference for:

- overall page structure and section order
- typography and color palette
- hero/header treatment
- hamburger navigation appearance and behavior
- menu typography, dotted price leaders, headings, spacing, and responsive presentation
- hours, contact, location, and footer styling

The implementation is intentionally rebuilt with a small, modern HTML/CSS/JavaScript codebase so future changes do not require the legacy CSS override stack used by the original site.

## Editing menu items

Edit `menu.js` for menu item names, descriptions, and prices. The page layout is rendered from that data, so menu changes do not require editing the HTML.

## Branch

`main` is the single working branch for this project. Make changes directly on `main`.

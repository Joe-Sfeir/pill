# Visual QA — FORME

Checked against the local production build on 24 August 2026.

- 1440 × 900: landscape homepage hero and primary navigation.
- 1280 × 800: package comparison and currency control.
- 768 × 1024: fictional instructor index and tablet navigation.
- 390 × 844: portrait hero, mobile menu, cookie choices, schedule, and booking form.

The booking flow returned an explicit non-retaining demo receipt. Schedule filtering reduced the list to one Foundation session. Mobile navigation opens, traps the expected interaction surface, and exposes every primary route. Internal links exposed by the homepage returned HTTP 200. All rendered instructor images completed successfully after the production-media path correction. The WhatsApp concept CTA resolves to `96176300011`; `96181300288` is absent.

The bounded defect pass fixed a one-pixel mobile overflow, invisible secondary cookie actions, stale instructor image paths, layout-property animation, generic interface font fallbacks, and the side-tab alert treatment. The confirmation pass reported zero console errors and warnings and no horizontal overflow at 390 pixels.

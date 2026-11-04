---
name: matcha-design-system
description: Build or revise Matcha landing pages, catalogues, banner artwork, and UI components using the Matcha UI library and its Lucide icon conventions.
---

# Matcha Design System

Use this skill for Matcha website and product interface work. Keep Matcha as a Chinese-first Malaysia companion product with short copy and compact, image-led layouts.

## Required design source

- Treat the Matcha UI library in the current workspace and its published documentation at https://ui.matcha.talk as the source of truth for components, tokens, cards, buttons, tags, and interaction patterns. Reuse its components and tokens; extend the library when a reusable pattern is missing instead of creating a one-off variant.
- Before creating or editing visual assets, read the project visual prompt sheet at https://ui.matcha.talk/design-prompts.md or its local source copy. Follow the shared art direction and the relevant asset prompt.
- Use Lucide icons only for interface symbols (lucide-react preferred; react-icons/lu is the existing Lucide set). Do not add hand-authored SVG icons, emoji, or unicode glyphs as icon substitutes. The official Matcha logo and supplied raster artwork are brand assets and may be used as assets.
- Use solid Matcha-purple buttons. Keep muted copy in the same display-font family as headings, using color to mute it. Prefer spacing that feels compact and intentional.

## Product conventions

- The primary audience is Chinese-speaking users in Malaysia; Chinese is the default and English may be offered as a language choice.
- Catalogue prices use the sample default 200 cha per hour. The currently supported service concepts are voice calls and video calls.
- Any generated companion must be a fictional or consented adult who clearly reads as 21 or older. Vary faces, styling, camera framing, light, and setting across a set.
- Do not claim live availability, verified identity, bookings, payment processing, calling, or end-to-end encryption unless implemented and supported by the product.
- Keep promotional claims accurate and concise. Do not add redundant disclaimers or invented ratings.

## Asset prompts

Use the detailed banner, portrait, service-art, and credit-art prompts in the project docs/design-prompts.md or the hosted UI sheet. Keep text as HTML/CSS overlays, export production raster artwork as WebP, and preserve negative space for overlays.

## Catalogue card anatomy

Keep the white card area to name, a prominent flag without a country label, actual completed-session count, up/down votes, cha hourly price, and one CTA. Keep the voice/video symbol on the photograph only. Do not add taglines, language tags, personality tags, or a duplicate service icon to the white area. Scale typography, image, badges, controls, and spacing together from card width; preserve four columns on mobile without overflow. Initialize unknown service counts and votes to zero rather than inventing social proof.

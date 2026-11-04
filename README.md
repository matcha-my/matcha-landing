# Matcha landing page

Chinese-first static landing-page prototype for a Malaysian companion platform. Original purple artwork follows the supplied Matcha mark; discovery and profiles draw on the supplied PlayOne samples and verified Nicee/Lita references.

## Run

```sh
npm run build
npm run verify
npm run dev
```

Open http://127.0.0.1:4173/ . No third-party frontend scripts are required. React and country-flag-icons render the language dropdown flags at build time; the dropdown uses native HTML details, without a React browser bundle. `dist/` contains the deployable site and authored CSS/JavaScript/assets; `scripts/build.mjs` renders HTML and SEO artifacts. Do not delete `dist/` before building: it holds the authored assets.

## Pages and interactions

- `/`: Simplified Chinese homepage for Malaysia; service filters, fictional companion profile dialogs, keyboard-operable service tabs, native FAQs and launch/recruitment information.
- `/en/`: English homepage with reciprocal language alternates.
- `/credits/`: Credit concept, billing-unit explanation and illustrative rate × duration calculator.
- `/privacy/`: Privacy scope, messaging/call distinction, personal boundaries and preview status.
- `/guide/`: Substantive introductory guide to choosing language, services, game servers and billing units.

The landing page does not implement accounts, end-to-end encryption, calling, payments, bookings or applications. These were not represented as working controls. Profiles, portraits and chat conversations are marked as illustrative. No invented reviews, customer counts, real availability, currency rates, testimonials or earning claims are used.

## SEO release configuration

`site.config.mjs` centralizes the origin and launch status. The production default is `https://matcha.talk` and public indexing is enabled. Set `PUBLIC_LAUNCH=false` for private review builds; noindex pages are then excluded from the sitemap and LLM directory.

For a verified public launch:

```sh
SITE_URL=https://YOUR-VERIFIED-DOMAIN PUBLIC_LAUNCH=true npm run build
SITE_URL=https://YOUR-VERIFIED-DOMAIN PUBLIC_LAUNCH=true npm run verify
```

Use the same variables in Vercel's build environment. `PUBLIC_LAUNCH=true` rejects a `.example` domain. Confirm the public domain, real launch status, privacy terms, official action destinations and credit terms first. Set `ENCRYPTION_CONFIRMED=true` only after the owner confirms implementation and messaging scope; this switch changes marketing copy, not cryptographic behavior.

Artifacts: per-page inline JSON-LD and exported `schema.json`, canonical/social metadata, reciprocal Chinese/English `hreflang`, `sitemap.xml`, `robots.txt`, `llms.txt`, and requested `LM.txt` alias. JSON-LD links shared Organization, WebSite and WebPage entities; supporting pages include breadcrumbs. No fake rating, price or Offer schema is created.

Vercel uses `vercel.json` with static output, canonical trailing slashes, basic response security headers, and asset caching. The custom-domain alias and www/apex redirect are configured in the authorized Tanwyhang personal Vercel account; application code alone cannot configure registrar DNS or guarantee Google’s canonical choice.

## Account scope

Use the local `matcha-dev-credentials` skill for Matcha infrastructure. Credentials are stored outside this repository. The machine CLI defaults may differ from the authorized Vercel scope; use the connected Vercel tools with the recorded Tanwyhang team ID for this landing-page deployment.

The owner authorized Tanwyhang’s personal Vercel scope for the landing page. Production project: `matcha-landing` in `tanwyhangs-projects`; custom domain: `matcha.talk`. DNS was connected in the Matcha Foundation Chrome profile. No GitHub repository or Supabase project was provisioned by this build. The existing domain registration was supplied by the owner. A private Sites project was reserved before the user selected Vercel; it remains unpublished and unused.

## Assets

`dist/assets/` contains optimized WebP hero art, twelve original fictional adult casual profile portraits, four individually generated transparent service objects, social-sharing art and the supplied original logo. The two-hexagon SVG mark reproduces the supplied geometry. Generated art was created with the built-in image generation tool; prompts are preserved in `docs/asset-prompts.json` and `docs/asset-prompts-v2.json`. Competitor photos, banners and game key art are not reused.

## Reference work

- `../references/market-research.md`: sourced service and credit model research.
- `../references/playone-style/`: competitor captures and the owner's PlayOne examples.
- `docs/seo-and-design-notes.md`: application of JK6, Eventflo and ReVisit references.

## Catalog edition

The homepage uses three editorial rows of companion profiles, with Yuna replacing Mika in the HOT row. HOT is an editorial label, not a fabricated popularity statistic. Filters hide empty groups. Each service object is an independent alpha WebP with CSS shadows and overflow, not part of a flattened banner. Site text uses 陪陪; copy is intentionally brief, with detailed explanations on supporting pages. Mobile shows four compact cards across in each catalogue row.

The current portraits use a youthful adult (age 21) selfie-inspired direction: soft makeup, airy bangs, casual everyday clothes and brighter natural light. Source prompts and paths are in `docs/asset-prompts-youth.json` and `docs/asset-paths-youth.json`; optimized files use the versioned `pp-youth-` prefix to avoid old-image caches.

## Edition three

The current hero uses three alternating, feathered portrait carousels with pause controls and offscreen/reduced-motion handling. Four separate generated horizontal campaign assets cover companion recruitment, gaming, private chat and credits. The HOT rail uses editorial flame labels and richer language/personality/service tags; the remaining catalog uses white profile cards with solid purple actions. No ratings, false discounts, live availability or invented prices are shown. The privacy composition uses an isolated phone/lock raster and presents E2E-encrypted private chat as an implemented capability, with voice/video call security documented separately.

Chinese display headings use an 87 KB self-hosted WOFF2 subset derived from Resource Han Rounded CN, renamed Matcha Rounded Display. The original font license is at `dist/assets/fonts/matcha-rounded-OFL.txt`. Source: https://github.com/CyanoHao/Resource-Han-Rounded ; discovery: https://www.freechinesefont.com/resource-han-rounded-cn-font-download/ . The white-background logo retains only the supplied two hexagons.

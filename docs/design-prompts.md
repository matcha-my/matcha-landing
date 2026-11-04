# Matcha visual prompt sheet

Use this sheet with the Matcha UI components and tokens. Keep copy short and Chinese-first for Malaysia, with English as a secondary language. Use the supplied Matcha logo and coin artwork as separate assets. Keep all raster outputs in WebP for production. Render typography and UI labels in HTML/CSS rather than baking words into images.

## Shared art direction

Polished Chinese social discovery, editorial portrait photography, vivid but controlled Matcha purple (#6945ff), ink plum (#251c35), soft lilac (#f6f3fb), and restrained heart pink (#ef3b96). Use distinct images, lighting, camera angles, outfits, and settings across assets. Portrait subjects must read clearly as adults 21+, be fully clothed, non-explicit, and fictional or consented. Keep faces sharp and natural, skin texture believable, and compositions useful when cropped to portrait cards.

## Recruitment banner · 1200 × 480

Create a premium horizontal campaign image for a Malaysian Chinese-first voice and video companion platform recruiting adult companions. Feature one confident adult Chinese Malaysian woman in a contemporary café or city lounge, warm direct flash mixed with lilac ambient light, an inviting candid expression, polished but approachable styling, and subtle Matcha-purple reflections. Place the person on the right half and preserve clean negative space on the left for HTML headline and CTA. No text, logos, UI, watermark, gradients-as-button, or sexualized pose. Export WebP.

## Video-call banner · 1200 × 480

Create a cinematic horizontal lifestyle image for a voice-and-video companion service. Show two adult friends on a video call, one face visible in a natural close-up on a phone screen and the other person softly present in the room, Kuala Lumpur evening lights, purple accents in the environment, intimate but safe and friendly. Keep the left third uncluttered for copy. No text, logos, UI, watermark, or implied in-person service. Export WebP.

## Voice-call banner · 1200 × 480

Create an editorial horizontal image about a comforting voice conversation. Show an adult Chinese woman wearing headphones at a softly lit desk after dark, relaxed confident expression, warm lamp plus violet gaming-room LEDs, microphone visible as a subtle prop. Leave open negative space on the left for HTML copy. No text, logos, UI, watermark, or claims about encryption. Export WebP.

## Cha credits banner · 1200 × 480

Create a crisp product-art horizontal still life of a few glossy purple cha coins beside a white phone on a pale lilac surface, sharp specular highlights, high-end product photography, plum shadows, and one small pink accent. Arrange the objects at the right and leave the left clear for copy. Use the supplied cha coin design as a separate placed raster asset where available; never redraw the Matcha mark. No text, logos, interface, or currency exchange claim. Export WebP.

## Companion card portraits · 4:5

Generate one fictional adult Chinese or Malaysian Chinese companion profile portrait, clearly 21+, for an image-led discovery card. Make this person visually distinct from previous portraits: specify a different face shape, hairstyle, hair color, makeup, expression, outfit, lighting, camera distance, and setting. Mix direct flash, café daylight, home lamp light, city evening light, and gaming-room LEDs across a set. Vary close selfie, mirror portrait, waist-up candid, and seated framing. Seductive means confident eye contact and polished adult styling, never nudity or explicit content. Keep the face sharp; avoid beauty-filter plastic skin, repeated poses, collages, labels, text, logos, and watermarks.

## Service artwork · square transparent WebP

Create one tactile 3D service illustration on a transparent background: choose either a glossy lilac voice bubble/headphone motif or a purple camera/lens motif. Strong silhouette, dimensional lighting, crisp edges, small warm-pink accent, no text, no logos, no surrounding card, and enough breathing room for a 1:1 tile crop.

## Prompting and implementation rules

- Reuse Matcha UI cards, buttons, filters, tags, spacing, radii, and color tokens.
- UI icons must come from Lucide (lucide-react or the react-icons/lu Lucide set); do not hand-draw SVG icons or substitute emoji/unicode glyphs. The Matcha wordmark/hex and supplied raster artwork are brand assets, not UI icons.
- Buttons use a solid purple fill, never a gradient.
- Use the display font for headings and muted copy; muted text changes color, not font family.
- Keep landing layouts compact and image-led. Use a maximum of two catalogue columns on mobile and show complete pairs.
- Current services are voice calls and video calls only. Keep “200 cha / hour” as the sample default where a price is required.
- Do not imply live booking, calls, payments, verified profiles, or encryption unless the implementation supports them.

## Thin catalogue section banners

Use restrained sharp pink raster artwork across the whole banner with a subtle pink gradient. Center HOT / VIDEO / HELLO and its title as live text. Keep the banner about 32 px tall on desktop and 28 px on mobile. Add a gentle CSS shimmer, disabled for reduced motion. Avoid complex ornaments or blank white side margins.

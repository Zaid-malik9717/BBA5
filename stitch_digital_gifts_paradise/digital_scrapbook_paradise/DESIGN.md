---
name: Digital Scrapbook Paradise
colors:
  surface: '#fff8f6'
  surface-dim: '#f8d1cb'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0ee'
  surface-container: '#ffe9e5'
  surface-container-high: '#ffe2dd'
  surface-container-highest: '#ffdad4'
  on-surface: '#2b1613'
  on-surface-variant: '#564240'
  inverse-surface: '#422a26'
  inverse-on-surface: '#ffedea'
  outline: '#89726f'
  outline-variant: '#dcc0bd'
  surface-tint: '#9e4037'
  primary: '#9e4037'
  on-primary: '#ffffff'
  primary-container: '#ff8b7e'
  on-primary-container: '#76231d'
  inverse-primary: '#ffb4aa'
  secondary: '#7c5642'
  on-secondary: '#ffffff'
  secondary-container: '#ffcdb4'
  on-secondary-container: '#7a5541'
  tertiary: '#67587d'
  on-tertiary: '#ffffff'
  tertiary-container: '#b7a5cf'
  on-tertiary-container: '#483a5d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410002'
  on-primary-fixed-variant: '#7f2922'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#edbca4'
  on-secondary-fixed: '#2f1506'
  on-secondary-fixed-variant: '#613f2c'
  tertiary-fixed: '#eddcff'
  tertiary-fixed-dim: '#d2bfea'
  on-tertiary-fixed: '#221536'
  on-tertiary-fixed-variant: '#4f4064'
  background: '#fff8f6'
  on-background: '#2b1613'
  surface-variant: '#ffdad4'
typography:
  display-lg:
    fontFamily: Quicksand
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Quicksand
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Quicksand
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Quicksand
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.5'
  accent-text:
    fontFamily: Bricolage Grotesque
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.2'
  label-caps:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style
The design system is built on the concept of **Modern Nostalgia**. It blends the tactile, messy charm of a physical scrapbook with the clean, airy aesthetics of contemporary social platforms. The goal is to evoke a sense of "digital warmth"—making the act of sending a gift feel as personal and intimate as a handwritten note.

The style is a hybrid of **Soft Minimalism** and **Tactile Scrapbooking**. It utilizes generous whitespace (ivory backgrounds) contrasted with playful, high-energy accents. Key visual motifs include:
- **Organic Imperfection:** Subtle hand-drawn flourishes (stars, sparkles) to break the rigidity of digital grids.
- **Physical Metaphors:** Elements that mimic stickers, washi tape, and Polaroid film to ground the digital experience in reality.
- **Atmospheric Depth:** Soft blurs and gentle shadows that make the UI feel like it’s resting on a physical surface.

## Colors
The palette is anchored in a creamy, off-white base to avoid the sterile feel of pure white. 
- **Primary (Soft Coral):** Used for primary actions and "Love" themed expressions.
- **Secondary (Peach):** Used for soft highlights and secondary button states.
- **Tertiary (Lavender):** Reserved for celebratory moments or "Magic" interactions.
- **Typography (Dark Chocolate):** A warm, deep brown that provides high accessibility while maintaining a softer look than black.
- **Surface Tiers:** Use the Warm Beige for container backgrounds to distinguish them from the main page body.

## Typography
Typography is rounded and friendly. 
- **Headlines:** Use **Quicksand** with tight tracking for a bold, expressive feel.
- **Body:** **Quicksand** is maintained for consistency, providing a cohesive "soft" look across all text blocks.
- **The Emotional Layer:** **Bricolage Grotesque** is used sparingly for handwritten-style notes, testimonials, or "from the heart" messages. It should often be slightly rotated (1-3 degrees) to mimic a sticker or a note.
- **Functional Labels:** **Be Vietnam Pro** provides a clean, systematic contrast for micro-copy and metadata.

## Layout & Spacing
The layout follows a **Fluid Content Grid** with an emphasis on asymmetric balance. 
- **Grid:** Use a 12-column grid for desktop, but allow "sticker" elements (icons/doodles) to break the grid lines and overlap containers.
- **Margins:** Large 24px margins on mobile to ensure the content feels like a centered "card" within the screen.
- **Rhythm:** Use the `md` (24px) spacing for internal card padding to match the large corner radii. 
- **Reflow:** On mobile, stack all elements but maintain a "Polaroid" aspect ratio (approx 4:5) for gift previews and images.

## Elevation & Depth
Depth is achieved through **Soft Layering** rather than traditional shadows.
- **The Glass Effect:** Use a backdrop-filter (blur: 10px) with a semi-transparent Ivory (#FFFDF5CC) background for overlays and floating menus.
- **Ambient Shadows:** Shadows should be very large, very soft, and tinted with Warm Brown (#8D6E63) at 5-10% opacity. This prevents the "gray" muddy look and keeps the UI feeling warm.
- **Sticker Depth:** Small decorative elements (stars, tape) should have a tiny, crisp 1px shadow to make them look like they are physically stuck onto the UI.

## Shapes
The shape language is dominated by **Extreme Roundedness**. 
- **Standard Cards:** 24px corner radius.
- **Large Sections:** 40px corner radius.
- **Interactive Elements:** Use the "Pill" shape for buttons and chips.
- **Polaroid Frames:** Images should have a thick 12px white border with a larger bottom margin to house a caption, mimicking a physical photo.
- **Washi Tape:** Use long, thin rectangles with "torn" edge masks for header decorations or pinning cards.

## Components
- **Primary Buttons:** High-contrast Soft Coral background with Dark Chocolate text. They should have a "squishy" feel—expanding slightly on hover and shrinking on click.
- **Secondary Buttons:** Warm Beige background with a 2px solid Coral border.
- **Gift Cards:** The primary component. Use the Polaroid frame style. The image occupies the top 70%, and the bottom 30% features a handwritten-style font for the recipient's name.
- **Stickers/Chips:** Use the Lavender and Peach colors. These should look like tiny badges with 100px border-radius and icon-only or short-text content.
- **Input Fields:** Soft Ivory background with a 2px Warm Brown border. When focused, the border changes to Soft Coral and the card expands slightly.
- **Doodles:** Integrate SVGs of hand-drawn stars, hearts, and arrows. These are non-interactive but serve as "anchors" for the visual narrative, often placed at the corners of high-priority cards.
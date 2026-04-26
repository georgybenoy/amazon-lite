---
name: Calm Commerce
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#554434'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#887361'
  outline-variant: '#dbc2ad'
  surface-tint: '#8a5100'
  primary: '#8a5100'
  on-primary: '#ffffff'
  primary-container: '#ff9900'
  on-primary-container: '#653a00'
  inverse-primary: '#ffb86f'
  secondary: '#575e70'
  on-secondary: '#ffffff'
  secondary-container: '#d9dff5'
  on-secondary-container: '#5c6274'
  tertiary: '#00668a'
  on-tertiary: '#ffffff'
  tertiary-container: '#04beff'
  on-tertiary-container: '#004965'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcbd'
  primary-fixed-dim: '#ffb86f'
  on-primary-fixed: '#2c1600'
  on-primary-fixed-variant: '#693c00'
  secondary-fixed: '#dce2f7'
  secondary-fixed-dim: '#c0c6db'
  on-secondary-fixed: '#141b2b'
  on-secondary-fixed-variant: '#404758'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7cd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  h1:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  button:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: '0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  xxl: 80px
  gutter: 24px
  margin: 32px
  container-max: 1280px
---

## Brand & Style
The design system is rooted in the philosophy of "Calm Commerce." It strips away the traditional clutter of high-volume retail to focus on clarity, intent, and premium aesthetics. Drawing inspiration from the utility of Stripe and the restraint of Apple, the system prioritizes negative space and high-quality product presentation.

The personality is functional yet sophisticated. It evokes a sense of organized luxury through a minimalist lens—where every element serves a purpose and nothing competes for attention. The user experience should feel like walking through a high-end, quiet boutique rather than a crowded marketplace.

## Colors
The palette is intentionally restricted to maintain a high-end feel. Pure white is the primary canvas, providing maximum "breathing room." The secondary surface color is a very light gray used to define logical sections without introducing visual noise.

Amazon Orange is the sole "action" color. It must be used with extreme discipline, reserved exclusively for primary conversion points like "Add to Cart" or "Buy Now." All secondary actions and interface elements utilize the Deep Charcoal or subtle grays to ensure the user’s focus remains on the products.

## Typography
This design system utilizes Inter for its utilitarian yet modern character. The hierarchy is built on generous line heights to enhance readability and contribute to the "calm" atmosphere. Headlines use tighter tracking and heavier weights to provide structure, while body copy remains airy and open.

Use `label-caps` sparingly for metadata or small categories to provide a rhythmic break from standard sentence-case text.

## Layout & Spacing
The layout follows a fixed-grid philosophy centered within the viewport, ensuring a consistent editorial feel across large screens. The spacing rhythm is based on a 4px baseline, but defaults to larger increments (`xl` and `xxl`) for sectional separation to prevent the interface from feeling "tight."

Margins and gutters are generous. Group related items using `sm` or `md` spacing, but use `xl` spacing to separate distinct commerce concepts (e.g., separating product images from technical specifications).

## Elevation & Depth
Depth is communicated through tonal layering and ambient shadows. Surfaces do not "float" aggressively; instead, they sit just above the base layer.

- **Level 0 (Base):** Pure white background.
- **Level 1 (Surface):** `#F9FAFB` used for cards and inset containers, often with a 1px `#E5E7EB` border.
- **Level 2 (Elevated):** Subtle shadows using a high blur radius (20px-40px) and very low opacity (0.04) are used for interactive elements like dropdowns or active carts to suggest they are temporarily layered above the content.
- **Level 3 (Overlay):** Used for modals, featuring a backdrop blur (12px) to maintain the "glassy" calm aesthetic of the system.

## Shapes
The design system uses a consistent 12px (`0.75rem`) corner radius for all standard components like buttons, input fields, and small cards. Larger containers, such as hero banners or product modals, scale up to 16px or 24px to maintain visual harmony. This "soft-square" approach balances the technical precision of a grid with the approachability of rounded forms.

## Components

### Buttons
- **Primary:** Solid `#FF9900` with white text. High-contrast, 12px rounded corners. No gradients.
- **Secondary:** Solid `#111827` or white with a `#E5E7EB` border. For non-conversion actions.
- **Ghost:** Transparent background with charcoal text, used for tertiary navigation.

### Cards
Product cards use the `#F9FAFB` surface color or a 1px border. There should be no shadow in the default state; a soft ambient shadow appears only on hover to indicate interactivity.

### Inputs & Form Fields
Fields use a 1px `#E5E7EB` border and a white background. On focus, the border transitions to a 1px solid `#111827` (not orange) to maintain a sophisticated look. Labels sit clearly above the field in `body-sm` bold.

### Chips & Tags
Small, 12px rounded capsules with a `#F3F4F6` background and `#374151` text. These should be low-contrast to avoid distracting from the product imagery.

### Progress & Status
Use slim, 4px tall bars for progress indicators. Use the primary orange for active progress and the neutral gray for the track.
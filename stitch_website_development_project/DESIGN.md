---
name: Obsidian & Ash
colors:
  surface: '#151311'
  surface-dim: '#151311'
  surface-bright: '#3c3836'
  surface-container-lowest: '#100e0c'
  surface-container-low: '#1e1b19'
  surface-container: '#221f1d'
  surface-container-high: '#2d2927'
  surface-container-highest: '#383432'
  on-surface: '#e8e1dd'
  on-surface-variant: '#d3c3bb'
  inverse-surface: '#e8e1dd'
  inverse-on-surface: '#33302d'
  outline: '#9c8e87'
  outline-variant: '#50453f'
  surface-tint: '#e6bea8'
  primary: '#e6bea8'
  on-primary: '#432b1b'
  primary-container: '#2b1608'
  on-primary-container: '#9f7c69'
  inverse-primary: '#765846'
  secondary: '#d7c2b7'
  on-secondary: '#3b2e26'
  secondary-container: '#55463d'
  on-secondary-container: '#c9b4a9'
  tertiary: '#b0cbd0'
  on-tertiary: '#1a3438'
  tertiary-container: '#031f23'
  on-tertiary-container: '#6e888d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbc8'
  primary-fixed-dim: '#e6bea8'
  on-primary-fixed: '#2b1609'
  on-primary-fixed-variant: '#5c4130'
  secondary-fixed: '#f4ded2'
  secondary-fixed-dim: '#d7c2b7'
  on-secondary-fixed: '#241912'
  on-secondary-fixed-variant: '#52443b'
  tertiary-fixed: '#cbe8ed'
  tertiary-fixed-dim: '#b0cbd0'
  on-tertiary-fixed: '#031f23'
  on-tertiary-fixed-variant: '#314b4f'
  background: '#151311'
  on-background: '#e8e1dd'
  surface-variant: '#383432'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.5px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin: 24px
---

# Obsidian & Ash Design System

## Brand & Style
The brand identity has evolved from a cold industrial aesthetic into a **Grounded & Organic** dark mode experience. It evokes a sense of geological permanence, warmth, and sophisticated utility. By moving away from pure grays into a palette of clay, stone, and deep forest tones, the design feels more human and tactile while maintaining its rigorous, professional focus. It targets a discerning audience that values a workspace that feels like a natural environment—calm, focused, and deeply rooted in a modern, earthy palette.

## Colors
The system utilizes an earthy, high-fidelity dark-mode architecture. The **Primary** role is defined by a warm clay (#91705d), creating a focal point that is visible yet soft. The **Secondary** taupe (#85746a) and **Tertiary** midnight teal (#031f23) roles provide depth and contrast without sacrificing the organic feel. The **Neutral** palette follows a stone-gray logic, ensuring that the interface remains cohesive and naturally desaturated. This approach reduces visual fatigue by using low-chroma earth tones that provide high legibility without the harshness of pure monochrome.

## Typography
The system utilizes **Inter** across all levels to provide a clean, highly legible, and neutral foundation that balances the warmth of the color palette. Headlines use heavier weights (SemiBold/Bold) to create a clear information hierarchy within the dark, organic environment. Body text is optimized for readability in dark mode, using a regular weight with generous line heights. Labels utilize a medium weight and slight letter spacing to ensure technical information is scannable at small sizes.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a base spacing unit of 8px. It uses a 12-column grid for desktop environments, transitioning to a 4-column grid for mobile. Spacing rhythm is strictly mathematical (multiples of 8), ensuring vertical consistency. Margins and gutters are set to provide ample breathing room, preventing the dark, earthy interface from feeling cramped or overwhelming.

## Elevation & Depth
Depth is conveyed through **Tonal Layers**. In this organic system, elevation is signaled by subtly lightening and warming the surface color of elements that sit "higher" in the stack. Primary surfaces are the darkest (resembling deep soil or obsidian), while cards and floating menus use progressively lighter shades of taupe and stone. This creates a naturalistic depth effect based on perceived light reflecting off elevated surfaces.

## Shapes
The shape language is **Rounded**, providing a necessary softened counterpoint to the deep, sophisticated color palette. Standard components like buttons and input fields utilize a 0.5rem (8px) corner radius. Larger containers, such as cards or modals, scale up to 1rem (16px) or 1.5rem (24px) for a cohesive and approachable appearance that feels hand-finished rather than industrial.

## Components
- **Buttons**: Contained buttons use the Primary Clay (#91705d) with high-contrast text. Secondary buttons use a subtle stone-gray outline.
- **Input Fields**: Borders are neutral stone grays; active states are highlighted with a warm clay border glow to maintain the grounded theme.
- **Cards**: Backgrounds are one step lighter than the main page background, featuring rounded corners (1rem) and minimal borders.
- **Chips**: Used for categorization, featuring low-opacity clay or teal fills to maintain a sophisticated, natural look.
- **Lists**: Separated by thin, low-opacity neutral stone dividers to maintain structure without visual clutter.
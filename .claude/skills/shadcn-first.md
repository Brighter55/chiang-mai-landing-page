---
name: shadcn-first
description: "Prefer shadcn/ui primitives over custom-built components for UI work — buttons, menus, dropdowns, dialogs, forms, cards, and other frontend controls."
---

# shadcn-first

When working on UI in this repo, start with shadcn/ui-style primitives before building custom components.

## Rules

1. **Check existing primitives first** — Look in `src/components/ui/` before writing new HTML+Tailwind from scratch. Components like `Button`, `Card`, and `DropdownMenu` already exist.

2. **Reuse what fits** — If an existing shadcn-style component already does the job (or most of it), use it. Extend with `className` or composition rather than duplicating.

3. **Add missing primitives minimally** — If a primitive doesn't exist, add the smallest composable shadcn-style building block. Keep it generic, reuse existing design tokens, and place it in `src/components/ui/`.

4. **Prefer shadcn patterns for common widgets** — Buttons, menus, dialogs, dropdowns, selects, forms, and cards should be built from shadcn-style primitives (Radix UI + `class-variance-authority` + `cn()`) rather than bespoke one-off widgets.

5. **Stay on-theme** — New primitives should use the CSS variable tokens defined in `index.css` (e.g. `bg-background`, `text-foreground`, `bg-primary`, `border-border`), not hardcoded color values.

## When to use this skill

Invoke `/shadcn-first` when:
- Starting a new UI feature or component
- Reviewing a PR that touches UI code
- Asked how to implement a button, menu, dropdown, dialog, card, or form
- Seeing a custom component that could be replaced with a primitive

---
description: "Use when implementing UI components, menus, buttons, dropdowns, dialogs, forms, or other frontend controls in this repo. Prefer shadcn/ui first instead of building a custom component."
---
# Shadcn First

- Start with shadcn/ui or existing shadcn-style primitives before creating a new custom component.
- Reuse an existing shadcn component when one already fits the job.
- If a component is missing, add the smallest shadcn-style primitive and keep it composable.
- Prefer buttons, menus, dialogs, dropdowns, selects, and forms built from shadcn-style building blocks over bespoke one-off widgets.
- Keep the implementation aligned with the app's existing design tokens and `ui/` patterns.
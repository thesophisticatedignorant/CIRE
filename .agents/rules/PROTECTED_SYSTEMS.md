---
name: CIRE Core System Protections
description: Non-negotiable boundaries preventing the modification or hallucination of core functionalities.
---

# STRICT BOUNDARIES: DO NOT MODIFY

This project contains highly tuned and perfected frontend logic. **UNDER NO CIRCUMSTANCES** are you to modify, "refactor", "clean up", or hallucinate changes to the following systems unless the user explicitly and directly requests a change to them:

## 1. Protected Zones (No-Touch Protocol)
You must **stand clear** of the following elements and web functions:
- **Landing Page Boot Sequence:** Any logic handling the initial site load and boot animations.
- **Deep Link Boot Sequence:** Any logic handling routing, parameter parsing, or initialization when loading directly into a nested path.
- **Protected Content Overlay:** The lock screen, authentication mechanics, password validation, and the visual overlay.
- **Navigation & Carousels:** The carousel functionality, the Finder window behaviors, and the continuous backward history navigation mechanism (`navigationHistory`, `popstate`, `navigateBack`, `navigateForward`, `openGalleryView`, `selectFolder`). These operate on strict contingencies and must not be disrupted.
- **Desktop Layout & Orientation:** The spatial arrangement, grid, folding, or display of the desktop folders.
- **Carousel Display:** The carousel display format, orientation, visual layout, CSS keyframe speeds, and scrolling logic.

## 2. The Golden Rule
- Only change exactly what the user asks you to change. 
- If a requested change overlaps with any of the Protected Zones above, you MUST stop and ask the user for explicit clarification/approval before proceeding.
- **DO NOT** attempt to optimize surrounding code, variable names, or CSS styles if they fall outside the immediate scope of the user's prompt.

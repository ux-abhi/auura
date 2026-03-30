# Aurra — Claude Code Handoff
# Two new pages to add to the existing Next.js project

---

## FILES IN THIS FOLDER

| File | Purpose |
|---|---|
| `about-page-content.md` | All copy, structure, and component notes for /about |
| `privacy-policy-content.md` | Full privacy policy and component notes for /privacy |

---

## WHAT TO BUILD

### Page 1: /about
```
Path:       /app/about/page.tsx
Route:      /about
Nav:        Add "About" link to Nav.tsx between "Specs" and "Pre-order"
```

**Section order:**
1. Hero (eyebrow + headline + sub)
2. Origin story (full-width text, max 720px)
3. Research stat strip (6 large numbers)
4. Science (4 cards, 2×2 grid)
5. Design principles (5 items, numbered 01–05)
6. Workshop findings (3 pull quotes + 3 finding cards)
7. Academic origin (text + CTA)
8. Closing CTA (headline + button)

---

### Page 2: /privacy
```
Path:       /app/privacy/page.tsx
Route:      /privacy
Nav:        Add "Privacy" to Footer.tsx links array
```

**Section order:**
1. Anchor nav pills
2. Opening highlight box (the core principle)
3. Sections 1–11 as defined in the content file
4. Closing highlight box (the quote)

---

## SHARED COMPONENTS TO REUSE

These already exist from the main site build:

```tsx
// Reuse from existing site:
import { fadeUp, stagger } from '@/lib/animations'   // Framer Motion variants
// Font: Playfair Display + Instrument Sans already loaded in layout.tsx
// Colors: use CSS variables from globals.css
```

---

## NEW COMPONENTS TO CREATE

```
/components/ui/HighlightBox.tsx    — left-border callout box
/components/ui/StatStrip.tsx       — large number + label row
/components/ui/ScienceCard.tsx     — bordered card with tag
/components/ui/PrincipleItem.tsx   — numbered principle with body text
/components/ui/PolicyTable.tsx     — styled full-width table
/components/ui/AnchorNav.tsx       — pill links row for policy page
```

---

## NAV UPDATES REQUIRED

In `Nav.tsx`, update the links array:

```tsx
// BEFORE:
const links = ['How it works', 'Features', 'Specs', 'Pre-order']

// AFTER:
const links = ['How it works', 'Features', 'Specs', 'About', 'Pre-order']
```

In `Footer.tsx`, update the links:

```tsx
// BEFORE:
const footerLinks = ['Privacy', 'Terms', 'Contact', 'GitHub']

// AFTER:
const footerLinks = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'About',   href: '/about' },
  { label: 'Terms',   href: '/terms' },
  { label: 'Contact', href: 'mailto:hello@aurra.io' },
]
```

---

## IMPORTANT CONSTRAINTS

1. No scroll reveal animations on the /privacy page — content must be
   immediately readable (accessibility + print).

2. All body text on both pages uses Instrument Sans weight 300, NOT 400.
   This matches the main site's lighter body treatment.

3. The data table in Privacy Section 4 must be responsive — on mobile,
   collapse to a card-per-row format with label: value pairs.

4. Pull quotes on the About page use `font-family: var(--font-serif)`
   (Playfair Display), italic, with a left border `3px solid #1d1d1f`.

5. The "Request the full research report" CTA links to:
   `mailto:research@aurra.io?subject=Research Report Request`

6. Confirm both pages are included in the sitemap.xml (if you added one).

---

## AFTER BUILDING — CHECKLIST

- [ ] /about loads at localhost:3000/about with no errors
- [ ] /privacy loads at localhost:3000/privacy with no errors
- [ ] Nav "About" link works and highlights on scroll
- [ ] Footer "Privacy" link navigates correctly
- [ ] Anchor nav pills on /privacy scroll to correct sections
- [ ] Data table on /privacy is responsive on mobile viewport (375px)
- [ ] All pull quotes render in Playfair Display italic
- [ ] Stat numbers on /about render in Playfair Display weight 300
- [ ] Science cards have hover lift animation
- [ ] Opening highlight box on /privacy has correct left border styling
- [ ] Print stylesheet hides nav/footer on /privacy

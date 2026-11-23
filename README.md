# DecodeLabs Industrial Training Kit: Project 1
## The Responsive Architecture — Strategic Execution Framework

**Track:** Full Stack Development (Interface Phase)  
**Cohort:** Batch 2026  
**Provider:** DecodeLabs (Greater Lucknow, India)  
**Standard:** Mobile-First, Semantic HTML5, WCAG 2.2 AA/AAA, 0 Frameworks  

---

## 📋 Executive Overview

Project 1 serves as the foundational milestone of the DecodeLabs Full-Stack Development track. Mandated on **Slide 2 and Slide 7**, this milestone enforces mastery of core front-end fundamentals without relying on high-level abstractions or CSS/JS frameworks (such as React, Vue, Bootstrap, or Tailwind). 

The application implements a responsive, highly accessible interface built on:
- **HTML5:** Semantic landmark infrastructure (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`).
- **CSS3:** Macro 2D layout planning using CSS Grid, micro-component alignment via Flexbox, and fluid typography via `clamp()`.
- **Vanilla JavaScript:** Reactive state management, client search, LocalStorage persistence, accessible modal dialogs, and diagnostic tools.
- **2025/2026 Design Tokens:** Warm, grounded aesthetic palette featuring **Mocha Mousse**, **Ethereal Blue**, and **Moonlit Grey**.

---

## 🎨 Color Palette & Aesthetic Tokens (Slide 9)

In adherence to Pillar 2 (Visual Design & 2025 Aesthetics), sterile cold tech styling is replaced by warm, grounded tones with certified contrast ratios:

| Token Name | Hex Code | Significance | Usage |
| :--- | :--- | :--- | :--- |
| **Mocha Mousse** | `#A5856F` | Stability & Structure | Primary branding, buttons, active states, borders |
| **Ethereal Blue** | `#A0D4E0` | Trust & Clarity | Accent highlights, simulated device monitors, pills |
| **Moonlit Grey** | `#F2F0EA` | Refinement & Calm | Neutral page canvas, card backgrounds, elevated surfaces |
| **Espresso Dark** | `#261E1A` | High Contrast | Typography, code snippets, WCAG AAA text anchors |

### Typography Constraints (Slide 9)
- **Headlines:** `Montserrat` (Geometric, 600 & 700 weights)
- **Body:** `Open Sans` (Readable, 400 & 600 weights)
- **Constraint:** Maximum 2 font families, 3 total weights loaded via Google Fonts with `font-display: swap`.

---

## 📐 Responsive Topology & Strategy (Slide 11)

### 1. Mobile-First Paradigm
The CSS architecture builds upwards from mobile constraints. Base styles apply to single-column viewports (< 768px). Media queries progressively expand the floorplan:
- **Mobile (< 768px):** Single-column stream, off-canvas navigation drawer, stacked hero metrics.
- **Tablet (`@media (min-width: 768px)`):** 2-column card grid, 2-column roadmap, view density switcher, inline announcement tags.
- **Desktop (`@media (min-width: 1024px)`):** 
  - Macro Layout: 2-column layout (`2fr 1fr`) pairing the Content Stream with a persistent Architectural Sidebar.
  - Horizontal inline navigation bar.
  - 3-column roadmap progression.
  - 4-column terminal footer.

### 2. Macro vs. Micro Division
- **Macro Layout:** Handled exclusively with **CSS Grid** (`display: grid`, `grid-template-columns: 2fr 1fr`, `gap: var(--space-2xl)`).
- **Micro Components:** Handled with **Flexbox** (`display: flex`, `justify-content: space-between`, `align-items: center`) for headers, metadata clusters, tag chips, and action footers.

### 3. Fluid Typography via `clamp()`
Eliminates abrupt font-snapping across breakpoints:
```css
--font-size-hero: clamp(2.25rem, 1.8rem + 2.5vw, 3.65rem);
--font-size-xl: clamp(1.75rem, 1.4rem + 1.5vw, 2.5rem);
--font-size-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
```

---

## 🛠️ Features & Interactive Modules

1. **Semantic HTML5 Landmark Architecture:**
   - `<a class="skip-link" href="#main-content">` for assistive navigation.
   - Screen-reader labeled sections and ARIA live regions for status announcements.
2. **Interactive Search & Filter Engine:**
   - Real-time client search across module titles, excerpts, and tags.
   - Category filtering (`All`, `Foundations`, `Layout Systems`, `Aesthetics & WCAG`, `Logic & State`).
3. **Module Bookmarking & Persistence:**
   - Click bookmark icons on cards to save modules to browser `localStorage`.
   - Real-time counter badge in the header.
   - Slide-out Bookmarks Drawer with inspection triggers and item removal.
4. **Architectural Deep-Dive Modal:**
   - Native `<dialog>` implementation with keyboard trap, Escape handling, and backdrop click dismiss.
   - Displays full curriculum details and code blueprints.
5. **Interactive `clamp()` Typography Sandbox:**
   - Live range slider allowing interns to simulate viewport widths from 320px to 1440px and observe calculated typography in real time.
6. **Live Viewport Diagnostic Widget:**
   - Active screen width counter displaying the current responsive classification (Mobile, Tablet, Desktop).
7. **Color Token One-Click Clipboard Copy:**
   - Allows instant copying of Mocha Mousse, Ethereal Blue, and Moonlit Grey tokens with toast notifications.
8. **High-Contrast Theme Switcher:**
   - Accessibility feature boosting contrast ratios to exceed WCAG AAA standards.

---

## 📁 Project Structure

```text
P1/
├── index.html          # Semantic HTML5 root document
├── styles/
│   └── main.css        # Mobile-first CSS Grid, Flexbox, & 2025 tokens
├── scripts/
│   └── app.js          # Pure vanilla JavaScript state & interactions
└── README.md           # Engineering documentation & qualification criteria
```

---

## 🚀 How to Run & Verify

Because this project is built using 100% vanilla web standards:
1. Double-click `index.html` or open it directly in any modern browser (Chrome, Edge, Firefox, Safari).
2. Alternatively, serve via any static web server:
   ```bash
   # Python 3
   python -m http.server 3000

   # Node npx
   npx serve .
   ```
3. Test responsive views using browser DevTools (Ctrl + Shift + M / Cmd + Shift + M) to inspect:
   - Mobile: 360px - 414px
   - Tablet: 768px - 820px
   - Desktop: 1024px - 1440px+

---

## 🛡️ DecodeLabs Qualification Compliance (Slide 3 & 4)

- [x] **Requirement 1:** HTML5, CSS3, and vanilla JavaScript only (No external runtime libraries or frameworks).
- [x] **Requirement 2:** Fully responsive layout with mobile-first media queries (`768px`, `1024px`).
- [x] **Requirement 3:** Clean, user-friendly UI incorporating the 2025 aesthetic palette (#A5856F, #A0D4E0, #F2F0EA).
- [x] **Requirement 4:** Semantic integrity, accessible landmarks, and WCAG compliance.

**Contact:**
- **Email:** `decodelabs.tech@gmail.com`
- **Phone:** `+91 89330 06408`
- **Location:** Greater Lucknow, India  
- **Web:** [www.decodelabs.tech](https://www.decodelabs.tech)

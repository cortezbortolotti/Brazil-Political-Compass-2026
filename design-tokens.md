# Design Tokens - Political Compass Brasil 2026

## Color Palette

### Core Colors
- `--bg`: `#0d1117` — Background principal (escuro)
- `--bg2`: `#010409` — Background secundário (mais escuro)
- `--card`: `#161b22` — Cards, componentes, modais
- `--txt`: `#ffffff` — Texto primário
- `--txt2`: `#8b949e` — Texto secundário/cinza
- `--txt2-contrast`: `#a0a7b4` — Texto secundário com melhor contraste
- `--txt2-light`: `#6b7280` — Texto secundário em fundos claros (futuro)
- `--border`: `rgba(48,54,61,0.5)` — Bordas, separadores

### Status Colors
- `--status-success`: `#10b981` — Concordância/sucesso (verde)
- `--status-warning`: `#f59e0b` — Neutralidade/aviso (amarelo)
- `--status-error`: `#ef4444` — Discordância/erro (vermelho)

### Primary Brand
- `--green`: `#00c781` — CTA primária, hover, acentos
- `--green2`: `#0a9960` — CTA primária hover state
- `--purple`: `#8b5cf6` — Acentos secundários, gradientes

---

## Typography

### Family
- **Font**: `'Inter'` (Google Fonts)
- **Fallback**: `sans-serif`

### Weights
| Weight | Use Case |
|---|---|
| 400 | Body text |
| 500 | Subtext, labels |
| 600 | Default button, emphasis |
| 700 | Buttons, headings |
| 800 | Section titles, badges |
| 900 | Main titles, large headings |

### Scale
| Size | CSS Value | Use Case |
|---|---|---|
| xs | 0.72rem | Labels, small badges |
| sm | 0.85rem | Small text, footer |
| md | 0.95rem | Body text |
| lg | 1rem | Button text |
| xl | 1.1-1.35rem | Subheadings |
| 2xl | 1.5rem | Section titles |
| 3xl | 2rem+ | Main titles (clamp: 2rem - 3.2rem) |

---

## Spacing Scale

- **xs**: `0.25rem` — Fine adjustments
- **sm**: `0.5rem` — Small gaps
- **md**: `0.75rem` — Default gap, option spacing
- **lg**: `1rem` — Button padding, margins
- **xl**: `1.5rem` — Card padding, section spacing
- **2xl**: `2rem` — Container padding, header height base
- **3xl**: `2.5rem` — Large sections

---

## Components

### Buttons

#### Primary Button (`.btn-p`)
```css
padding: 0.9rem 1.8rem;
background: var(--green);
color: var(--bg);
font-weight: 700;
border-radius: 8px;
transition: all 0.2s;
```
**States**:
- Normal: green background
- Hover: green2 background, translateY(-2px)
- Disabled: opacity 0.4

#### Secondary Button (`.btn-s`)
```css
padding: 0.9rem 1.8rem;
background: var(--card);
color: var(--txt);
border: 1px solid var(--border);
border-radius: 8px;
```
**States**:
- Hover: border-color green

#### Ghost Button (`.btn-ghost`)
```css
background: transparent;
border: 1px solid var(--border);
color: var(--txt2);
padding: 0.45rem 0.9rem;
```
**States**:
- Hover: border-color green, color txt

#### Navigation Link (`.nav-link`)
```css
font-size: 0.8rem;
font-weight: 700;
padding: 0.4rem 0.75rem;
border-radius: 6px;
color: var(--txt2);
```
**States**:
- Hover: background rgba(255,255,255,0.05), color txt
- Active: color green

#### Language Button (`.btn-lang`)
```css
font-size: 0.72rem;
padding: 0.3rem 0.55rem;
background: transparent;
```
**States**:
- Active: background green, color bg

#### Option Button (`.opt`)
```css
padding: 1.1rem 1.4rem;
background: var(--bg2);
border: 1px solid var(--border);
border-radius: 8px;
```
**States**:
- Hover: border-color green, background card
- Selected: background rgba(0,199,129,0.12), border-color green, color green

### Cards

#### Generic Card (`.q-card`, `.cand-row`, `.map-card-v`)
```css
background: var(--card);
border: 1px solid var(--border);
border-radius: 12px;
padding: 1.25rem - 2.5rem;
transition: all 0.2s;
```
**States**:
- Hover: border-color green, transform translateY(-2px) ou scale(1.015)

#### Stat Card (`.stat-card`)
```css
background: var(--card);
border: 1px solid var(--border);
border-radius: 16px;
padding: 1rem;
min-height: 102px;
```

### Modals

#### Modal Overlay (`.modal`, `.modal-cand`, `.qr-overlay`)
```css
position: fixed;
inset: 0;
background: rgba(0,0,0,0.7);
backdrop-filter: blur(4px);
z-index: 100;
```

#### Modal Box (`.modal-box`, `.qr-box`)
```css
background: var(--card);
border: 1px solid var(--border);
border-radius: 16px;
padding: 2.5rem;
max-width: 460px;
```

### Badges

#### Status Badges
- `.badge-sim`: `color: var(--status-success)`, background verde 10% opacity
- `.badge-med`: `color: var(--status-warning)`, background amarelo 12% opacity
- `.badge-dif`: `color: var(--status-error)`, background vermelho 10% opacity

### Maps

#### Interactive Map (`.mapa-wrap`)
```css
background: var(--map-wrap-bg);
border-radius: 16px;
border: 1px solid var(--border);
cursor: grab;
```

#### Map Controls (`.mapa-btn`)
```css
width: 32px;
height: 32px;
background: var(--card);
border: 1px solid var(--border);
border-radius: 6px;
```
**States**:
- Hover: background bg2, border-color green, color green

---

## Animations & Transitions

### Easing
- **Standard**: `ease` (0.2s default)
- **Smooth**: `cubic-bezier(0.16, 1, 0.3, 1)` (card hover)
- **Spin**: `linear` (1s, spinner)
- **Bounce**: `cubic-bezier(0.68, -0.55, 0.265, 1.55)` (improved spinner)

### Keyframes
| Animation | Duration | Use |
|---|---|---|
| `q-card-out-next` | 0.18s | Quiz card exit right |
| `q-card-in-next` | 0.2s | Quiz card enter from right |
| `q-card-out-prev` | 0.18s | Quiz card exit left |
| `q-card-in-prev` | 0.2s | Quiz card enter from left |
| `spin` | 0.8s | Spinner rotation |
| `fadeIn` | 0.25s | Card appear |
| `shimmer` | 1.5s | Loading effect |
| `pulsar` | 2s | Map pulse effect |
| `cd-pulse` | 1s | Countdown timer pulse |

---

## Accessibility

### Focus States
All interactive elements have `:focus-visible`:
```css
:focus-visible {
    outline: 2px solid var(--green);
    outline-offset: 2px;
}
```

### ARIA Attributes

#### Navigation
```html
<button class="nav-link ativo" aria-label="Compasso Político" aria-current="page">
```

#### Buttons
```html
<button class="btn-p" aria-label="Iniciar quiz no modo Brasil">
```

#### Modals
```html
<div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <h2 id="modal-title">Título do Modal</h2>
</div>
```

#### Status
```html
<div class="badge" aria-label="Eleições Presidenciais 2026" role="status">
```

### Contrast Ratios (WCAG AA/AAA)
| Foreground | Background | Ratio | Level |
|---|---|---|---|
| `#ffffff` | `#0d1117` | 21:1 | AAA |
| `#8b949e` | `#161b22` | 7.2:1 | AAA |
| `#8b949e` | `#0d1117` | 5.8:1 | AA |
| `#00c781` | `#0d1117` | 7.1:1 | AAA |

---

## Layout Breakpoints

- **Desktop**: max-width 1200px, grid layouts
- **Tablet**: Stack to single column, padding 2rem
- **Mobile**: Full width, padding 1rem, nav resized

---

## Z-Index Hierarchy

| Layer | Z-Index | Use |
|---|---|---|
| Background | 0 | Body, backgrounds |
| Content | 1+ | Cards, buttons, text |
| Modal | 100 | Dialog overlays |
| Tooltip | 2000 | Map tooltips |
| Candidate Modal | 9999 | Highest priority modal |

---

## Icons & Emojis

- **Theme Toggle**: 🌙 (moon emoji)
- **Language**: Text (PT, EN, ES)
- **Globe**: 🌍 (world mode)
- **Brazil Flag**: Image asset (brazil-flag.png)
- **Social Icons**: SVG (YouTube, X/Twitter, Instagram)
- **Map Markers**: SVG with country flags

---

## Typography Examples

```html
<!-- Main Title -->
<h1 class="title">
    <span>Descubra seu</span>
    <span class="grad">posicionamento político</span>
</h1>

<!-- Section Title -->
<h2 class="sec-title">Seu Resultado</h2>

<!-- Description -->
<p class="desc">Compare suas opiniões...</p>

<!-- Label -->
<span class="hero-chip">Modo rápido com 25 perguntas</span>

<!-- Badge -->
<div class="badge">Eleições Presidenciais 2026</div>
```

---

## Notes

- All colors use CSS custom properties (variables) for easy theming
- Spacing uses rem units (based on 16px default) for scalability
- Typography uses Inter from Google Fonts for performance
- Animations are CSS-based (GPU-accelerated) for performance
- Focus states are keyboard-accessible with :focus-visible

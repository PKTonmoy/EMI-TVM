# Smart EMI & TVM Calculator - Design System Guide

A comprehensive design system for building a modern, accessible, and beautiful financial calculator application.

---

## Reference Design

![Reference Design](file:///home/tonmoy/Desktop/EMI%20nad%20TVM%20cal/reference-design.jpg)

The design system is inspired by this clean, modern aesthetic featuring soft blue gradients, rounded cards, and smooth interactions.

---

## Color System

### Color Palette

![Color Palette System](file:///home/tonmoy/Desktop/EMI%20nad%20TVM%20cal/color-palette-system.png)

### Primary Colors

| Color Name | Hex Code | RGB | Usage |
|-----------|---------|-----|-------|
| Primary Blue | `#2B7FF6` | rgb(43, 127, 246) | Buttons, links, active states, primary actions |
| Light Blue | `#4A9FFF` | rgb(74, 159, 255) | Highlights, hover states, chart segments |
| Cyan Accent | `#26E5D8` | rgb(38, 229, 216) | Chart segments, accent elements, success indicators |

### Gradients

**Light Theme Background**
```css
background: linear-gradient(180deg, #E8F3FF 0%, #FFFFFF 100%);
```

**Dark Theme Background**
```css
background: linear-gradient(180deg, #0F1B2E 0%, #1A2942 100%);
```

**Primary Button Gradient**
```css
background: linear-gradient(135deg, #2B7FF6 0%, #4A9FFF 100%);
```

**Result Card Gradient**
```css
background: linear-gradient(135deg, #2B7FF6 0%, #4A9FFF 100%);
```

### Neutral Colors

| Color Name | Hex Code | Light Mode Usage | Dark Mode Usage |
|-----------|---------|-----------------|----------------|
| White | `#FFFFFF` | Backgrounds, cards | Text, icons |
| Light Gray | `#F5F7FA` | Secondary backgrounds | N/A |
| Medium Gray | `#8E9AAB` | Secondary text, placeholders | Secondary text |
| Dark Gray | `#2D3748` | Primary text | Card backgrounds |
| Near Black | `#1A202C` | Headers, emphasis | Backgrounds |

### Semantic Colors

| Color | Hex Code | Usage |
|-------|---------|-------|
| Success Green | `#10B981` | Success messages, confirmation, positive indicators |
| Warning Orange | `#F59E0B` | Warnings, cautions, important notices |
| Error Red | `#EF4444` | Errors, validation failures, destructive actions |
| Info Blue | `#3B82F6` | Information, tips, help text |

### CSS Custom Properties

```css
:root {
  /* Primary Colors */
  --color-primary: #2B7FF6;
  --color-primary-light: #4A9FFF;
  --color-accent: #26E5D8;
  
  /* Gradients */
  --gradient-bg-light: linear-gradient(180deg, #E8F3FF 0%, #FFFFFF 100%);
  --gradient-bg-dark: linear-gradient(180deg, #0F1B2E 0%, #1A2942 100%);
  --gradient-button: linear-gradient(135deg, #2B7FF6 0%, #4A9FFF 100%);
  
  /* Neutrals - Light Mode */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F5F7FA;
  --color-text-primary: #1A202C;
  --color-text-secondary: #6B7280;
  --color-border: #E5E7EB;
  
  /* Semantic */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #3B82F6;
  
  /* Shadows */
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.12);
  --shadow-xl: 0 12px 24px rgba(0, 0, 0, 0.15);
  --shadow-glow: 0 0 20px rgba(43, 127, 246, 0.5);
}

[data-theme="dark"] {
  /* Neutrals - Dark Mode */
  --color-bg-primary: #1E293B;
  --color-bg-secondary: #0F172A;
  --color-text-primary: #F9FAFB;
  --color-text-secondary: #9CA3AF;
  --color-border: #374151;
  
  /* Adjusted gradient for dark mode */
  --gradient-button: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
}
```

---

## Typography

### Font Families

**Primary Font: Inter**
- Usage: Body text, UI elements, navigation
- Weights: 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)
- Source: Google Fonts
- Fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

**Numeric Font: DM Sans**
- Usage: Numbers, calculations, financial data
- Weights: 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)
- Features: Tabular numerals for alignment
- Fallback: `'Inter', sans-serif`

### Font Import

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
```

### Typography Scale

| Name | Size | Line Height | Weight | Usage |
|------|------|-------------|---------|-------|
| Display1 | 48px / 3rem | 1.2 | 700 | EMI hero display |
| H1 | 32px / 2rem | 1.3 | 700 | Page titles |
| H2 | 24px / 1.5rem | 1.4 | 600 | Section headers |
| H3 | 20px / 1.25rem | 1.4 | 600 | Card headers |
| H4 | 18px / 1.125rem | 1.5 | 600 | Subsection headers |
| Body Large | 18px / 1.125rem | 1.6 | 400 | Large body text |
| Body | 16px / 1rem | 1.6 | 400 | Default body text |
| Body Small | 14px / 0.875rem | 1.6 | 400 | Secondary text |
| Caption | 12px / 0.75rem | 1.5 | 500 | Labels, captions |
| Overline | 12px / 0.75rem | 1.5 | 600 | Overlines, tags |

### CSS Typography Classes

```css
.display-1 {
  font-family: 'DM Sans', 'Inter', sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.5px;
}

.heading-1 {
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.5px;
}

.heading-2 {
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.4;
}

.body-text {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
}

.numeric {
  font-family: 'DM Sans', 'Inter', sans-serif;
  font-variant-numeric: tabular-nums;
}

.label {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
```

---

## Spacing System

### Base Unit: 8px

The spacing system follows an 8-point grid for consistency and visual rhythm.

| Name | Value | Pixels | Usage |
|------|-------|--------|-------|
| xxs | 0.25rem | 4px | Tight spacing, icon gaps |
| xs | 0.5rem | 8px | Small gaps, padding |
| sm | 0.75rem | 12px | Compact spacing |
| md | 1rem | 16px | Default spacing |
| lg | 1.5rem | 24px | Section spacing |
| xl | 2rem | 32px | Large gaps |
| 2xl | 3rem | 48px | Major sections |
| 3xl | 4rem | 64px | Page sections |

### CSS Custom Properties

```css
:root {
  --spacing-xxs: 4px;
  --spacing-xs: 8px;
  --spacing-sm: 12px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;
}
```

### Usage Examples

```css
/* Card padding */
.card {
  padding: var(--spacing-lg); /* 24px */
}

/* Section margins */
.section {
  margin-bottom: var(--spacing-xl); /* 32px */
}

/* Component gaps */
.flex-container {
  gap: var(--spacing-md); /* 16px */
}
```

---

## Border Radius

### Radius Scale

| Name | Value | Pixels | Usage |
|------|-------|--------|-------|
| None | 0 | 0px | Sharp corners |
| xs | 0.25rem | 4px | Small elements |
| sm | 0.5rem | 8px | Chips, tags |
| md | 0.75rem | 12px | Buttons, inputs |
| lg | 1rem | 16px | Cards, modals |
| xl | 1.5rem | 24px | Large cards |
| full | 9999px | Round | Pills, avatars |

### CSS Custom Properties

```css
:root {
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;
}
```

---

## Shadows & Elevation

### Shadow Levels

| Level | CSS Value | Usage |
|-------|-----------|-------|
| 1 | `0 2px 4px rgba(0, 0, 0, 0.05)` | Subtle lift, input fields |
| 2 | `0 4px 8px rgba(0, 0, 0, 0.08)` | Cards, default elevation |
| 3 | `0 8px 16px rgba(0, 0, 0, 0.12)` | Elevated cards, dropdowns |
| 4 | `0 12px 24px rgba(0, 0, 0, 0.15)` | Modals, popovers |
| 5 | `0 20px 40px rgba(0, 0, 0, 0.2)` | Highest elevation |
| Glow | `0 0 20px rgba(43, 127, 246, 0.5)` | Primary button glow |

### Combined Shadows

For buttons and interactive elements, combine elevation with glow:

```css
.button-primary:hover {
  box-shadow: 
    0 6px 20px rgba(43, 127, 246, 0.4),
    0 0 20px rgba(43, 127, 246, 0.3);
}
```

---

## Component Visual Examples

### Button Components

![Component Showcase](file:///home/tonmoy/Desktop/EMI%20nad%20TVM%20cal/component-showcase.png)

The image above shows the three main button variants, slider component, and input field styling.

### Ring Chart Visualization

![Ring Chart Example](file:///home/tonmoy/Desktop/EMI%20nad%20TVM%20cal/ring-chart-example.png)

Example of the ring chart displaying principal vs interest breakdown with proper colors and typography.

---

## Component Styling Guide

### Buttons

#### Primary Button

```css
.btn-primary {
  background: linear-gradient(135deg, #2B7FF6 0%, #4A9FFF 100%);
  color: #FFFFFF;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 0 24px;
  height: 56px;
  border: none;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(43, 127, 246, 0.4);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
  transform: scale(1.02);
  box-shadow: 
    0 6px 20px rgba(43, 127, 246, 0.5),
    0 0 20px rgba(43, 127, 246, 0.3);
}

.btn-primary:active {
  transform: scale(0.98);
}

.btn-primary.glow {
  box-shadow: 
    0 4px 16px rgba(43, 127, 246, 0.4),
    0 0 20px rgba(43, 127, 246, 0.5);
}
```

#### Secondary Button (Outlined)

```css
.btn-secondary {
  background: transparent;
  color: #2B7FF6;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 0 24px;
  height: 56px;
  border: 2px solid #2B7FF6;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: rgba(43, 127, 246, 0.05);
}
```

### Cards

#### White Card

```css
.card {
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card.hoverable:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
```

#### Gradient Card (Result Display)

```css
.card-gradient {
  background: linear-gradient(135deg, #2B7FF6 0%, #4A9FFF 100%);
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 8px 32px rgba(43, 127, 246, 0.15);
  color: #FFFFFF;
}
```

### Sliders

```css
.slider-container {
  padding: 16px 0;
}

.slider-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #4B5563;
}

.slider-value {
  font-size: 16px;
  font-weight: 600;
  color: #2B7FF6;
  font-family: 'DM Sans', sans-serif;
}

.slider-track {
  position: relative;
  height: 4px;
  background: #E5E7EB;
  border-radius: 2px;
}

.slider-fill {
  position: absolute;
  height: 4px;
  background: linear-gradient(90deg, #2B7FF6 0%, #4A9FFF 100%);
  border-radius: 2px;
  transition: width 0.1s ease;
}

.slider-thumb {
  width: 16px;
  height: 16px;
  background: #FFFFFF;
  border: 2px solid #2B7FF6;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: grab;
  transition: transform 0.2s ease;
}

.slider-thumb:hover {
  transform: scale(1.125);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
}

.slider-thumb:active {
  cursor: grabbing;
  transform: scale(1.25);
}
```

### Input Fields

```css
.input-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

.input-field {
  height: 56px;
  padding: 0 20px;
  font-size: 18px;
  font-family: 'DM Sans', 'Inter', sans-serif;
  background: #FFFFFF;
  border: 1px solid #D1D5DB;
  border-radius: 12px;
  color: #1F2937;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.input-field:focus {
  outline: none;
  border: 2px solid #2B7FF6;
  box-shadow: 0 0 0 4px rgba(43, 127, 246, 0.1);
}

.input-field.error {
  border: 2px solid #EF4444;
  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1);
}
```

---

## Animations & Transitions

### Timing Functions

```css
:root {
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### Duration Standards

| Duration | Value | Usage |
|----------|-------|-------|
| Instant | 100ms | Quick feedback |
| Fast | 200ms | Hover states |
| Normal | 300ms | Default transitions |
| Slow | 500ms | Modal entry/exit |
| Slower | 800ms | Chart animations |

### Common Animations

#### Fade In
```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 0.3s ease-out;
}
```

#### Slide Up
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-up {
  animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
```

#### Number Count Up
```css
@keyframes countUp {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.count-up {
  animation: countUp 0.6s ease-out;
}
```

#### Pulse (Loading)
```css
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

---

## Responsive Design Tokens

### Breakpoints

```css
:root {
  --breakpoint-xs: 320px;
  --breakpoint-sm: 375px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
}
```

### Media Query Mixins (SCSS)

```scss
@mixin mobile-small {
  @media (max-width: 374px) {
    @content;
  }
}

@mixin mobile {
  @media (min-width: 375px) and (max-width: 767px) {
    @content;
  }
}

@mixin tablet {
  @media (min-width: 768px) and (max-width: 1023px) {
    @content;
  }
}

@mixin desktop {
  @media (min-width: 1024px) {
    @content;
  }
}
```

### Responsive Typography

```css
/* Mobile Small */
@media (max-width: 374px) {
  .display-1 { font-size: 32px; }
  .heading-1 { font-size: 24px; }
  .body-text { font-size: 14px; }
}

/* Mobile Medium */
@media (min-width: 375px) and (max-width: 767px) {
  .display-1 { font-size: 40px; }
  .heading-1 { font-size: 28px; }
  .body-text { font-size: 16px; }
}

/* Tablet */
@media (min-width: 768px) {
  .display-1 { font-size: 48px; }
  .heading-1 { font-size: 32px; }
}

/* Desktop */
@media (min-width: 1024px) {
  .display-1 { font-size: 56px; }
  .heading-1 { font-size: 40px; }
}
```

---

## Dark Mode Implementation

### Automatic Switching

```javascript
// Detect system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Apply theme
document.documentElement.setAttribute(
  'data-theme',
  prefersDark.matches ? 'dark' : 'light'
);

// Listen for changes
prefersDark.addEventListener('change', (e) => {
  document.documentElement.setAttribute(
    'data-theme',
    e.matches ? 'dark' : 'light'
  );
});
```

### Dark Mode Color Overrides

```css
[data-theme="dark"] {
  /* Backgrounds */
  --color-bg-primary: #1E293B;
  --color-bg-secondary: #0F172A;
  --color-bg-tertiary: #334155;
  
  /* Text */
  --color-text-primary: #F9FAFB;
  --color-text-secondary: #9CA3AF;
  --color-text-tertiary: #6B7280;
  
  /* Borders */
  --color-border: #374151;
  --color-border-light: rgba(255, 255, 255, 0.1);
  
  /* Cards */
  --card-bg: #1E293B;
  --card-border: rgba(255, 255, 255, 0.1);
  
  /* Shadows - Adjusted for dark backgrounds */
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.5);
  
  /* Gradient adjustments */
  --gradient-button: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
  --gradient-card: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
}
```

---

## Accessibility Standards

### Color Contrast Ratios

All text meets **WCAG AA** standards:

| Element | Contrast Ratio | Standard |
|---------|----------------|----------|
| Large text (18px+) | 3:1 minimum | AA |
| Normal text | 4.5:1 minimum | AA |
| UI components | 3:1 minimum | AA |

### Focus Indicators

```css
*:focus-visible {
  outline: 2px solid #2B7FF6;
  outline-offset: 2px;
}

/* Custom focus for buttons */
.btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 4px rgba(43, 127, 246, 0.4);
}

/* Custom focus for inputs */
.input:focus-visible {
  outline: none;
  border-color: #2B7FF6;
  box-shadow: 0 0 0 4px rgba(43, 127, 246, 0.1);
}
```

### Touch Targets

Minimum touch target size: **44x44px** (iOS), **48x48px** (Android)

```css
.btn,
.slider-thumb,
.toggle,
.nav-item {
  min-width: 44px;
  min-height: 44px;
}
```

---

## Icon System

### Recommended Icon Library

**Lucide Icons** (lightweight, customizable SVG icons)
- Size: 24px default
- Stroke Width: 2px
- Color: Inherit from parent

### Usage

```jsx
import { DollarSign, TrendingUp, Calculator } from 'lucide-react';

<Icon 
  icon={DollarSign} 
  size={24} 
  color="currentColor"
  strokeWidth={2}
/>
```

### Common Icons

| Purpose | Icon Name |
|---------|-----------|
| Currency | DollarSign, CreditCard |
| Charts | TrendingUp, PieChart, BarChart |
| Actions | Download, Upload, Save, Share |
| Navigation | Home, Menu, ChevronRight, ArrowLeft |
| Status | Check, X, AlertTriangle, Info |
| User | User, Settings, LogIn, LogOut |

---

## Grid System

### Container

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

@media (min-width: 768px) {
  .container {
    padding: 0 24px;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 32px;
  }
}
```

### Grid Layout

```css
.grid {
  display: grid;
  gap: 16px;
}

/* Mobile: 1 column */
.grid {
  grid-template-columns: 1fr;
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

/* Desktop: 3 columns */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
}
```

---

## Design Principles

### 1. Clarity
- Use clear hierarchy with typography and spacing
- Prioritize readability with adequate contrast
- Guide users with visual cues and feedback

### 2. Consistency
- Reuse components across the application
- Maintain consistent spacing and sizing
- Follow established patterns

### 3. Efficiency
- Minimize user actions required
- Provide real-time feedback
- Use smart defaults

### 4. Accessibility
- Support keyboard navigation
- Provide screen reader support
- Ensure sufficient color contrast
- Use semantic HTML

### 5. Delight
- Add subtle micro-animations
- Use smooth transitions
- Provide satisfying interactions
- Balance beauty with function

---

## Quick Reference

### Most Common Values

```css
/* Colors */
Primary Blue: #2B7FF6
Accent Cyan: #26E5D8
Success: #10B981
Error: #EF4444

/* Spacing */
Small gap: 12px
Medium gap: 16px
Large gap: 24px
Card padding: 24px

/* Border Radius */
Button: 12-16px
Card: 16-24px
Input: 12px

/* Typography */
Hero: 48px bold
Heading: 24px semi-bold
Body: 16px regular
Label: 12px medium uppercase

/* Shadows */
Card: 0 2px 8px rgba(0,0,0,0.04)
Button: 0 4px 16px rgba(43,127,246,0.4)
Elevated: 0 8px 16px rgba(0,0,0,0.12)
Glow: 0 0 20px rgba(43,127,246,0.5)

/* Transitions */
Fast: 200ms
Normal: 300ms
Slow: 500ms
Easing: cubic-bezier(0.4, 0, 0.2, 1)
```

---

## Implementation Checklist

- [ ] Import fonts (Inter, DM Sans)
- [ ] Set up CSS custom properties
- [ ] Create base styles (reset, typography)
- [ ] Build component library
- [ ] Implement dark mode toggle
- [ ] Test color contrast (WCAG AA)
- [ ] Verify touch target sizes (44px+)
- [ ] Test keyboard navigation
- [ ] Optimize for mobile (320px+)
- [ ] Add micro-animations
- [ ] Test across browsers
- [ ] Validate responsive breakpoints


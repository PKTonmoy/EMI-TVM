# Smart EMI & TVM Calculator - UI Wireframes

This document provides detailed wireframes for all screens and components of the Smart EMI & TVM Calculator mobile app.

---

## Design Reference

![Reference Image](/home/tonmoy/.gemini/antigravity/brain/b622d599-ec1c-4fa5-9267-960d47af4849/uploaded_image_1763890790857.jpg)

The design follows the clean, modern aesthetic shown in the reference image with soft blue gradients, rounded cards, and smooth sliders.

---

## Screen 1: EMI Calculator (Home Page)

### Mobile View (320px - 768px)

```
┌─────────────────────────────────────┐
│  ≡  Smart Calculator          🌙    │  ← Header (60px)
├─────────────────────────────────────┤
│                                     │
│  ╔═══════════════════════════════╗ │  ← Result Card (Gradient Blue)
│  ║     💰                        ║ │     Border Radius: 24px
│  ║                               ║ │     Padding: 24px
│  ║     Your EMI is               ║ │     Shadow: 0 8px 32px rgba(43,127,246,0.15)
│  ║       $250                    ║ │  
│  ║     per month                 ║ │  ← Large display text (48px, bold)
│  ║                               ║ │
│  ║  ┌─────────────┬───────────┐ ║ │  ← Two-column layout
│  ║  │ Principal   │ Interest  │ ║ │
│  ║  │ Amount      │ Payable   │ ║ │
│  ║  │ $25000      │ $5000     │ ║ │
│  ║  └─────────────┴───────────┘ ║ │
│  ║  ─────────────────────────── ║ │  ← Divider
│  ║     Total Payment             ║ │
│  ║       $30000                  ║ │
│  ║                               ║ │
│  ║  View Full Breakdown →        ║ │  ← Link (14px)
│  ╚═══════════════════════════════╝ │
│                                     │
│  ┌─────────────────────────────┐   │  ← Input Card (White)
│  │                             │   │     Border Radius: 20px
│  │  Loan Amount      $25000    │   │     Padding: 20px
│  │  ━━━━━━━━━●─────────────    │   │  ← Slider
│  │                             │   │     Track: #E5E7EB
│  │                             │   │     Filled: #2B7FF6
│  │  Interest Rate    9%        │   │     Thumb: 16px circle, white
│  │  ━━━━━━●─────────────────   │   │     Shadow on thumb
│  │                             │   │
│  │  Loan Tenure(Months)  14    │   │
│  │  ━━━━━●──────────────────   │   │
│  │                             │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │  ← CTA Button
│  │      Apply Now              │   │     Height: 56px
│  └─────────────────────────────┘   │     Background: #2B7FF6
│                                     │     Border Radius: 16px
│  Save Calculation                   │     Box Shadow: 0 4px 16px rgba(43,127,246,0.4)
│                                     │     + Glow effect on hover
└─────────────────────────────────────┘
     ↑ Spacing: 16px between cards
```

### Dimensions & Spacing

**Result Card:**
- Width: calc(100% - 32px)
- Margin: 16px
- Padding: 24px
- Border Radius: 24px
- Background: `linear-gradient(135deg, #2B7FF6 0%, #4A9FFF 100%)`
- Text Color: White

**EMI Display:**
- Font Size: 48px
- Font Weight: 700
- Line Height: 1.2
- "per month" text: 14px, opacity 0.9

**Principal/Interest Cards:**
- Display: Flex (50% each)
- Gap: 12px
- Font Size: 12px (label), 18px (value)
- Semi-bold: 600

**Input Card:**
- Background: White
- Border: 1px solid rgba(43, 127, 246, 0.1)
- Box Shadow: 0 2px 8px rgba(0, 0, 0, 0.04)

**Slider Specifications:**
- Track Height: 4px
- Track Background: #E5E7EB
- Active Track: #2B7FF6
- Thumb Size: 16px diameter
- Thumb Background: White
- Thumb Shadow: 0 2px 4px rgba(0,0,0,0.2)
- Hover Thumb Size: 18px (scale transform)

**Apply Now Button:**
- Height: 56px
- Font Size: 16px
- Font Weight: 600
- Letter Spacing: 0.5px
- Transition: all 0.3s ease
- Hover: `box-shadow: 0 6px 20px rgba(43,127,246,0.5), 0 0 20px rgba(43,127,246,0.3)`

---

## Screen 2: Breakdown Page

### Mobile View

```
┌─────────────────────────────────────┐
│  ←  EMI Breakdown            🌙  ⋮  │  ← Header with back button
├─────────────────────────────────────┤
│                                     │
│  ╔═══════════════════════════════╗ │  ← Summary Card (White)
│  ║      Your EMI is              ║ │
│  ║        $250                   ║ │
│  ║      per month                ║ │
│  ║                               ║ │
│  ║   ┌─────────────────┐         ║ │
│  ║   │   ╭─────╮       │         ║ │
│  ║   │  ╱       ╲      │         ║ │  ← Ring Chart
│  ║   │ │  $250   │     │         ║ │     Outer: Blue (#2B7FF6) - Principal
│  ║   │  ╲       ╱      │         ║ │     Inner: Cyan (#26E5D8) - Interest
│  ║   │   ╰─────╯       │         ║ │     Center: EMI value
│  ║   └─────────────────┘         ║ │
│  ║                               ║ │
│  ║   🔵 Principal Amount  70%    ║ │  ← Legend
│  ║      $25000                   ║ │
│  ║   🟢 Interest Payable  30%    ║ │
│  ║      $5000                    ║ │
│  ║                               ║ │
│  ║   Total Payment               ║ │
│  ║   $30000                      ║ │
│  ╚═══════════════════════════════╝ │
│                                     │
│  ┌─────────────────────────────┐   │  ← Payment Timeline Chart
│  │  Payment Over Time          │   │
│  │                             │   │
│  │  $30k ┤                     │   │
│  │       │     ╱───────        │   │  ← Area chart
│  │  $20k ┤   ╱                 │   │     Gradient fill
│  │       │ ╱                   │   │
│  │  $10k ┤╱                    │   │
│  │       └──────────────────   │   │
│  │       1m    7m    14m       │   │
│  └─────────────────────────────┘   │
│                                     │
│  Amortization Schedule              │  ← Section Header
│                                     │
│  ┌─────────────────────────────┐   │  ← Table Card
│  │ Month  Payment  Principal   │   │     Sticky header
│  │        Interest   Balance   │   │     Horizontal scroll
│  ├─────────────────────────────┤   │
│  │   1    $250    $187.62      │   │  ← Table rows
│  │        $62.50  $24,812.38   │   │     Zebra striping
│  ├─────────────────────────────┤   │
│  │   2    $250    $188.45      │   │
│  │        $61.67  $24,623.93   │   │
│  ├─────────────────────────────┤   │
│  │   3    $250    $189.29      │   │
│  │        $60.83  $24,434.64   │   │
│  │   [scroll for more...]     │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │  ← Download Button
│  │    📥 Download as PDF       │   │     Outlined style
│  └─────────────────────────────┘   │     Border: 2px solid #2B7FF6
│                                     │
└─────────────────────────────────────┘
```

### Ring Chart Specifications

**Dimensions:**
- Outer Diameter: 200px
- Ring Thickness: 32px
- Inner Diameter: 136px
- Gap between segments: 2px

**Colors:**
- Principal Segment: `#2B7FF6` (70% of circle)
- Interest Segment: `#26E5D8` (30% of circle)
- Background: `#F5F7FA`

**Center Content:**
- Font Size: 32px (amount)
- Font Weight: 700
- Color: `#1A202C`
- "per month": 12px, gray

**Animation:**
- Segments animate on load (0.8s ease-out)
- Start from 0 degrees, fill to calculated percentage
- Stagger animation by 0.2s

---

## Screen 3: TVM Calculator Hub

### Mobile View

```
┌─────────────────────────────────────┐
│  ≡  TVM Calculators          🌙     │
├─────────────────────────────────────┤
│                                     │
│  Time Value of Money Tools          │  ← Page Title (24px)
│                                     │
│  ┌───────────┬───────────┐         │  ← Grid Layout (2 columns)
│  │ Present   │ Future    │         │     Gap: 12px
│  │ Value     │ Value     │         │
│  │           │           │         │  ← Calculator Cards
│  │  📊       │  📈       │         │     Height: 140px
│  │           │           │         │     Gradient backgrounds
│  │  PV       │  FV       │         │     Border Radius: 16px
│  └───────────┴───────────┘         │     Tap to open
│                                     │
│  ┌───────────┬───────────┐         │
│  │ Annuity   │ Annuity   │         │
│  │ PV        │ FV        │         │
│  │           │           │         │
│  │  💰       │  💵       │         │
│  │           │           │         │
│  └───────────┴───────────┘         │
│                                     │
│  ┌───────────┬───────────┐         │
│  │ Perpetuity│ NPV       │         │
│  │           │           │         │
│  │  ♾️        │  📊       │         │
│  │           │           │         │
│  └───────────┴───────────┘         │
│                                     │
│  ┌───────────┬───────────┐         │
│  │ IRR       │ Compound  │         │
│  │           │ Interest  │         │
│  │  📉       │  📈       │         │
│  │           │           │         │
│  └───────────┴───────────┘         │
│                                     │
└─────────────────────────────────────┘
```

### Calculator Card Specifications

**Card Dimensions:**
- Width: calc((100% - 12px) / 2)
- Height: 140px
- Border Radius: 16px
- Padding: 16px

**Gradient Backgrounds (varied per card):**
- PV: `linear-gradient(135deg, #667EEA 0%, #764BA2 100%)`
- FV: `linear-gradient(135deg, #F093FB 0%, #F5576C 100%)`
- Annuity PV: `linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)`
- Annuity FV: `linear-gradient(135deg, #43E97B 0%, #38F9D7 100%)`
- Perpetuity: `linear-gradient(135deg, #FA709A 0%, #FEE140 100%)`
- NPV: `linear-gradient(135deg, #30CFD0 0%, #330867 100%)`

**Icon:**
- Size: 32px
- Color: White
- Opacity: 0.9

**Text:**
- Title: 16px, semi-bold, white
- Subtitle: 12px, regular, white (opacity 0.8)

**Hover/Tap Effect:**
- Scale: 1.02
- Shadow: Increase depth
- Transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1)

---

## Screen 4: Individual TVM Calculator (Present Value Example)

### Mobile View

```
┌─────────────────────────────────────┐
│  ←  Present Value Calculator   🌙   │
├─────────────────────────────────────┤
│                                     │
│  ╔═══════════════════════════════╗ │  ← Result Card
│  ║   Present Value               ║ │
│  ║     $6,139.13                 ║ │  ← Large result
│  ║                               ║ │
│  ║   Formula                     ║ │
│  ║   PV = FV / (1 + r)^n         ║ │  ← Formula display
│  ╚═══════════════════════════════╝ │
│                                     │
│  ┌─────────────────────────────┐   │  ← Input Card
│  │                             │   │
│  │  Future Value               │   │
│  │  ┌───────────────────────┐  │   │  ← Text Input
│  │  │ $ 10,000              │  │   │     Large font
│  │  └───────────────────────┘  │   │     Blue accent
│  │                             │   │
│  │  Annual Interest Rate       │   │
│  │  ━━━━━━●─────────────────   │   │  ← Slider
│  │  5%                         │   │
│  │                             │   │
│  │  Number of Periods (Years)  │   │
│  │  ━━━━━━━━━●──────────────   │   │  ← Slider
│  │  10                         │   │
│  │                             │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │  ← Calculate Button
│  │      Calculate PV           │   │
│  └─────────────────────────────┘   │
│                                     │
│  ╔═══════════════════════════════╗ │  ← Explanation Card
│  ║  💡 What does this mean?      ║ │     Light blue background
│  ║                               ║ │
│  ║  To have $10,000 in 10 years ║ │  ← Explanation text
│  ║  at 5% annual interest, you  ║ │     Educational content
│  ║  need to invest $6,139.13    ║ │
│  ║  today.                       ║ │
│  ║                               ║ │
│  ║  [View Detailed Breakdown]    ║ │  ← Expandable
│  ╚═══════════════════════════════╝ │
│                                     │
│  Save This Calculation              │  ← Action link
│                                     │
└─────────────────────────────────────┘
```

---

## Screen 5: Formula Guide

### Mobile View

```
┌─────────────────────────────────────┐
│  ←  Formula Guide            🌙  🔍 │  ← Search icon
├─────────────────────────────────────┤
│                                     │
│  ┌─────────────────────────────┐   │  ← Search Bar
│  │  🔍 Search formulas...      │   │     Sticky on scroll
│  └─────────────────────────────┘   │
│                                     │
│  ┌─ EMI Formulas ──────────────┐   │  ← Category Toggle
│  │  ▼                          │   │     Expandable sections
│  │                             │   │
│  │  ┌───────────────────────┐  │   │  ← Formula Card
│  │  │ EMI Calculation       │  │   │
│  │  │                       │  │   │
│  │  │ EMI = [P×r×(1+r)^n]   │  │   │  ← Formula (monospace)
│  │  │       ───────────     │  │   │
│  │  │       [(1+r)^n – 1]   │  │   │
│  │  │                       │  │   │
│  │  │ Where:                │  │   │  ← Variable definitions
│  │  │ P = Principal amount  │  │   │
│  │  │ r = Monthly rate      │  │   │
│  │  │ n = Tenure (months)   │  │   │
│  │  │                       │  │   │
│  │  │ [View Example]        │  │   │  ← Expandable example
│  │  └───────────────────────┘  │   │
│  │                             │   │
│  │  ┌───────────────────────┐  │   │
│  │  │ Total Interest        │  │   │
│  │  │                       │  │   │
│  │  │ Interest = (EMI × n)  │  │   │
│  │  │            - P        │  │   │
│  │  └───────────────────────┘  │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─ TVM Formulas ──────────────┐   │
│  │  ▼                          │   │
│  │                             │   │
│  │  [Present Value]            │   │
│  │  [Future Value]             │   │
│  │  [Annuities]                │   │
│  │  [Perpetuity]               │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─ Special Rules ─────────────┐   │
│  │  ▼                          │   │
│  │                             │   │
│  │  [Rule of 72]               │   │
│  │  [Rule of 69]               │   │
│  └─────────────────────────────┘   │
│                                     │
└─────────────────────────────────────┘
```

### Formula Card Specifications

**Card:**
- Background: White
- Border: 1px solid #E5E7EB
- Border Radius: 12px
- Padding: 16px
- Margin Bottom: 12px

**Formula Display:**
- Font: 'Courier New', monospace
- Font Size: 14px
- Color: #1A202C
- Background: #F9FAFB (light gray)
- Padding: 12px
- Border Radius: 8px
- Overflow-X: Auto (for long formulas)

**Variables:**
- Font Size: 13px
- Line Height: 1.6
- Color: #4B5563

**Example Section (Collapsed by default):**
- Background: #EFF6FF (light blue)
- Padding: 12px
- Border Radius: 8px
- Border Left: 3px solid #2B7FF6

---

## Screen 6: Concept Learning Page

### Mobile View

```
┌─────────────────────────────────────┐
│  ←  Time Value of Money      🌙     │
├─────────────────────────────────────┤
│                                     │
│  ╔═══════════════════════════════╗ │  ← Hero Card
│  ║  [Illustration Image]         ║ │     Visual representation
│  ║                               ║ │
│  ║  Time Value of Money          ║ │
│  ║  A dollar today is worth more ║ │  ← Concept explanation
│  ║  than a dollar tomorrow       ║ │
│  ╚═══════════════════════════════╝ │
│                                     │
│  Why It Matters                     │  ← Section header
│  ───────────────                    │
│                                     │
│  • Inflation erodes value           │  ← Bullet points
│  • Investment opportunity           │
│  • Risk and uncertainty             │
│                                     │
│  ┌─────────────────────────────┐   │  ← Interactive Demo
│  │  Interactive Example        │   │
│  │                             │   │
│  │  Would you rather have:     │   │
│  │                             │   │
│  │  ┌───────────────────────┐  │   │  ← Option buttons
│  │  │  $100 today           │  │   │     Radio style
│  │  └───────────────────────┘  │   │
│  │                             │   │
│  │  ┌───────────────────────┐  │   │
│  │  │  $110 in 1 year       │  │   │
│  │  └───────────────────────┘  │   │
│  │                             │   │
│  │  [Show Calculation]         │   │  ← Reveal answer
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │  ← Visual Comparison
│  │  Value Over Time            │   │
│  │                             │   │
│  │  Year 0  [====] $100        │   │  ← Bar chart
│  │  Year 1  [===]  $95         │   │     Shows depreciation
│  │  Year 2  [==]   $90         │   │     With inflation
│  │  Year 3  [=]    $86         │   │
│  │                             │   │
│  │  Assuming 5% inflation      │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │  ← Next Topic
│  │  Next: Compounding Effect   →  │   │
│  └─────────────────────────────┘   │
│                                     │
└─────────────────────────────────────┘
```

---

## Screen 7: Admin Panel

### Mobile View

```
┌─────────────────────────────────────┐
│  ≡  Admin Panel              🌙  👤 │
├─────────────────────────────────────┤
│                                     │
│  ┌─ Content Management ───────┐    │  ← Accordion sections
│  │  ▼                         │    │
│  │                            │    │
│  │  Hero Section              │    │
│  │  ┌──────────────────────┐  │    │  ← Editable fields
│  │  │ Title                │  │    │
│  │  │ Smart EMI & TVM...   │  │    │
│  │  └──────────────────────┘  │    │
│  │                            │    │
│  │  ┌──────────────────────┐  │    │
│  │  │ Subtitle             │  │    │
│  │  │ Calculate your...    │  │    │
│  │  └──────────────────────┘  │    │
│  │                            │    │
│  │  [Save Changes]            │    │
│  └────────────────────────────┘    │
│                                     │
│  ┌─ Formula Management ───────┐    │
│  │  ▶                         │    │  ← Collapsed
│  └────────────────────────────┘    │
│                                     │
│  ┌─ User Management ──────────┐    │
│  │  ▶                         │    │
│  └────────────────────────────┘    │
│                                     │
│  ┌─ Analytics ────────────────┐    │
│  │  ▶                         │    │
│  └────────────────────────────┘    │
│                                     │
└─────────────────────────────────────┘
```

---

## Screen 8: Theme Toggle States

### Light vs Dark Theme Comparison

```
┌──── LIGHT THEME ────┬──── DARK THEME ─────┐
│                     │                     │
│ Background:         │ Background:         │
│ #E8F3FF → #FFFFFF   │ #0F1B2E → #1A2942   │
│                     │                     │
│ ╔═════════════════╗ │ ╔═════════════════╗ │
│ ║   EMI: $250     ║ │ ║   EMI: $250     ║ │
│ ║  (Blue gradient)║ │ ║ (Dark gradient) ║ │
│ ╚═════════════════╝ │ ╚═════════════════╝ │
│                     │                     │
│ ┌─────────────────┐ │ ┌─────────────────┐ │
│ │ (White card)    │ │ │ (Dark card)     │ │
│ │ Text: #1A202C   │ │ │ Text: #F9FAFB   │ │
│ └─────────────────┘ │ └─────────────────┘ │
│                     │                     │
└─────────────────────┴─────────────────────┘
```

**Dark Theme Color Adjustments:**
- Background: `linear-gradient(180deg, #0F1B2E 0%, #1A2942 100%)`
- Card Background: `#1E293B`
- Text Primary: `#F9FAFB`
- Text Secondary: `#94A3B8`
- Border Color: `rgba(255, 255, 255, 0.1)`
- Result Card: `linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)`

---

## Component Library

### 1. Button Variants

```
┌─ Primary Button ────────┐
│      Apply Now          │  ← Blue, glowing
└─────────────────────────┘

┌─ Secondary Button ──────┐
│      Learn More         │  ← Outlined
└─────────────────────────┘

┌─ Text Button ───────────┐
│  View Breakdown →       │  ← Text only, arrow
└─────────────────────────┘

┌─ Icon Button ───────────┐
│       📥                │  ← Icon, circular
└─────────────────────────┘
```

### 2. Input Variants

**Slider:**
```
Label Text             Value Display
━━━━━━●──────────────  ← Track + Thumb
```

**Text Input:**
```
┌──────────────────────────┐
│ Label                    │
│ ┌────────────────────┐   │
│ │ $ 25,000           │   │  ← Large input
│ └────────────────────┘   │
└──────────────────────────┘
```

**Dropdown/Select:**
```
┌──────────────────────────┐
│ Payment Frequency    ▼   │
└──────────────────────────┘
```

### 3. Card Variants

**Gradient Result Card:**
- Blue gradient background
- White text
- Large typography
- Shadow with glow

**White Input Card:**
- White background
- Light border
- Subtle shadow
- Clean spacing

**Info Card:**
- Light blue background
- Icon on left
- Educational content
- Expandable

---

## Responsive Breakpoints

**Mobile Small (320px - 374px):**
- Single column layout
- Reduced font sizes
- Compact spacing (12px base)
- Smaller slider thumbs (14px)

** Mobile Medium (375px - 767px):**
- Single column layout
- Standard font sizes
- Standard spacing (16px base)
- Standard components

**Tablet (768px - 1023px):**
- Two-column layout where applicable
- Larger cards
- Side-by-side EMI result and inputs
- Expanded navigation

**Desktop (1024px+):**
- Three-column grid for TVM calculators
- Side navigation
- Larger charts and visualizations
- Expanded amortization table

---

## Micro-Animations

**On Page Load:**
1. Fade in background gradient (0.3s)
2. Slide up cards with stagger (0.4s, 0.1s delay each)
3. Animate EMI number counting up (0.8s)
4. Draw ring chart segments (0.8s, easing)

**On Interaction:**
- Slider thumb: Scale 1.0 → 1.1 on drag
- Button hover: Glow increase (0.3s)
- Button press: Scale 0.98 (0.1s)
- Card tap: Brief shadow increase (0.2s)
- Input focus: Border color transition (0.2s)

**On Calculation:**
1. Disable button, show loading spinner (0.1s)
2. Fade out old result (0.2s)
3. Calculate new values
4. Fade in new result with count-up animation (0.6s)
5. Re-draw chart with new values (0.8s)

**Chart Animations:**
- Ring segments: Draw from 0° clockwise (0.8s ease-out)
- Bar charts: Grow from bottom (0.6s ease-out)
- Line charts: Draw path (1.0s ease-in-out)

---

## Accessibility Considerations

**Color Contrast:**
- All text meets WCAG AA standards
- Blue buttons: Contrast ratio > 4.5:1
- Dark mode: Contrast ratio > 4.5:1

**Touch Targets:**
- Minimum size: 44x44px44x44px
- Adequate spacing between interactive elements
- Large slider thumbs for easy manipulation

**Screen Readers:**
- Semantic HTML structure
- ARIA labels on sliders
- Role attributes on custom components
- Alt text for icons and charts

**Keyboard Navigation:**
- Tab order follows visual flow
- Focus indicators on all interactive elements
- Enter/Space to activate buttons
- Arrow keys to adjust sliders

---

## Print Layout (PDF Export)

When generating PDF amortization schedules:

**Page Layout:**
- Size: A4 (210mm x 297mm)
- Margins: 20mm all sides
- Orientation: Portrait

**Header:**
- Logo (left)
- "Amortization Schedule" title (center)
- Date generated (right)

**Summary Section:**
- Loan details in bordered box
- EMI, Principal, Interest, Total
- Ring chart (optional)

**Table:**
- Full-width responsive table
- Alternating row colors
- Bold headers
- Page breaks avoid splitting rows

**Footer:**
- Page numbers (center)
- "Generated by Smart EMI Calculator" (center)
- Disclaimer text (8pt, gray)


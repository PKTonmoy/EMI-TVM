# Smart EMI & TVM Calculator - Component Specification

This document provides detailed specifications for all reusable components in the application.

---

## Component Architecture Overview

```
Component Hierarchy:
────────────────────────────────────────
App
├── ThemeProvider
├── Layout
│   ├── Header
│   │   ├── Logo
│   │   ├── Navigation
│   │   └── ThemeToggle
│   ├── Main (Router Outlet)
│   └── Footer
└── Global Modals
    ├── LoginModal
    └── ConfirmationModal
```

---

## 1. Button Component

### Variants

#### Primary Button
```typescript
interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  glow?: boolean;
}
```

**Visual Specifications:**
- **Size Small**: Height 40px, Padding 0 16px, Font 14px
- **Size Medium**: Height 48px, Padding 0 20px, Font 16px
- **Size Large**: Height 56px, Padding 0 24px, Font 16px
- **Background**: `#2B7FF6`
- **Color**: `#FFFFFF`
- **Border Radius**: 12px (small), 14px (medium), 16px (large)
- **Font Weight**: 600
- **Letter Spacing**: 0.5px
- **Box Shadow**: `0 4px 16px rgba(43, 127, 246, 0.4)`
- **Glow Effect** (when glow=true): `0 0 20px rgba(43, 127, 246, 0.5)`

**States:**
- **Hover**: Scale 1.02, Shadow increased
- **Active**: Scale 0.98
- **Disabled**: Opacity 0.5, Cursor not-allowed
- **Loading**: Show spinner, Disable interaction

**Usage Example:**
```tsx
<Button 
  onClick={handleApply}
  glow
  size="large"
  fullWidth
>
  Apply Now
</Button>
```

#### Secondary Button
```typescript
interface SecondaryButtonProps extends Omit<PrimaryButtonProps, 'glow'> {
  variant?: 'outlined' | 'text';
}
```

**Outlined Variant:**
- Background: Transparent
- Border: 2px solid `#2B7FF6`
- Color: `#2B7FF6`
- Hover: Background `rgba(43, 127, 246, 0.05)`

**Text Variant:**
- Background: Transparent
- Border: None
- Color: `#2B7FF6`
- Hover: Background `rgba(43, 127, 246, 0.05)`

---

## 2. Slider Component

### Interface

```typescript
interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
  prefix?: string;
  onChange: (value: number) => void;
  formatter?: (value: number) => string;
  disabled?: boolean;
  showInput?: boolean;
  marks?: { value: number; label: string }[];
}
```

### Visual Specifications

**Container:**
- Padding: 16px 0
- Min Height: 72px

**Label:**
- Font Size: 14px
- Font Weight: 500
- Color: `#4B5563` (light mode), `#9CA3AF` (dark mode)
- Margin Bottom: 8px
- Display: Flex, Space Between

**Value Display:**
- Font Size: 16px
- Font Weight: 600
- Color: `#2B7FF6`
- Aligned right

**Track:**
- Height: 4px
- Background: `#E5E7EB` (light mode), `#374151` (dark mode)
- Border Radius: 2px
- Position: Relative

**Active Track:**
- Height: 4px
- Background: `linear-gradient(90deg, #2B7FF6 0%, #4A9FFF 100%)`
- Border Radius: 2px
- Position: Absolute
- Width: Calculated based on value percentage

**Thumb:**
- Width: 16px
- Height: 16px
- Background: `#FFFFFF`
- Border: 2px solid `#2B7FF6`
- Border Radius: 50%
- Box Shadow: `0 2px 4px rgba(0, 0, 0, 0.2)`
- Cursor: Grab
- Transition: transform 0.2s

**Thumb States:**
- **Hover**: Scale 1.125 (18px), Shadow increased
- **Active**: Scale 1.25 (20px), Cursor grabbing
- **Focus**: Add focus ring `0 0 0 4px rgba(43, 127, 246, 0.2)`
- **Disabled**: Opacity 0.5, Cursor not-allowed

**Optional Input Field:**
- Width: 80px
- Aligned right
- Allows direct numeric input
- Syncs with slider value

**Usage Example:**
```tsx
<Slider
  label="Loan Amount"
  value={loanAmount}
  min={1000}
  max={10000000}
  step={1000}
  prefix="$"
  formatter={(val) => val.toLocaleString()}
  onChange={setLoanAmount}
  showInput
/>
```

---

## 3. Card Component

### Interface

```typescript
interface CardProps {
  children: React.ReactNode;
  variant?: 'white' | 'gradient' | 'outlined' | 'glass';
  padding?: 'none' | 'small' | 'medium' | 'large';
  rounded?: 'small' | 'medium' | 'large' | 'xlarge';
  shadow?: 'none' | 'small' | 'medium' | 'large';
  hoverable?: boolean;
  onClick?: () => void;
  className?: string;
}
```

### Variant Specifications

#### White Card
- Background: `#FFFFFF` (light), `#1E293B` (dark)
- Border: `1px solid rgba(0, 0, 0, 0.05)` (light), `1px solid rgba(255, 255, 255, 0.1)` (dark)
- Box Shadow: `0 2px 8px rgba(0, 0, 0, 0.04)`

#### Gradient Card
- Background: `linear-gradient(135deg, #2B7FF6 0%, #4A9FFF 100%)`
- Border: None
- Box Shadow: `0 8px 32px rgba(43, 127, 246, 0.15)`
- Color: `#FFFFFF` (text)

#### Outlined Card
- Background: Transparent
- Border: `2px solid #E5E7EB` (light), `2px solid #374151` (dark)
- Box Shadow: None

#### Glass Card (Glassmorphism)
- Background: `rgba(255, 255, 255, 0.7)` (light), `rgba(30, 41, 59, 0.7)` (dark)
- Backdrop Filter: `blur(10px)`
- Border: `1px solid rgba(255, 255, 255, 0.3)`
- Box Shadow: `0 8px 32px rgba(0, 0, 0, 0.1)`

### Padding Specifications
- **None**: 0
- **Small**: 12px
- **Medium**: 20px
- **Large**: 24px

### Border Radius Specifications
- **Small**: 8px
- **Medium**: 12px
- **Large**: 16px
- **XLarge**: 24px

### Shadow Specifications
- **None**: none
- **Small**: `0 2px 4px rgba(0, 0, 0, 0.05)`
- **Medium**: `0 4px 8px rgba(0, 0, 0, 0.08)`
- **Large**: `0 8px 16px rgba(0, 0, 0, 0.12)`

**Hoverable State:**
- Transform: `translateY(-2px)`
- Shadow: Increased by one level
- Cursor: Pointer
- Transition: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`

**Usage Example:**
```tsx
<Card 
  variant="gradient" 
  padding="large" 
  rounded="xlarge"
  shadow="large"
>
  <h2>Your EMI is</h2>
  <h1>$250</h1>
  <p>per month</p>
</Card>
```

---

## 4. Input Component

### Interface

```typescript
interface InputProps {
  label?: string;
  type?: 'text' | 'number' | 'email' | 'password';
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  prefix?: string | React.ReactNode;
  suffix?: string | React.ReactNode;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
}
```

### Visual Specifications

**Container:**
- Display: Flex, Column
- Gap: 8px
- Width: 100% (if fullWidth)

**Label:**
- Font Size: 14px
- Font Weight: 500
- Color: `#374151` (light), `#D1D5DB` (dark)
- Margin Bottom: 4px

**Input Field:**
- **Size Small**: Height 40px, Padding 0 12px, Font 14px
- **Size Medium**: Height 48px, Padding 0 16px, Font 16px
- **Size Large**: Height 56px, Padding 0 20px, Font 18px
- Background: `#FFFFFF` (light), `#1E293B` (dark)
- Border: `1px solid #D1D5DB` (light), `1px solid #374151` (dark)
- Border Radius: 12px
- Color: `#1F2937` (light), `#F9FAFB` (dark)
- Transition: border-color 0.2s, box-shadow 0.2s

**States:**
- **Focus**: Border `2px solid #2B7FF6`, Box Shadow `0 0 0 4px rgba(43, 127, 246, 0.1)`
- **Error**: Border `2px solid #EF4444`, Box Shadow `0 0 0 4px rgba(239, 68, 68, 0.1)`
- **Disabled**: Opacity 0.5, Background `#F3F4F6`, Cursor not-allowed

**Prefix/Suffix:**
- Position: Absolute
- Padding: 0 12px
- Color: `#6B7280`
- Font Size: Matches input
- Pointer Events: None

**Error Message:**
- Font Size: 12px
- Color: `#EF4444`
- Margin Top: 4px
- Display: Flex with error icon

**Helper Text:**
- Font Size: 12px
- Color: `#6B7280`
- Margin Top: 4px

**Usage Example:**
```tsx
<Input
  label="Future Value"
  type="number"
  value={futureValue}
  onChange={setFutureValue}
  prefix="$"
  placeholder="Enter amount"
  helperText="The amount you want to have in the future"
  size="large"
/>
```

---

## 5. RingChart Component

### Interface

```typescript
interface RingChartData {
  name: string;
  value: number;
  color: string;
  percentage?: number;
}

interface RingChartProps {
  data: RingChartData[];
  size?: number;
  thickness?: number;
  centerContent?: React.ReactNode;
  showLegend?: boolean;
  animated?: boolean;
  animationDuration?: number;
}
```

### Visual Specifications

**SVG Container:**
- Width: size (default 200px)
- Height: size (default 200px)
- ViewBox: `0 0 ${size} ${size}`

**Ring Specifications:**
- Outer Radius: size / 2
- Inner Radius: (size / 2) - thickness (default thickness 32px)
- Stroke Width: thickness
- Stroke Linecap: Round
- Fill: None

**Segment Colors:**
- Principal: `#2B7FF6`
- Interest: `#26E5D8`
- Additional segments: Use palette

**Gap Between Segments:**
- Gap: 2 degrees
- Implemented via path calculations

**Center Content:**
- Position: Absolute, Center
- Display: Flex, Column, Align Center
- Font Size: 32px (amount)
- Font Weight: 700
- Color: `#1A202C` (light), `#F9FAFB` (dark)

**Legend:**
- Position: Below chart
- Display: Flex, Column
- Gap: 8px

**Legend Item:**
- Display: Flex, Align Center
- Gap: 8px
- Font Size: 14px

**Legend Color Indicator:**
- Width: 12px
- Height: 12px
- Border Radius: 50%
- Background: Segment color

**Animation:**
- Stroke Dasharray: Circumference
- Stroke Dashoffset: Animated from circumference to 0
- Duration: 800ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Stagger delay: 200ms between segments

**Usage Example:**
```tsx
<RingChart
  data={[
    { name: 'Principal Amount', value: 25000, color: '#2B7FF6' },
    { name: 'Interest Payable', value: 5000, color: '#26E5D8' }
  ]}
  size={200}
  thickness={32}
  centerContent={
    <>
      <div className="emi-amount">$250</div>
      <div className="emi-label">per month</div>
    </>
  }
  showLegend
  animated
/>
```

---

## 6. Navigation Component

### Interface

```typescript
interface NavigationItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
  badge?: number | string;
  children?: NavigationItem[];
}

interface NavigationProps {
  items: NavigationItem[];
  activeItem?: string;
  variant?: 'horizontal' | 'vertical' | 'bottom';
  onNavigate?: (path: string) => void;
}
```

### Visual Specifications

#### Horizontal Navigation (Desktop)
- Display: Flex, Row
- Gap: 24px
- Padding: 16px 0
- Border Bottom: 1px solid `#E5E7EB`

**Nav Item:**
- Padding: 8px 16px
- Font Size: 15px
- Font Weight: 500
- Color: `#6B7280`
- Border Radius: 8px
- Transition: all 0.2s
- Hover: Background `rgba(43, 127, 246, 0.05)`, Color `#2B7FF6`
- Active: Color `#2B7FF6`, Border Bottom `2px solid #2B7FF6`

#### Bottom Navigation (Mobile)
- Position: Fixed, Bottom 0
- Display: Flex, Row
- Justify Content: Space Around
- Background: `#FFFFFF` (light), `#1E293B` (dark)
- Border Top: 1px solid `#E5E7EB`
- Height: 64px
- Box Shadow: `0 -2px 8px rgba(0, 0, 0, 0.05)`
- z-index: 100

**Bottom Nav Item:**
- Display: Flex, Column, Align Center
- Padding: 8px
- Gap: 4px
- Font Size: 12px
- Color: `#6B7280`
- Active: Color `#2B7FF6`

**Icon:**
- Size: 24px
- Margin Bottom: 4px

**Badge:**
- Position: Absolute, Top Right
- Background: `#EF4444`
- Color: `#FFFFFF`
- Font Size: 10px
- Font Weight: 600
- Padding: 2px 6px
- Border Radius: 10px
- Min Width: 18px

**Usage Example:**
```tsx
<Navigation
  variant="bottom"
  items={[
    { label: 'Home', path: '/', icon: <HomeIcon /> },
    { label: 'TVM', path: '/tvm', icon: <ChartIcon /> },
    { label: 'Formulas', path: '/formulas', icon: <BookIcon /> },
    { label: 'More', path: '/more', icon: <MenuIcon />, badge: 3 }
  ]}
  activeItem="/"
/>
```

---

## 7. Modal Component

### Interface

```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'small' | 'medium' | 'large' | 'fullscreen';
  closeOnOverlayClick?: boolean;
  showCloseButton?: boolean;
}
```

### Visual Specifications

**Overlay:**
- Position: Fixed, Full Screen
- Background: `rgba(0, 0, 0, 0.5)`
- Backdrop Filter: `blur(4px)`
- z-index: 1000
- Animation: Fade in 0.2s

**Modal Container:**
- Position: Fixed, Centered
- Background: `#FFFFFF` (light), `#1E293B` (dark)
- Border Radius: 16px
- Box Shadow: `0 20px 60px rgba(0, 0, 0, 0.3)`
- Max Height: 90vh
- Overflow: Auto
- Animation: Scale from 0.95 + fade in, 0.3s

**Size Specifications:**
- **Small**: Width 400px
- **Medium**: Width 600px
- **Large**: Width 800px
- **Fullscreen**: Width 100vw, Height 100vh, Border Radius 0

**Header:**
- Display: Flex, Space Between, Align Center
- Padding: 20px 24px
- Border Bottom: 1px solid `#E5E7EB`

**Title:**
- Font Size: 20px
- Font Weight: 600
- Color: `#1F2937` (light), `#F9FAFB` (dark)

**Close Button:**
- Position: Absolute, Top Right
- Padding: 12px
- Background: Transparent
- Border: None
- Cursor: Pointer
- Color: `#6B7280`
- Hover: Background `rgba(0, 0, 0, 0.05)`
- Border Radius: 8px

**Body:**
- Padding: 24px
- Overflow: Auto
- Max Height: calc(90vh - 140px)

**Footer:**
- Display: Flex, Justify End, Gap 12px
- Padding: 16px 24px
- Border Top: 1px solid `#E5E7EB`

**Usage Example:**
```tsx
<Modal
  isOpen={isLoginOpen}
  onClose={() => setIsLoginOpen(false)}
  title="Sign In"
  size="small"
  closeOnOverlayClick
  showCloseButton
  footer={
    <>
      <Button variant="text" onClick={() => setIsLoginOpen(false)}>
        Cancel
      </Button>
      <Button onClick={handleLogin}>
        Sign In
      </Button>
    </>
  }
>
  <LoginForm />
</Modal>
```

---

## 8. Toggle Component (Theme Switcher)

### Interface

```typescript
interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  icons?: {
    checked: React.ReactNode;
    unchecked: React.ReactNode;
  };
  label?: string;
}
```

### Visual Specifications

**Container:**
- Display: Inline Flex, Align Center
- Gap: 8px
- Cursor: Pointer

**Track:**
- **Size Small**: Width 36px, Height 20px
- **Size Medium**: Width 44px, Height 24px
- **Size Large**: Width 52px, Height 28px
- Background: `#D1D5DB` (unchecked), `#2B7FF6` (checked)
- Border Radius: Full (pill shape)
- Transition: background-color 0.3s
- Position: Relative

**Thumb:**
- **Size Small**: 16px diameter
- **Size Medium**: 20px diameter
- **Size Large**: 24px diameter
- Background: `#FFFFFF`
- Border Radius: 50%
- Box Shadow: `0 2px 4px rgba(0, 0, 0, 0.2)`
- Position: Absolute
- Top: 2px
- Left: 2px (unchecked), calc(100% - size - 2px) (checked)
- Transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1)

**Icons (Optional):**
- Position: Absolute, Centered in thumb
- Size: 12px-16px depending on toggle size
- Color: Matches background

**States:**
- **Hover**: Track shadow `0 0 0 4px rgba(43, 127, 246, 0.1)`
- **Focus**: Track shadow `0 0 0 4px rgba(43, 127, 246, 0.2)`
- **Disabled**: Opacity 0.5, Cursor not-allowed

**Usage Example:**
```tsx
<Toggle
  checked={isDarkMode}
  onChange={setIsDarkMode}
  size="medium"
  icons={{
    checked: <MoonIcon />,
    unchecked: <SunIcon />
  }}
  label="Dark Mode"
/>
```

---

## 9. Table Component (Amortization Table)

### Interface

```typescript
interface TableColumn {
  key: string;
  header: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  formatter?: (value: any) => string;
  sortable?: boolean;
}

interface TableProps {
  columns: TableColumn[];
  data: any[];
  stickyHeader?: boolean;
  striped?: boolean;
  hoverable?: boolean;
  bordered?: boolean;
  compact?: boolean;
  loading?: boolean;
  emptyMessage?: string;
}
```

### Visual Specifications

**Table Container:**
- Width: 100%
- Overflow: Auto (horizontal scroll on mobile)
- Border: 1px solid `#E5E7EB` (if bordered)
- Border Radius: 12px

**Table:**
- Width: 100%
- Border Collapse: Collapse
- Font Size: 14px

**Header Row:**
- Background: `#F9FAFB` (light), `#1E293B` (dark)
- Font Weight: 600
- Text Transform: Uppercase
- Letter Spacing: 0.5px
- Font Size: 12px
- Color: `#6B7280`
- Position: Sticky, Top 0 (if stickyHeader)
- z-index: 10

**Header Cell:**
- Padding: 12px 16px (compact: 8px 12px)
- Text Align: Varies by column
- Border Bottom: 2px solid `#E5E7EB`

**Body Row:**
- Border Bottom: 1px solid `#E5E7EB`
- Background: Alternating `#FFFFFF` and `#F9FAFB` (if striped)
- Hover: Background `rgba(43, 127, 246, 0.05)` (if hoverable)
- Transition: background-color 0.2s

**Body Cell:**
- Padding: 16px (compact: 12px)
- Color: `#1F2937` (light), `#F9FAFB` (dark)
- Vertical Align: Middle

**Numeric Cells:**
- Font Family: 'DM Sans', monospace
- Font Variant Numeric: Tabular

**Loading State:**
- Show skeleton rows with pulsing animation
- Overlay with semi-transparent background

**Empty State:**
- Centered message
- Padding: 48px
- Color: `#9CA3AF`
- Font Size: 16px

**Usage Example:**
```tsx
<Table
  columns={[
    { key: 'month', header: 'Month', width: '15%', align: 'center' },
    { key: 'payment', header: 'Payment', width: '20%', align: 'right', 
      formatter: (val) => `$${val.toFixed(2)}` },
    { key: 'principal', header: 'Principal', width: '20%', align: 'right',
      formatter: (val) => `$${val.toFixed(2)}` },
    { key: 'interest', header: 'Interest', width: '20%', align: 'right',
      formatter: (val) => `$${val.toFixed(2)}` },
    { key: 'balance', header: 'Balance', width: '25%', align: 'right',
      formatter: (val) => `$${val.toLocaleString()}` }
  ]}
  data={amortizationSchedule}
  stickyHeader
  striped
  hoverable
  bordered
/>
```

---

## 10. Toast/Notification Component

### Interface

```typescript
interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  position?: 'top-left' | 'top-center' | 'top-right' | 
            'bottom-left' | 'bottom-center' | 'bottom-right';
  action?: {
    label: string;
    onClick: () => void;
  };
  onClose?: () => void;
}
```

### Visual Specifications

**Container:**
- Position: Fixed
- z-index: 9999
- Padding: 16px 20px
- Background: Varies by type
- Border Radius: 12px
- Box Shadow: `0 4px 12px rgba(0, 0, 0, 0.15)`
- Min Width: 300px
- Max Width: 500px
- Display: Flex, Align Center, Space Between
- Gap: 12px
- Animation: Slide in from position, 0.3s

**Type Colors:**
- **Success**: Background `#10B981`, Color `#FFFFFF`, Icon ✓
- **Error**: Background `#EF4444`, Color `#FFFFFF`, Icon ✕
- **Warning**: Background `#F59E0B`, Color `#FFFFFF`, Icon ⚠
- **Info**: Background `#3B82F6`, Color `#FFFFFF`, Icon ℹ

**Icon:**
- Size: 20px
- Margin Right: 8px

**Message:**
- Font Size: 14px
- Font Weight: 500
- Flex: 1

**Action Button:**
- Background: Transparent
- Border: 1px solid currentColor
- Padding: 6px 12px
- Border Radius: 6px
- Font Size: 13px
- Font Weight: 600
- Cursor: Pointer
- Hover: Background `rgba(255, 255, 255, 0.2)`

**Close Button:**
- Background: Transparent
- Border: None
- Padding: 4px
- Cursor: Pointer
- Opacity: 0.8
- Hover: Opacity 1

**Auto-dismiss:**
- Default duration: 3000ms (success), 5000ms (error/warning), 4000ms (info)
- Progress bar at bottom (optional)
- Pause on hover

**Usage Example:**
```tsx
<Toast
  message="Calculation saved successfully!"
  type="success"
  duration={3000}
  position="top-right"
  action={{
    label: 'View',
    onClick: () => navigate('/my-calculations')
  }}
  onClose={() => setToastVisible(false)}
/>
```

---

## Component Usage Patterns

### 1. Form Layout Pattern

```tsx
<Card variant="white" padding="large">
  <form onSubmit={handleSubmit}>
    <Input
      label="Email"
      type="email"
      value={email}
      onChange={setEmail}
      required
    />
    
    <Input
      label="Password"
      type="password"
      value={password}
      onChange={setPassword}
      required
    />
    
    <Button type="submit" fullWidth>
      Sign In
    </Button>
  </form>
</Card>
```

### 2. Calculator Display Pattern

```tsx
<Card variant="gradient" rounded="xlarge" shadow="large">
  <div className="emi-display">
    <h3>Your EMI is</h3>
    <h1>${monthlyEMI}</h1>
    <p>per month</p>
  </div>
  
  <div className="breakdown">
    <div className="breakdown-item">
      <span>Principal Amount</span>
      <strong>${principal}</strong>
    </div>
    <div className="breakdown-item">
      <span>Interest Payable</span>
      <strong>${interest}</strong>
    </div>
  </div>
  
  <RingChart
    data={chartData}
    centerContent={<div>${monthlyEMI}</div>}
  />
</Card>

<Card variant="white" padding="large">
  <Slider
    label="Loan Amount"
    value={loanAmount}
    min={1000}
    max={10000000}
    step={1000}
    prefix="$"
    onChange={setLoanAmount}
  />
  
  <Slider
    label="Interest Rate"
    value={interestRate}
    min={0.1}
    max={30}
    step={0.1}
    suffix="%"
    onChange={setInterestRate}
  />
  
  <Slider
    label="Loan Tenure (Months)"
    value={tenureMonths}
    min={1}
    max={360}
    step={1}
    onChange={setTenureMonths}
  />
</Card>

<Button onClick={handleApply} glow fullWidth size="large">
  Apply Now
</Button>
```

### 3. Grid Layout Pattern (TVM Hub)

```tsx
<div className="tvm-grid">
  {tvmCalculators.map((calc) => (
    <Card
      key={calc.id}
      variant="gradient"
      padding="medium"
      hoverable
      onClick={() => navigate(calc.path)}
    >
      <div className="calc-icon">{calc.icon}</div>
      <h3>{calc.title}</h3>
      <p>{calc.description}</p>
    </Card>
  ))}
</div>
```

---

## Responsive Component Behavior

### Breakpoint Strategy

```css
/* Mobile Small: 320px - 374px */
@media (max-width: 374px) {
  --slider-thumb-size: 14px;
  --card-padding: 16px;
  --font-size-h1: 32px;
}

/* Mobile Medium: 375px - 767px */
@media (min-width: 375px) and (max-width: 767px) {
  --slider-thumb-size: 16px;
  --card-padding: 20px;
  --font-size-h1: 48px;
}

/* Tablet: 768px - 1023px */
@media (min-width: 768px) {
  --container-max-width: 720px;
  --grid-columns: 2;
}

/* Desktop: 1024px+ */
@media (min-width: 1024px) {
  --container-max-width: 1200px;
  --grid-columns: 3;
  --navigation-variant: horizontal;
}
```

---

## Accessibility Compliance

### ARIA Attributes

```tsx
// Slider
<div
  role="slider"
  aria-label={label}
  aria-valuemin={min}
  aria-valuemax={max}
  aria-valuenow={value}
  aria-valuetext={`${prefix}${formatter(value)}${suffix}`}
  tabIndex={0}
/>

// Modal
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
/>

// Button
<button
  aria-label={ariaLabel}
  aria-pressed={isActive}
  aria-disabled={disabled}
/>
```

### Keyboard Navigation

All interactive components support:
- Tab/Shift+Tab for focus
- Enter/Space for activation
- Arrow keys for value adjustment (sliders)
- Escape for closing modals/dropdowns

### Focus Management

- Visible focus indicators on all interactive elements
- Focus trap in modals
- Restore focus after modal close
- Skip links for navigation

---

## Performance Optimizations

### Component Memoization

```tsx
const Slider = React.memo(({ value, onChange, ...props }) => {
  // Only re-render if value or critical props change
}, (prevProps, nextProps) => {
  return prevProps.value === nextProps.value &&
         prevProps.min === nextProps.min &&
         prevProps.max === nextProps.max;
});
```

### Lazy Loading

```tsx
const RingChart = React.lazy(() => import('./RingChart'));
const Table = React.lazy(() => import('./Table'));

// Use with Suspense
<Suspense fallback={<ChartSkeleton />}>
  <RingChart data={data} />
</Suspense>
```

### Debounced Inputs

```tsx
const useDebouncedValue = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => clearTimeout(handler);
  }, [value, delay]);
  
  return debouncedValue;
};

// Usage in slider
const debouncedLoanAmount = useDebouncedValue(loanAmount, 300);
// Call WASM calculator only when debounced value changes
```


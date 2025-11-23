# Smart EMI & TVM Calculator

A modern, responsive web application for calculating EMI (Equated Monthly Installment) and Time Value of Money with beautiful UI/UX.

![EMI Calculator Demo](file:///home/tonmoy/.gemini/antigravity/brain/b622d599-ec1c-4fa5-9267-960d47af4849/emi_calculator_demo_1763892406068.webp)

## 🚀 Features

✅ **Real-time EMI Calculation**
- Interactive sliders for Loan Amount, Interest Rate, and Tenure
- Instant calculation updates
- Beautiful gradient result card

✅ **Visual Data Representation**
- Ring chart showing Principal vs Interest breakdown
- Percentage and amount displays
- Smooth animations

✅ **Modern Design System**
- Soft blue & white gradient backgrounds
- Rounded card containers
- Glowing button effects
- Micro-animations

✅ **Responsive Design**
- Mobile-first approach (320px minimum width)
- Tablet and desktop optimized layouts
- Touch-friendly sliders

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 7
- **State Management**: React Hooks
- **Charts**: Recharts
- **Styling**: Vanilla CSS with CSS Modules
- **Animations**: CSS animations + Framer Motion
- **Utilities**: clsx, date-fns

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
app/
├── src/
│   ├── components/
│   │   ├── common/           # Reusable UI components
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   └── Slider/
│   │   ├── charts/           # Chart components
│   │   │   └── RingChart/
│   │   ├── layout/           # Layout components
│   │   └── features/         # Feature-specific components
│   ├── pages/                # Page components
│   │   └── Home.tsx
│   ├── utils/                # Utility functions
│   │   └── calculations.ts   # EMI calculation logic
│   ├── styles/               # Global styles
│   │   ├── variables.css     # CSS custom properties
│   │   └── global.css        # Global styles
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
└── package.json
```

## 🎨 Component Library

### Button
- **Variants**: Primary, Secondary, Text
- **Sizes**: Small, Medium, Large
- **Features**: Loading state, glow effect, full-width option

### Card
- **Variants**: White, Gradient, Outlined, Glass
- **Customization**: Padding, border radius, shadow levels
- **Features**: Hoverable, clickable

### Slider
- **Features**: Touch and mouse support, real-time updates
- **Customization**: Min/max values, step, prefix/suffix
- **Optional**: Direct input field

### RingChart
- **Features**: Animated pie chart, center content, legend
- **Powered by**: Recharts library

## 📐 EMI Calculation Formula

```
EMI = [P × r × (1+r)^n] / [(1+r)^n – 1]

Where:
- P = Principal loan amount
- r = Monthly interest rate (annual rate / 12 / 100)
- n = Tenure in months
```

## 🎯 Usage Example

```typescript
import { calculateEMI } from './utils/calculations';

const result = calculateEMI(25000, 9, 14);
console.log(result.monthlyEMI); // 1896.59
console.log(result.totalInterest); // 1552.26
console.log(result.totalPayment); // 26552.26
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment Variables

Create a `.env` file for environment-specific configuration:

```env
VITE_API_URL=http://localhost:3000
```

## 📱 Responsive Breakpoints

- Mobile Small: 320px - 374px
- Mobile Medium: 375px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## 🎨 Design Tokens

### Colors
- Primary Blue: `#2B7FF6`
- Light Blue: `#4A9FFF`
- Cyan Accent: `#26E5D8`

### Spacing
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px

### Typography
- Primary Font: Inter
- Numeric Font: DM Sans

## 🚀 Deployment

### Vercel
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

## 📝 License

TBD

## 🤝 Contributing

Contributions welcome! Please read the contributing guidelines first.

## 📧 Contact

For questions or support, please contact the development team.

---

**Built with ❤️ using React + Vite**

# Helio Ring Ecommerce Site - Frontend Plan

## Project Overview
Health tracker ring ecommerce site with two main pages:
1. **Landing Page** - Hero showcase with product introduction
2. **Models Page** - Product variants (Helio, Helio Pro, Helio Kids)

**Tech Stack**: Next.js 15, Shadcn/UI, Tailwind CSS, Framer Motion (scroll animations)

---

## Site Architecture

### Page Structure
```
/                    - Landing page with hero showcase
/models             - Product models and variants page
/models/[variant]   - Individual product detail pages (future)
```

### Core Features
- Responsive design (mobile-first)
- Scroll-triggered animations
- Interactive product showcase
- Modern UI with glassmorphism effects
- Performance optimized

---

## Landing Page Components

### 1. Hero Section
**Component**: `HeroSection`
- **Purpose**: Primary product showcase with ring visualization
- **Features**:
  - 3D-style ring display (CSS transforms/animations)
  - Animated health metrics overlay
  - Scroll-triggered reveal animations
  - CTA buttons (Learn More, Shop Now)
- **Shadcn Components**: Button, Badge
- **Animations**: Fade-in, slide-up, rotating ring effect

### 2. Features Showcase
**Component**: `FeaturesGrid`
- **Purpose**: Highlight key health tracking capabilities
- **Features**:
  - Grid layout with feature cards
  - Icons for each health metric (heart rate, blood pressure, oxygen)
  - Staggered animation on scroll
- **Shadcn Components**: Card, Badge
- **Animations**: Staggered fade-in, hover effects

### 3. Health Metrics Demo
**Component**: `HealthMetricsDemo`
- **Purpose**: Interactive demo of app interface
- **Features**:
  - Mock mobile app interface
  - Animated charts/graphs
  - Real-time data simulation
- **Shadcn Components**: Card, Progress, Badge
- **Animations**: Number counting, chart animations

### 4. Product Benefits
**Component**: `BenefitsSection`
- **Purpose**: Lifestyle and health benefits
- **Features**:
  - Split layout with images and text
  - Parallax scrolling effects
- **Shadcn Components**: Card
- **Animations**: Parallax, fade-in on scroll

### 5. CTA Section
**Component**: `CTASection`
- **Purpose**: Drive to models page
- **Features**:
  - Gradient background
  - Prominent call-to-action
- **Shadcn Components**: Button
- **Animations**: Pulse effect, gradient animation

---

## Models Page Components

### 1. Models Hero
**Component**: `ModelsHero`
- **Purpose**: Introduction to product lineup
- **Features**:
  - Breadcrumb navigation
  - Overview of all models
- **Shadcn Components**: Breadcrumb, Badge

### 2. Product Comparison
**Component**: `ProductComparison`
- **Purpose**: Side-by-side model comparison
- **Features**:
  - Comparison table/cards
  - Feature highlighting
  - Price display
- **Shadcn Components**: Card, Table, Badge, Button
- **Animations**: Hover effects, slide-in

### 3. Model Showcase Cards
**Component**: `ModelCard`
- **Purpose**: Individual model presentation
- **Features**:
  - Product images with color variants
  - Specifications list
  - Pricing and CTA
- **Shadcn Components**: Card, Button, Badge, Separator
- **Animations**: Hover transforms, image transitions

### 4. Color Variants Selector
**Component**: `ColorSelector`
- **Purpose**: Interactive color selection
- **Features**:
  - Color swatches
  - Dynamic image updates
  - Smooth transitions
- **Shadcn Components**: Button (variant)
- **Animations**: Color transitions, scale effects

---

## Shared Components

### 1. Navigation
**Component**: `Navbar`
- **Features**: Logo, navigation links, mobile menu
- **Shadcn Components**: Button, Sheet (mobile menu)
- **Animations**: Slide-in mobile menu

### 2. Footer
**Component**: `Footer`
- **Features**: Links, social media, newsletter signup
- **Shadcn Components**: Button, Input, Separator

### 3. Loading States
**Component**: `LoadingSpinner`, `SkeletonCard`
- **Shadcn Components**: Skeleton
- **Animations**: Pulse, shimmer effects

---

## Required Shadcn Components

### Already Installed
- [x] Button

### To Install
- [ ] Card
- [ ] Badge  
- [ ] Input
- [ ] Separator
- [ ] Sheet
- [ ] Skeleton
- [ ] Table
- [ ] Progress
- [ ] Breadcrumb

---

## Animation Strategy

### Scroll Animations (Framer Motion)
1. **Intersection Observer** - Trigger animations when elements enter viewport
2. **Staggered Animations** - Sequential reveal of grid items
3. **Parallax Effects** - Background elements move at different speeds
4. **Morphing Transitions** - Smooth state changes

### Animation Types
- **Fade In**: Opacity 0 → 1
- **Slide Up**: Transform translateY(50px) → 0
- **Scale**: Transform scale(0.8) → 1
- **Stagger**: Delay between child animations
- **Parallax**: Background movement on scroll

---

## Technical Implementation

### Dependencies to Add
```json
{
  "framer-motion": "^11.0.0",
  "react-intersection-observer": "^9.5.0",
  "lucide-react": "^0.511.0" // Already installed
}
```

### File Structure
```
components/
├── ui/                 # Shadcn components
├── layout/
│   ├── Navbar.jsx
│   └── Footer.jsx
├── landing/
│   ├── HeroSection.jsx
│   ├── FeaturesGrid.jsx
│   ├── HealthMetricsDemo.jsx
│   ├── BenefitsSection.jsx
│   └── CTASection.jsx
├── models/
│   ├── ModelsHero.jsx
│   ├── ProductComparison.jsx
│   ├── ModelCard.jsx
│   └── ColorSelector.jsx
└── shared/
    ├── LoadingSpinner.jsx
    └── SkeletonCard.jsx

app/
├── page.js             # Landing page
├── models/
│   └── page.js         # Models page
└── layout.js           # Root layout
```

### Design System
- **Primary Colors**: Deep blue (#1e40af), Electric blue (#3b82f6)
- **Accent Colors**: Green (#10b981) for health metrics
- **Typography**: Inter font family
- **Spacing**: Tailwind's spacing scale
- **Breakpoints**: Mobile-first responsive design

---

## Performance Considerations

1. **Image Optimization**: Next.js Image component for all product images
2. **Lazy Loading**: Intersection Observer for animations and images
3. **Code Splitting**: Dynamic imports for heavy components
4. **SEO**: Proper meta tags and structured data

---

## Development Phases

### Phase 1: Foundation (Day 1)
- Install required dependencies
- Set up Shadcn components
- Create basic layout components
- Implement routing structure

### Phase 2: Landing Page (Day 1-2)
- Hero section with ring showcase
- Features grid with animations
- Health metrics demo
- Benefits section

### Phase 3: Models Page (Day 2-3)
- Product comparison layout
- Model cards with variants
- Color selection functionality
- Interactive elements

### Phase 4: Polish & Optimization (Day 3)
- Scroll animations implementation
- Performance optimization
- Mobile responsiveness
- Testing and refinement

---

## Success Metrics

1. **Performance**: Lighthouse score >90
2. **Accessibility**: WCAG 2.1 AA compliance
3. **Mobile Experience**: Smooth animations on mobile devices
4. **User Engagement**: Scroll depth and interaction rates

---

## Next Steps

1. **Approve this plan**
2. **Install required dependencies**
3. **Set up Shadcn components**
4. **Begin with layout and navigation**
5. **Implement landing page hero section**

---

*This plan provides a comprehensive roadmap for building a modern, animated ecommerce site for Helio Ring with focus on performance, user experience, and visual appeal.*

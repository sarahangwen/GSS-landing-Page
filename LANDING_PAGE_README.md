# GSS Landing Page

A professional, modern landing page for GSS Technologies' products built with React, TypeScript, and Vite.

## Overview

This landing page serves as the main entry point for users to discover and access three core GSS products:

1. **GSS Node** - Advanced node management and orchestration system
   - Link: https://node.gss-tec.com/gss
   - Features: Node Management, Network Orchestration, Real-time Monitoring, High Availability

2. **SmartConnect** - Intelligent connectivity platform
   - Link: https://smartconnect.gss-tec.com/
   - Features: Smart Integration, API Management, Real-time Sync, Multi-Protocol Support

3. **GSS Open** - Open-source collaborative development platform
   - Link: https://open.gss-tec.com/
   - Features: Open Source, Community Driven, Extensible, Free to Deploy

## Features

### Design & UX
- **Modern, Professional Design**: Clean interface with contemporary aesthetics
- **Responsive Layout**: Fully responsive on desktop, tablet, and mobile devices
- **Smooth Animations**: Subtle gradient orb animations in the hero section
- **Color Scheme**: Professional gradient colors (blue to teal) with high contrast text
- **Typography**: Clear hierarchy with appropriate font sizes and weights

### Sections

1. **Navigation Bar**
   - Sticky navigation with GSS branding
   - Quick links to Products, Features, and Contact sections
   - Responsive mobile menu support

2. **Hero Section**
   - Compelling headline: "Enterprise Solutions for the Modern Era"
   - Subtitle describing value proposition
   - Call-to-action buttons: "Explore Products" and "Get Started"
   - Animated background with gradient orbs

3. **Products Section**
   - Three product cards with:
     - Icon/emoji identifier
     - Product name and description
     - List of key features with checkmarks
     - "Access Now" link to product website
   - Hover effects with elevation and border color change

4. **Features Section (Why Choose GSS)**
   - Six benefit cards highlighting:
     - Enterprise Security
     - High Performance
     - Global Scale
     - Innovation
     - Expert Support
     - Advanced Analytics

5. **Call-to-Action Section**
   - Highlighted section encouraging users to explore products
   - Dark background for contrast
   - Primary button for navigation

6. **Footer**
   - Company information
   - Product links
   - Resource links
   - Copyright notice

## Technology Stack

- **React 19**: Latest React with improved performance
- **TypeScript**: Type-safe development
- **Vite 8**: Lightning-fast build tool and dev server
- **CSS 3**: Modern CSS with CSS variables and gradients
- **Responsive Design**: Mobile-first approach

## Styling Features

### CSS Variables
The design uses CSS custom properties for easy theming:
- Primary colors: Blue, Green, and Indigo gradients
- Text colors: Dark gray for primary, light gray for secondary
- Shadows: Multiple shadow levels for depth
- Spacing: Consistent rem-based spacing

### Responsive Breakpoints
- Desktop: 1200px+ max-width container
- Tablet: 768px- adjustments
- Mobile: 480px- additional adjustments

### Visual Effects
- Smooth transitions on hover
- Gradient text for branding
- Animated orbs in background
- Card elevation on hover
- Smooth scroll behavior

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
cd my-react-app
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5174/` (or the next available port)

### Building

```bash
npm run build
```

Builds the application for production in the `dist` folder.

### Preview

```bash
npm run preview
```

Preview the production build locally.

## Project Structure

```
src/
├── App.tsx          # Main application component with product data
├── App.css          # All styling for the landing page
├── index.css        # Global CSS reset and defaults
├── main.tsx         # React entry point
└── assets/          # Static assets
```

## Product Data Structure

Products are defined in `App.tsx` with the following interface:

```typescript
interface Product {
  id: number;
  name: string;
  description: string;
  features: string[];
  link: string;
  icon: string;
}
```

## Customization

### Adding/Modifying Products
Edit the `products` array in [src/App.tsx](src/App.tsx) to add or modify product information.

### Changing Colors
Update CSS custom properties in `:root` within [src/App.css](src/App.css):
- `--primary-color`: Dark gray background for CTA/footer
- `--secondary-color`: Blue accent color
- `--tertiary-color`: Green accent color
- `--accent-color`: Purple accent color

### Modifying Sections
Each section has its own component structure in the App component. You can easily modify content by updating the JSX.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimization

- Code splitting via Vite
- Minimal bundle size
- Optimized CSS
- Fast load times with Vite's instant module replacement

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Descriptive link text
- Good color contrast ratios
- Responsive design supports all screen sizes

## Future Enhancements

Potential features to add:
- Testimonials section
- Pricing information
- Blog/resources section
- Contact form integration
- Dark mode support
- Advanced analytics integration
- A/B testing capability

## License

Proprietary - GSS Technologies

## Contact

For questions or support regarding this landing page, please contact GSS Technologies.

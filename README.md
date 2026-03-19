# Müller Metallverarbeitung GmbH - Website Redesign

A modern, responsive single-page application redesign for Müller Metallverarbeitung GmbH, a German metal manufacturing company with over 50 years of experience.

## About This Project

This is a complete website redesign built to replace the original broken static HTML site from 2005. The new site features:

- Modern, industrial design aesthetic
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll navigation
- Contact form
- Service showcase
- Company information

## Tech Stack

- **Vite** - Fast build tool and development server
- **React** - Component-based UI library
- **Lucide React** - Icon library
- **CSS** - Custom styling (no frameworks)

## Design System

### Colors
- Background: `#0a0a0a`
- Surface/Cards: `#141414`
- Borders: `#2a2a2a`
- Primary Accent (Silver): `#c0c0c0`
- Highlight (Gold): `#b8860b`
- Text Primary: `#f0f0f0`
- Text Secondary: `#888888`

### Typography
- Font Family: Inter (Google Fonts)
- Industrial, clean aesthetic

## Project Structure

```
muller-metallverarbeitung/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── Services.jsx
│   │   ├── Services.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

The site will automatically reload when you make changes to the code.

### Available Scripts

- `npm run dev` - Start development server on localhost:5173
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Features

### Sections

1. **Navbar** - Sticky navigation with mobile hamburger menu
2. **Hero** - Full-screen hero with call-to-action
3. **Leistungen (Services)** - 4-card grid showcasing services:
   - Edelstahlverarbeitung (Stainless Steel Processing)
   - Stahlbau (Steel Construction)
   - Anlagenbau (Plant Engineering)
   - Apparatebau (Apparatus Construction)
4. **Unternehmen (About)** - Two-column layout with company info and DIN EN 1090 certification
5. **Kontakt (Contact)** - Contact form and company details
6. **Footer** - Company info and legal links

### Responsive Design

- **Mobile** (< 768px): Single column layout, hamburger menu
- **Tablet** (768px - 1024px): 2-column service cards
- **Desktop** (> 1024px): Full 4-column service cards

## Contact Form

The contact form includes client-side validation for:
- Name (required)
- Email (required, valid email format)
- Message (required)

*Note: Backend integration not included. Form shows alert on submission.*

## Original Site Issues (Fixed)

The original metaba-mueller.de site had:
- ❌ Broken images
- ❌ No CSS styling
- ❌ No mobile support
- ❌ Minimal content
- ❌ Poor maintenance
- ❌ Outdated design from 2005

All of these issues have been addressed in this redesign.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Müller Metallverarbeitung GmbH. All rights reserved.

---

Built with ⚙️ by Saga Build

# Mansa School of Nursing Website

A professional, responsive website for Mansa School of Nursing built with React and Tailwind CSS.

## Features

- 🎨 Professional design with institutional credibility
- 📱 Fully responsive mobile-first design
- ⚡ Fast loading with optimized performance
- 🎭 Smooth animations and professional motion effects
- 🧭 Scroll-to-top navigation
- 📄 Multiple pages: Home, About, Programs, Admissions, Academics, etc.
- 🎯 SEO-friendly structure

## Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mansa-school-of-nursing.git
cd mansa-school-of-nursing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The website will open at `http://localhost:3000`.

## Deployment to GitHub Pages

### Method 1: Automatic Deployment (Recommended)

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at `https://yourusername.github.io/mansa-school-of-nursing`

### Method 2: Manual Deployment

1. Update the `homepage` field in `package.json`:
```json
"homepage": "https://yourusername.github.io/mansa-school-of-nursing"
```

2. Build and deploy:
```bash
npm run build
npm run deploy
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.js       # Navigation component
│   ├── Footer.js       # Footer component
│   └── PageHeader.js   # Page header component
├── pages/              # Page components
│   ├── Home.js         # Homepage
│   ├── AboutUs.js      # About page
│   ├── Programs.js     # Programs page
│   ├── Admissions.js   # Admissions page
│   ├── Academics.js    # Academics page
│   ├── StudentPortal.js # Student portal page
│   ├── News.js         # News page
│   ├── Contact.js      # Contact page
│   ├── Leadership.js   # Leadership page
│   └── Accessibility.js # Accessibility page
├── App.js              # Main app component
├── index.js            # Entry point
└── index.css           # Global styles and animations
```

## Key Features

### Mobile Responsiveness
- Responsive navigation with mobile menu
- Optimized layouts for all screen sizes
- Touch-friendly interface elements
- Adaptive typography and spacing

### Professional Animations
- Fade-in animations on scroll
- Staggered animations for content sections
- Hover effects on interactive elements
- Smooth transitions throughout

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Alt text for images

## Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* your primary colors */ },
  accent: { /* your accent colors */ },
  neutral: { /* your neutral colors */ }
}
```

### Content
- Update contact information in relevant pages
- Modify program details in `Programs.js`
- Update leadership information in `Leadership.js`
- Customize news and announcements in `News.js`

### Branding
- Replace logo files in the `public` folder
- Update the site title in `public/index.html`
- Modify the school name throughout the components

## Performance Optimization

- Optimized images and assets
- Code splitting with React.lazy (if needed)
- Efficient CSS with Tailwind's purge feature
- Minimal JavaScript bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions about this website, please contact:
- Email: info@mansanursing.edu
- Phone: +260 1652 234567

---

Built with ❤️ for Mansa School of Nursing
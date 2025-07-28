# AestheticFolio - React Portfolio

A beautiful, modern portfolio website built with React and Vite. This is a **standard Vite React project** - no unnecessary backend, just pure frontend goodness!

## ✨ Features

- **Modern React 18** with JavaScript
- **Beautiful UI** with Tailwind CSS
- **Smooth Animations** with Framer Motion
- **Responsive Design** that works on all devices
- **Dark/Light Theme** switching
- **Contact Form** with EmailJS integration
- **Fast Development** with Vite
- **No Backend Required** - everything runs in the browser

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
aestheticfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility libraries
│   ├── data/           # Portfolio data
│   └── assets/         # Images and assets
├── index.html          # Entry point
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json        # Dependencies
```

## 🎨 Customization

### Update Portfolio Data
Edit `src/data/portfolio.js` to update:
- Personal information
- Skills and percentages
- Projects and descriptions
- Contact details

### Styling
- **Tailwind CSS** for styling
- **Custom animations** in `tailwind.config.js`
- **Theme variables** in `src/index.css`

### Contact Form
The contact form uses **EmailJS**:
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Add environment variables:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **EmailJS** - Contact form
- **Wouter** - Lightweight routing
- **Lucide React** - Icons

## 📱 Responsive Design

The portfolio is fully responsive and works perfectly on:
- Desktop computers
- Tablets
- Mobile phones
- All screen sizes

## 🌙 Dark/Light Theme

- Automatic theme detection
- Manual theme switching
- Persistent theme preference
- Smooth transitions

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Netlify
1. Build: `npm run build`
2. Deploy `dist` folder

### GitHub Pages
1. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/reponame",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```


**Built with ❤️ using React, Vite, and Tailwind CSS** 

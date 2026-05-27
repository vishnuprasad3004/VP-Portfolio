# 🎨 VP Portfolio

A modern, interactive personal portfolio website built with cutting-edge web technologies. Showcase your projects, skills, and achievements with smooth animations and a beautiful user interface.

[![TypeScript](https://img.shields.io/badge/TypeScript-96.4%25-3178c6?style=flat-square)](https://www.typescriptlang.org/)
[![HTML](https://img.shields.io/badge/HTML-3.6%25-e34c26?style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.2.3-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel)](https://vp-portfolio-nine.vercel.app)

**[Live Demo](https://vp-portfolio-nine.vercel.app)**

## ✨ Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations** - Framer Motion powered transitions and interactions
- **Dark/Light Mode** - Toggle between themes for better viewing experience
- **Interactive Charts** - Visualize skills and statistics with Recharts
- **AI Integration** - Google Generative AI integration for enhanced functionality
- **Modern UI Components** - Built with Lucide React icons
- **Fast Performance** - Optimized with Vite for instant loading
- **Type Safe** - 100% TypeScript for better development experience

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vishnuprasad3004/VP-Portfolio.git
   cd VP-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The portfolio will be available at `http://localhost:5173`

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
```

This generates an optimized production build in the `dist` folder.

### Preview Build Locally

```bash
npm run preview
```

### Deploy to Vercel

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy on every push

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|---|---|---|
| **React** | UI Library | 19.2.3 |
| **TypeScript** | Type Safety | 5.8.2 |
| **Vite** | Build Tool & Dev Server | 6.2.0 |
| **Framer Motion** | Animations & Transitions | 12.23.26 |
| **Recharts** | Data Visualization | 3.5.1 |
| **Lucide React** | Icons | 0.561.0 |
| **Google GenAI** | AI Integration | 1.33.0 |

## 📁 Project Structure

```
VP-Portfolio/
├── src/
│   ├── components/       # Reusable React components
│   ├── pages/           # Page components
│   ├── styles/          # CSS/styling files
│   ├── App.tsx          # Main App component
│   └── main.tsx         # Entry point
├── public/              # Static assets
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
├── package.json         # Project metadata & dependencies
└── README.md            # This file
```

## 🎯 Usage

### Development

The development server provides hot module replacement (HMR) for instant updates as you code:

```bash
npm run dev
```

### Production Build

Create an optimized build ready for deployment:

```bash
npm run build
```

### Preview Production Build

Test the production build locally before deploying:

```bash
npm run preview
```

## 🌐 Environment Variables

Create a `.env` file in the root directory for any API keys (e.g., Google GenAI):

```env
VITE_GOOGLE_GENAI_API_KEY=your_api_key_here
```

Note: Never commit sensitive credentials. Add `.env` to `.gitignore`.

## 📝 Customization

### Update Portfolio Content

Edit the content in your component files to add:
- Your projects and descriptions
- Skills and proficiencies
- Work experience
- Contact information
- Social media links

### Modify Styling

- Colors and themes can be customized in your CSS files
- Framer Motion animations can be tweaked in component files
- Use Recharts' customization options for chart styling

## 🚢 Deployment

### Deploy on Vercel (Recommended)

1. Push to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect the configuration and deploy

### Other Deployment Options

- **GitHub Pages** - Static hosting
- **Netlify** - Similar to Vercel
- **AWS Amplify** - AWS-based hosting

## 🔄 Updates & Maintenance

Keep your dependencies up to date:

```bash
npm outdated          # Check for outdated packages
npm update            # Update packages
npm audit fix         # Fix security vulnerabilities
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

- **GitHub**: [@vishnuprasad3004](https://github.com/vishnuprasad3004)
- **Portfolio**: [VP Portfolio](https://vp-portfolio-nine.vercel.app)

## 🙏 Acknowledgments

- Created with [Vite](https://vitejs.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide React](https://lucide.dev/)
- Charts by [Recharts](https://recharts.org/)
- AI Integration with [Google Generative AI](https://ai.google.dev/)

---

**Made with ❤️ by Vishnu Prasad**

⭐ If you find this project useful, please consider starring the repository!

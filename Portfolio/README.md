# Advanced Portfolio Website

A highly advanced personal portfolio website built with Next.js, React, TypeScript, TailwindCSS, and Framer Motion.

## 🚀 Features

### Design & UI/UX
- **Modern Design**: Minimal, professional, and futuristic design
- **Advanced Animations**: Smooth transitions with Framer Motion
- **Glassmorphism**: Glass-like transparency effects
- **Neumorphism**: Soft UI design elements
- **Advanced Gradients**: Beautiful mesh gradients and color combinations
- **Dark/Light Mode**: Complete theme support with smooth transitions
- **Responsive Design**: Perfect on all devices (desktop, tablet, mobile)

### Sections
- **Hero Section**: Animated intro with typewriter effect and particle background
- **Experience Section**: Interactive timeline with company logos and transitions
- **Projects Section**: Interactive cards with 3D tilt effects and modal details
- **Skills Section**: Animated progress bars, radial charts, and tag clouds
- **Achievements Section**: Badges with trophy icons and hover animations
- **Resume Section**: Embedded PDF viewer with download functionality
- **Contact Section**: Contact form with validation and social icons

### Technical Features
- **Smooth Scroll**: Seamless scrolling between sections
- **Parallax Effects**: Advanced parallax scrolling animations
- **Interactive Elements**: Hover effects, 3D transformations
- **SEO Optimized**: Perfect meta tags and structured data
- **Performance**: Fast loading with Next.js optimization
- **TypeScript**: Full type safety throughout the project

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom configurations
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **PDF Viewer**: React PDF
- **Development**: ESLint, PostCSS, Autoprefixer

## 🏃‍♂️ Getting Started

### Prerequisites

Make sure you have Node.js (version 18 or higher) installed on your system.

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information

Edit `src/data/portfolio.ts` to customize your personal information:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title", 
  tagline: "Your Tagline",
  description: "Your Description",
  // ... more fields
}
```

### Experience, Projects, Skills

Update the respective arrays in `src/data/portfolio.ts`:
- `experiences` - Your work experience
- `projects` - Your project showcase
- `skills` - Your technical skills
- `achievements` - Your achievements and certifications

### Styling

The project uses TailwindCSS with extensive custom configurations:
- **Colors**: Defined in `tailwind.config.ts`
- **Animations**: Custom keyframes and transitions
- **Global Styles**: Custom CSS in `src/app/globals.css`

### Images

Place your images in the `public/images/` directory:
- `avatar.jpg` - Your profile picture
- `project1.jpg`, `project2.jpg` - Project screenshots
- `company1.png`, `company2.png` - Company logos
- `resume.pdf` - Your resume file

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/            # React components
│   │   ├── sections/          # Page sections
│   │   ├── ui/               # Reusable UI components
│   │   ├── navbar.tsx        # Navigation component
│   │   └── theme-provider.tsx # Theme context
│   ├── data/                 # Data and content
│   │   └── portfolio.ts      # Portfolio data
│   ├── lib/                  # Utility functions
│   │   └── utils.ts          # Helper functions
│   └── types/                # TypeScript types
│       └── index.ts          # Type definitions
├── public/                   # Static assets
│   ├── images/              # Images and icons
│   └── resume.pdf           # Your resume
├── tailwind.config.ts       # TailwindCSS configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with automatic builds

### Other Platforms

```bash
# Build the project
npm run build

# Start production server
npm run start
```

## 🎯 Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting with Next.js
- **Lazy Loading**: Components load when needed
- **Minification**: Production builds are fully minified
- **Caching**: Optimized caching strategies

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you have any questions or run into issues, please:
1. Check the documentation above
2. Look for existing issues on GitHub
3. Create a new issue if needed

---

**Built with ❤️ using modern web technologies**
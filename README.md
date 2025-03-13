# DevOps Portfolio Template

A modern, interactive, and sleek portfolio template for DevOps Engineers, SRE professionals, and Cloud Architects built with Next.js 15, React 19, Tailwind CSS 4, and Framer Motion.

![DevOps Portfolio Template](https://via.placeholder.com/1200x630/0a0a0a/00b7ff?text=DevOps+Portfolio+Template)

## Features

- 🚀 **Modern Tech Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4
- ✨ **Interactive UI**: Smooth animations and transitions with Framer Motion
- 🌓 **Responsive Design**: Looks great on all devices - mobile, tablet, and desktop
- 🎨 **Customizable**: Easily update content, colors, and styling to match your personal brand
- 🔍 **SEO Optimized**: Built-in SEO best practices for better visibility
- 🔧 **DevOps Focused**: Sections specifically designed to showcase DevOps skills and projects
- 📊 **3D Visualizations**: Interactive 3D elements using React Three Fiber
- 🏗️ **Component-Based**: Modular architecture for easy customization

## Sections

- **Hero**: Eye-catching introduction with 3D animation
- **About**: Professional summary and personal information
- **Skills**: Visual representation of technical skills and competencies
- **Projects**: Showcase your DevOps and cloud infrastructure projects
- **Experience**: Timeline of your professional journey
- **Contact**: Contact form and professional information

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/devops-portfolio.git
   cd devops-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Personal Information

Edit the components to include your personal information:

- Update your name, title, and bio in `src/components/Hero.tsx` and `src/components/About.tsx`
- Add your skills in `src/components/Skills.tsx`
- Showcase your projects in `src/components/Projects.tsx`
- Update your work history in `src/components/Experience.tsx`
- Add your contact information in `src/components/Contact.tsx`

### Styling

The template uses Tailwind CSS for styling. You can customize the look and feel by:

1. Modifying the theme in `tailwind.config.js`
2. Updating global styles in `src/app/globals.css`
3. Changing component-specific styles in their respective files

### Adding New Sections

To add a new section:

1. Create a new component in the `src/components` directory
2. Import and add the component to `src/app/page.tsx`

## Deployment

### Deploy on Vercel

The easiest way to deploy your portfolio is to use [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository on Vercel
3. Vercel will detect Next.js and configure the build settings automatically

### Other Deployment Options

You can also deploy this portfolio on any platform that supports Next.js applications:

- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Netlify](https://www.netlify.com/)
- [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform/)
- [Google Cloud Run](https://cloud.google.com/run)

## Project Structure

```
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   └── components/       # React components
│       ├── Navbar.tsx    # Navigation bar
│       ├── Hero.tsx      # Hero section
│       ├── About.tsx     # About section
│       ├── Skills.tsx    # Skills section
│       ├── Projects.tsx  # Projects section
│       ├── Experience.tsx# Experience section
│       └── Contact.tsx   # Contact section
├── next.config.ts        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## Technologies Used

- [Next.js 15](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) - 3D graphics
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Vercel](https://vercel.com) for the amazing Next.js framework
- [Tailwind Labs](https://tailwindlabs.com/) for Tailwind CSS
- [Framer](https://www.framer.com/) for Framer Motion
- [Three.js](https://threejs.org/) for 3D graphics capabilities

---

Created with ❤️ for the DevOps community

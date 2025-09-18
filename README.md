# Champs Pet Services Website

A modern React website for Champs Pet Services, built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 20.x (matches the Vercel deployment runtime)
- npm 10.x

### Installation

1. Clone the repository
```bash
git clone https://github.com/mastanley13/Champs-site.git
cd Champs-site
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 🛠️ Built With
- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- React Query
- Material-UI

## 📁 Project Structure and Directory Guidelines

```
src/
├── assets/         # Static assets (images, fonts, icons)
├── components/     # Reusable UI components
├── pages/          # Page components
├── styles/         # Global styles and themes
├── hooks/          # Custom React hooks
├── utils/          # Utility functions
└── services/       # API and external services
```

### Directory Usage Guidelines

#### 📄 Pages Directory (`src/pages/`)
- Contains ONLY page-level components
- Each page should be in its own file (e.g., `Home.tsx`, `About.tsx`)
- Pages should focus on layout and data fetching
- Currently includes:
  - Home
  - Daycare
  - Boarding
  - Grooming
  - Training
  - Supply
  - Contact
  - About

#### 🧩 Components Directory (`src/components/`)
- ALL reusable components go here, regardless of which page uses them
- Organize by feature or type (e.g., `Layout/`, `Forms/`, `UI/`)
- Each component should have its own directory with related files
- Example structure:
  ```
  components/
  ├── Layout/
  │   ├── Layout.tsx
  │   └── Footer.tsx
  ├── Navbar/
  │   └── Navbar.tsx
  └── UI/
      ├── Button.tsx
      └── Card.tsx
  ```

#### 🖼️ Assets Directory (`src/assets/`)
- Store ALL static files:
  - Images (`.png`, `.jpg`, `.svg`)
  - Fonts
  - Icons
  - Other media files
- Use subdirectories for organization (e.g., `images/`, `fonts/`)

#### 🎨 Styles Directory (`src/styles/`)
- Global styles and theme configurations
- Tailwind CSS customizations
- Shared style utilities
- No component-specific styles (those should be with their components)

#### 🪝 Hooks Directory (`src/hooks/`)
- Custom React hooks ONLY
- Each hook should be in its own file
- Examples: `useAuth.ts`, `useForm.ts`, `useApi.ts`

#### 🛠️ Utils Directory (`src/utils/`)
- Helper functions and utilities
- Constants and configuration
- Type definitions
- Pure functions only (no React components)

#### 🌐 Services Directory (`src/services/`)
- API calls and external service integrations
- Service layer abstractions
- API types and interfaces
- Example: `api.ts`, `auth.service.ts`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## ☁️ Deploying to Vercel

The project ships with Vercel configuration so you can deploy the static Vite build without any manual setup. To deploy:

1. [Install the Vercel CLI](https://vercel.com/docs/cli) and authenticate:
   ```bash
   npm install -g vercel
   vercel login
   ```
2. From the project root, run the deploy command. The first run will prompt for the scope and project name—accept the defaults unless you need something different.
   ```bash
   vercel
   ```
3. For production deploys, use:
   ```bash
   vercel --prod
   ```

### How the deployment works
- `vercel.json` pins the build command (`npm run build`), output directory (`dist`), and Node.js framework detection (`vite`).
- A SPA-friendly rewrite rule routes traffic through `index.html`, ensuring React Router handles client-side navigation.
- `.vercelignore` keeps development-only artifacts (like `node_modules` and editor settings) out of the deployment bundle, reducing upload time and avoiding stale files.
- The `package.json` `engines` field ensures the build runs on Node.js 20 and npm 10 locally and in the Vercel environment.

## 🌐 Features
- Modern, responsive design
- Dynamic navigation with dropdowns
- Mobile-friendly interface
- Type-safe development with TypeScript
- Fast refresh with Vite
- Utility-first styling with Tailwind CSS

## 📝 Development Notes
- The site uses Tailwind CSS for styling. Custom styles can be added in `src/index.css`
- Navigation is handled through React Router DOM
- State management is available through React Query for API calls

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details

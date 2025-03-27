# Champ's Dog House Website

This repository contains the code for the Champ's Dog House website, a React application built with Vite, TypeScript, and Tailwind CSS.

## Development Setup

### Prerequisites

- Node.js (version 20.x or later)
- npm (version 10.x or later)

### Starting the Development Server

#### Windows

Run the PowerShell script:

```powershell
.\start-dev.ps1
```

#### macOS/Linux

Make the script executable and run it:

```bash
chmod +x start-dev.sh
./start-dev.sh
```

#### Manual Method

If you prefer to run the commands manually:

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Project Structure

- `src/` - Source code
  - `pages/` - Page components
  - `components/` - Reusable components
  - `assets/` - Static assets

## Build for Production

```
npm run build
```

## Running Production Build Locally

```
npm run preview
```

## Deployment

The production build is automatically deployed when changes are pushed to the main branch.

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Open a pull request to merge your branch into the main branch

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

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details

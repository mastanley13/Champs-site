export const ROUTES = {
  // Main Navigation Routes
  HOME: import.meta.env.VITE_ROUTE_HOME || '/',
  DAYCARE: import.meta.env.VITE_ROUTE_DAYCARE || '/daycare',
  BOARDING: import.meta.env.VITE_ROUTE_BOARDING || '/boarding',
  GROOMING: import.meta.env.VITE_ROUTE_GROOMING || '/grooming',
  TRAINING: import.meta.env.VITE_ROUTE_TRAINING || '/training',

  // Supply Routes
  SUPPLY: {
    ROOT: import.meta.env.VITE_ROUTE_SUPPLY || '/supply',
    CHEWING: import.meta.env.VITE_ROUTE_SUPPLY_CHEWING || '/supply/chewing-items',
    ESSENTIALS: import.meta.env.VITE_ROUTE_SUPPLY_ESSENTIALS || '/supply/essentials',
    HOLIDAY: import.meta.env.VITE_ROUTE_SUPPLY_HOLIDAY || '/supply/holiday-toys',
    COLLARS: import.meta.env.VITE_ROUTE_SUPPLY_COLLARS || '/supply/collars-leashes',
    ACCESSORIES: import.meta.env.VITE_ROUTE_SUPPLY_ACCESSORIES || '/supply/accessories',
    TOYS: import.meta.env.VITE_ROUTE_SUPPLY_TOYS || '/supply/toys',
  },

  // More Routes
  CONTACT: import.meta.env.VITE_ROUTE_CONTACT || '/contact',
  ABOUT: import.meta.env.VITE_ROUTE_ABOUT || '/about',

  // External Routes
  CUSTOMER_PORTAL: import.meta.env.VITE_CUSTOMER_PORTAL_URL || '/customer-portal',
  SHOPIFY_STORE: import.meta.env.VITE_SHOPIFY_STORE_URL || '#',
} as const; 
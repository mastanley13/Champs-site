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
    CHEWING: import.meta.env.VITE_ROUTE_SUPPLY_CHEWING || '/chewing-items',
    ESSENTIALS: import.meta.env.VITE_ROUTE_SUPPLY_ESSENTIALS || '/essentials',
    HOLIDAY: import.meta.env.VITE_ROUTE_SUPPLY_HOLIDAY || '/holiday-toys',
    COLLARS: import.meta.env.VITE_ROUTE_SUPPLY_COLLARS || '/collars-leashes-harnesses',
    ACCESSORIES: import.meta.env.VITE_ROUTE_SUPPLY_ACCESSORIES || '/puzzles-bowls',
    TOYS: import.meta.env.VITE_ROUTE_SUPPLY_TOYS || '/toys',
  },

  // More Routes
  CONTACT: import.meta.env.VITE_ROUTE_CONTACT || '/contact',
  ABOUT: import.meta.env.VITE_ROUTE_ABOUT || '/about',
  TERMS: '/terms-and-conditions',

  // External Routes
  CUSTOMER_PORTAL: import.meta.env.VITE_CUSTOMER_PORTAL_URL || '/customer-portal',
  SHOPIFY_STORE: import.meta.env.VITE_SHOPIFY_STORE_URL || 'https://championdogproducts.com',
  BOARD_AND_TRAIN: '/board-and-train',
} as const; 
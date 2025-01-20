import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/CDP_White-01.png';

interface DropdownItem {
  label: string;
  path: string;
}

const supplyDropdownItems: DropdownItem[] = [
  { label: 'Chewing Items', path: '/supply/chewing-items' },
  { label: 'Puzzles & Bowls', path: '/supply/puzzles-bowls' },
  { label: 'Collars, Leashes, & Harness', path: '/supply/collars-leashes' },
  { label: 'Cots, Crates, & Bedding', path: '/supply/bedding' },
  { label: 'Toys', path: '/supply/toys' },
  { label: 'Accessories', path: '/supply/accessories' },
];

const moreDropdownItems: DropdownItem[] = [
  { label: 'Contact', path: '/contact' },
  { label: 'About Us', path: '/about' },
];

export function Navbar() {
  const [isSupplyOpen, setIsSupplyOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  // Add timeout ref to handle delayed closing
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (setter: (value: boolean) => void) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setter(true);
  };

  const handleMouseLeave = (setter: (value: boolean) => void) => {
    timeoutRef.current = setTimeout(() => {
      setter(false);
    }, 300); // 300ms delay before closing
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const supplyDropdownItems = [
    { label: 'Chewing Items', count: 25, path: '/supply/chewing-items' },
    { label: 'Essentials', count: 8, path: '/supply/essentials' },
    { label: 'Holiday Toys', count: 21, path: '/supply/holiday-toys' },
    { label: 'Collars, Leashes & Harnesses', count: 19, path: '/supply/collars-leashes' },
    { label: 'Puzzles, Bowls & Accessories', count: 8, path: '/supply/accessories' },
    { label: 'Toys', count: 34, path: '/supply/toys' },
  ];

  return (
    <nav className="bg-[#003B6D] text-white relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Champion Dog Products" className="h-16" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-200 transition-colors">
              HOME
            </Link>
            <Link to="/daycare" className="hover:text-blue-200 transition-colors">
              DAYCARE
            </Link>
            <Link to="/boarding" className="hover:text-blue-200 transition-colors">
              BOARDING
            </Link>
            <Link to="/grooming" className="hover:text-blue-200 transition-colors">
              GROOMING
            </Link>
            <Link to="/training" className="hover:text-blue-200 transition-colors">
              TRAINING
            </Link>

            {/* Supply Dropdown */}
            <div className="relative group">
              <div
                className="flex items-center hover:text-blue-200 transition-colors cursor-pointer"
                onMouseEnter={() => handleMouseEnter(setIsSupplyOpen)}
                onMouseLeave={() => handleMouseLeave(setIsSupplyOpen)}
              >
                <Link to="/supply" className="mr-1">
                  SUPPLY
                </Link>
                <svg 
                  className="w-5 h-5 fill-[#E63946]" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8.35,3C9.53,2.83 10.78,4.12 11.14,5.9C11.5,7.67 10.85,9.25 9.67,9.43C8.5,9.61 7.24,8.32 6.87,6.54C6.51,4.77 7.17,3.19 8.35,3M15.5,3C16.69,3.19 17.35,4.77 17,6.54C16.62,8.32 15.37,9.61 14.19,9.43C13,9.25 12.35,7.67 12.72,5.9C13.08,4.12 14.33,2.83 15.5,3M3,7.6C4.14,7.11 5.69,8 6.5,9.55C7.26,11.13 7,12.79 5.87,13.28C4.74,13.77 3.2,12.89 2.41,11.32C1.62,9.75 1.9,8.08 3,7.6M21,7.6C22.1,8.08 22.38,9.75 21.59,11.32C20.8,12.89 19.26,13.77 18.13,13.28C17,12.79 16.74,11.13 17.5,9.55C18.31,8 19.86,7.11 21,7.6M19.33,18.38C19.37,19.32 18.65,20.36 17.79,20.75C16,21.57 13.88,19.87 11.89,19.87C9.9,19.87 7.76,21.64 6,20.75C5,20.26 4.31,18.96 4.44,17.88C4.62,16.39 6.41,15.59 7.47,14.5C8.88,13.09 9.88,10.44 11.89,10.44C13.89,10.44 14.95,13.05 16.3,14.5C17.41,15.72 19.26,16.75 19.33,18.38Z"/>
                </svg>
              </div>
              {isSupplyOpen && (
                <div
                  className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50"
                  onMouseEnter={() => handleMouseEnter(setIsSupplyOpen)}
                  onMouseLeave={() => handleMouseLeave(setIsSupplyOpen)}
                >
                  {supplyDropdownItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-[#003B6D]"
                    >
                      <div className="flex justify-between items-center">
                        <span>{item.label}</span>
                        <span className="text-sm text-gray-500">{item.count} items</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* More Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center hover:text-blue-200 transition-colors"
                onMouseEnter={() => handleMouseEnter(setIsMoreOpen)}
                onMouseLeave={() => handleMouseLeave(setIsMoreOpen)}
              >
                MORE
                <svg 
                  className="w-5 h-5 ml-1 fill-[#E63946]" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8.35,3C9.53,2.83 10.78,4.12 11.14,5.9C11.5,7.67 10.85,9.25 9.67,9.43C8.5,9.61 7.24,8.32 6.87,6.54C6.51,4.77 7.17,3.19 8.35,3M15.5,3C16.69,3.19 17.35,4.77 17,6.54C16.62,8.32 15.37,9.61 14.19,9.43C13,9.25 12.35,7.67 12.72,5.9C13.08,4.12 14.33,2.83 15.5,3M3,7.6C4.14,7.11 5.69,8 6.5,9.55C7.26,11.13 7,12.79 5.87,13.28C4.74,13.77 3.2,12.89 2.41,11.32C1.62,9.75 1.9,8.08 3,7.6M21,7.6C22.1,8.08 22.38,9.75 21.59,11.32C20.8,12.89 19.26,13.77 18.13,13.28C17,12.79 16.74,11.13 17.5,9.55C18.31,8 19.86,7.11 21,7.6M19.33,18.38C19.37,19.32 18.65,20.36 17.79,20.75C16,21.57 13.88,19.87 11.89,19.87C9.9,19.87 7.76,21.64 6,20.75C5,20.26 4.31,18.96 4.44,17.88C4.62,16.39 6.41,15.59 7.47,14.5C8.88,13.09 9.88,10.44 11.89,10.44C13.89,10.44 14.95,13.05 16.3,14.5C17.41,15.72 19.26,16.75 19.33,18.38Z"/>
                </svg>
              </button>
              {isMoreOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50"
                  onMouseEnter={() => handleMouseEnter(setIsMoreOpen)}
                  onMouseLeave={() => handleMouseLeave(setIsMoreOpen)}
                >
                  {moreDropdownItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-[#003B6D]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button - We'll implement mobile menu later */}
          <button className="md:hidden p-2">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Centered gradient line with wider solid section */}
      <div className="absolute bottom-0 left-[100px] right-[100px] h-[4px] bg-gradient-to-r 
           from-transparent
           via-[#E63946]
           to-transparent"></div>
    </nav>
  );
} 
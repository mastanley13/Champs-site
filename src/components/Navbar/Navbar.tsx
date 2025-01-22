import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/CDP_White-01.png';

interface DropdownItem {
  label: string;
  path: string;
  count?: number;
}

const navigationItems = [
  { label: 'HOME', path: '/' },
  { label: 'DAYCARE', path: '/daycare' },
  { label: 'BOARDING', path: '/boarding' },
  { label: 'GROOMING', path: '/grooming' },
  { label: 'TRAINING', path: '/training' },
];

const supplyDropdownItems: DropdownItem[] = [
  { label: 'Chewing Items', path: '/supply/chewing-items', count: 25 },
  { label: 'Essentials', path: '/supply/essentials', count: 8 },
  { label: 'Holiday Toys', path: '/supply/holiday-toys', count: 21 },
  { label: 'Collars, Leashes & Harnesses', path: '/supply/collars-leashes', count: 19 },
  { label: 'Puzzles, Bowls & Accessories', path: '/supply/accessories', count: 8 },
  { label: 'Toys', path: '/supply/toys', count: 34 },
];

const moreDropdownItems: DropdownItem[] = [
  { label: 'Contact', path: '/contact' },
  { label: 'About Us', path: '/about' },
];

export function Navbar() {
  const [isSupplyOpen, setIsSupplyOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const location = useLocation();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  }, [location]);

  // Handle click outside to close dropdowns and mobile menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!isMobileMenuOpen) return;
      
      const target = event.target as HTMLElement;
      const mobileMenu = mobileMenuRef.current;
      const mobileButton = mobileButtonRef.current;

      if (!mobileMenu || !mobileButton) return;

      if (!mobileMenu.contains(target) && !mobileButton.contains(target)) {
        setIsMobileMenuOpen(false);
        setActiveMobileDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleMouseEnter = (setter: (value: boolean) => void) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setter(true);
  };

  const handleMouseLeave = (setter: (value: boolean) => void) => {
    timeoutRef.current = setTimeout(() => setter(false), 300);
  };

  const toggleMobileDropdown = (dropdown: string) => {
    setActiveMobileDropdown(activeMobileDropdown === dropdown ? null : dropdown);
  };

  const isActivePath = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-[#003B6D] text-white relative">
      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Champion Dog Products" className="h-16" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-blue-200 transition-colors ${
                  isActivePath(item.path) ? 'text-blue-200 font-semibold' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Supply Dropdown */}
            <div className="relative group">
              <div
                className={`flex items-center hover:text-blue-200 transition-colors cursor-pointer ${
                  isActivePath('/supply') ? 'text-blue-200 font-semibold' : ''
                }`}
                onMouseEnter={() => handleMouseEnter(setIsSupplyOpen)}
                onMouseLeave={() => handleMouseLeave(setIsSupplyOpen)}
              >
                <Link to="/supply" className="mr-1">SUPPLY</Link>
                <svg className="w-5 h-5 fill-[#E63946]" viewBox="0 0 512 512">
                  <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z" />
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
                      className={`block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-[#003B6D] ${
                        isActivePath(item.path) ? 'bg-blue-50 text-[#003B6D]' : ''
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{item.label}</span>
                        {item.count && <span className="text-sm text-gray-500">{item.count} items</span>}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* More Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center hover:text-blue-200 transition-colors ${
                  isActivePath('/contact') || isActivePath('/about') ? 'text-blue-200 font-semibold' : ''
                }`}
                onMouseEnter={() => handleMouseEnter(setIsMoreOpen)}
                onMouseLeave={() => handleMouseLeave(setIsMoreOpen)}
              >
                MORE
                <svg className="w-5 h-5 ml-1 fill-[#E63946]" viewBox="0 0 512 512">
                  <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z" />
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
                      className={`block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-[#003B6D] ${
                        isActivePath(item.path) ? 'bg-blue-50 text-[#003B6D]' : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={mobileButtonRef}
            className="md:hidden p-2 rounded-lg hover:bg-[#004d8a] transition-colors z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed inset-y-0 right-0 w-64 bg-[#003B6D] transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden shadow-xl z-50 overflow-y-auto`}
      >
        <div className="p-4 space-y-4">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block py-2 hover:text-blue-200 transition-colors ${
                isActivePath(item.path) ? 'text-blue-200 font-semibold' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Supply Dropdown */}
          <div>
            <button
              className={`w-full flex items-center justify-between py-2 hover:text-blue-200 transition-colors ${
                isActivePath('/supply') ? 'text-blue-200 font-semibold' : ''
              }`}
              onClick={() => toggleMobileDropdown('supply')}
            >
              <span>SUPPLY</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  activeMobileDropdown === 'supply' ? 'rotate-180' : ''
                }`}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>
            <div
              className={`pl-4 space-y-2 overflow-hidden transition-all duration-300 ${
                activeMobileDropdown === 'supply' ? 'max-h-96 mt-2' : 'max-h-0'
              }`}
            >
              {supplyDropdownItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-2 text-sm hover:text-blue-200 transition-colors ${
                    isActivePath(item.path) ? 'text-blue-200 font-semibold' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex justify-between items-center">
                    <span>{item.label}</span>
                    {item.count && (
                      <span className="text-sm text-blue-200">{item.count}</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile More Dropdown */}
          <div>
            <button
              className={`w-full flex items-center justify-between py-2 hover:text-blue-200 transition-colors ${
                isActivePath('/contact') || isActivePath('/about')
                  ? 'text-blue-200 font-semibold'
                  : ''
              }`}
              onClick={() => toggleMobileDropdown('more')}
            >
              <span>MORE</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  activeMobileDropdown === 'more' ? 'rotate-180' : ''
                }`}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>
            <div
              className={`pl-4 space-y-2 overflow-hidden transition-all duration-300 ${
                activeMobileDropdown === 'more' ? 'max-h-96 mt-2' : 'max-h-0'
              }`}
            >
              {moreDropdownItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-2 text-sm hover:text-blue-200 transition-colors ${
                    isActivePath(item.path) ? 'text-blue-200 font-semibold' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Line */}
      <div className="absolute bottom-0 left-[100px] right-[100px] h-[4px] bg-gradient-to-r 
           from-transparent via-[#E63946] to-transparent"></div>
    </nav>
  );
} 
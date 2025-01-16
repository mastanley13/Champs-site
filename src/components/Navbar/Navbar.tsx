import { useState } from 'react';
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

  return (
    <nav className="bg-[#003B6D] text-white">
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
              <button
                className="flex items-center hover:text-blue-200 transition-colors"
                onMouseEnter={() => setIsSupplyOpen(true)}
                onMouseLeave={() => setIsSupplyOpen(false)}
              >
                SUPPLY
                <span className="ml-1">🐾</span>
              </button>
              {isSupplyOpen && (
                <div
                  className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50"
                  onMouseEnter={() => setIsSupplyOpen(true)}
                  onMouseLeave={() => setIsSupplyOpen(false)}
                >
                  {supplyDropdownItems.map((item) => (
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

            {/* More Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center hover:text-blue-200 transition-colors"
                onMouseEnter={() => setIsMoreOpen(true)}
                onMouseLeave={() => setIsMoreOpen(false)}
              >
                MORE
                <span className="ml-1">🐾</span>
              </button>
              {isMoreOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50"
                  onMouseEnter={() => setIsMoreOpen(true)}
                  onMouseLeave={() => setIsMoreOpen(false)}
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
    </nav>
  );
} 
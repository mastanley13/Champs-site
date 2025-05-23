import { ReactNode, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import newLogo from '../../assets/newlogowhite.png';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add LeadConnector Chat Widget
  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.src = 'https://widgets.leadconnectorhq.com/loader.js';
    script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
    script.setAttribute('data-widget-id', '67c8b642a2b4102824256fc5');
    
    // Append to the document body
    document.body.appendChild(script);
    
    // Clean up function to remove the script when component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const isHomePage = location.pathname === '/';
  
  // Function to determine which phone number to show based on current path
  const getPhoneNumber = () => {
    const path = location.pathname;
    
    if (path === '/training') {
      return '877-55-CHAMP';
    } else {
      // Default phone for daycare, boarding, grooming, supply
      return '888-856-0012';
    }
  };

  // Function to determine which email to show based on current path
  const getContactEmail = () => {
    const path = location.pathname;
    
    if (path === '/training') {
      return 'info@championpuppytraining.com';
    } else if (path === '/supply') {
      return 'info@championdogproducts.com';
    } else {
      // Default email for daycare, boarding, grooming
      return 'info@champsdoghouse.com';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 
          isHomePage ? 'bg-transparent' : 'bg-white'}
      `}>
        <Navbar />
      </div>

      <main className="flex-grow">
        {children}
      </main>

      {/* Red accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#005596] via-[#E63946] to-[#005596]"></div>

      <footer className="
        bg-gradient-to-b from-[#005596] to-[#1B2B4B] 
        text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/images/footer-pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <img 
                src={newLogo} 
                alt="Champs Logo" 
                className="h-12 object-contain" 
              />
              <p className="text-gray-300 leading-relaxed">
                Transforming dogs and enriching the lives of pet families through expert care and training.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  {/* Add Facebook Icon */}
                </a>
                {/* Add other social icons */}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/daycare" className="text-gray-300 hover:text-white transition-colors">
                    Daycare
                  </Link>
                </li>
                <li>
                  <Link to="/boarding" className="text-gray-300 hover:text-white transition-colors">
                    Boarding
                  </Link>
                </li>
                <li>
                  <Link to="/grooming" className="text-gray-300 hover:text-white transition-colors">
                    Grooming
                  </Link>
                </li>
                <li>
                  <Link to="/training" className="text-gray-300 hover:text-white transition-colors">
                    Training
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/daycare#faq" className="text-gray-300 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {getPhoneNumber()}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {getContactEmail()}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  1155 Rt. 73, Mt. Laurel, NJ 08054
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Champs Pet Services. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}; 
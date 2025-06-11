import { Link } from 'react-router-dom';
import newLogo from '../../assets/newlogowhite.png';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#005596] to-[#1B2B4B]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div className="text-white">
            <img src={newLogo} alt="Champion Dogs" className="h-16 mb-4" />
            <p className="text-sm text-white/80">
              Transforming dogs and enriching the lives of pet families through expert care and training
            </p>
          </div>

          {/* Services Column */}
          <div className="text-white">
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/daycare" className="hover:text-blue-200 transition-colors">Daycare</Link></li>
              <li><Link to="/boarding" className="hover:text-blue-200 transition-colors">Boarding</Link></li>
              <li><Link to="/grooming" className="hover:text-blue-200 transition-colors">Grooming</Link></li>
              <li><Link to="/training" className="hover:text-blue-200 transition-colors">Training</Link></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="text-white">
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-blue-200 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-200 transition-colors">Contact</Link></li>
              <li>
                <Link 
                  to="/daycare#faq"
                  onClick={(e) => {
                    // If we're already on the daycare page, handle the scroll manually
                    if (window.location.pathname === '/daycare') {
                      e.preventDefault();
                      const element = document.getElementById('faq');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }
                  }}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="text-white">
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:888-856-0012" className="hover:text-blue-200 transition-colors">
                  888-856-0012
                </a>
              </li>
              <li>
                <a href="mailto:info@champsdoghouse.com" className="hover:text-blue-200 transition-colors">
                  info@champsdoghouse.com
                </a>
              </li>
              <li>1155 Rt. 73, Mt. Laurel, NJ 08054</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-white/10 text-white">
          <p>© {new Date().getFullYear()} Champs Pet Services. All rights reserved.</p>
          <div className="mt-2 space-x-4 text-sm">
            <Link to="/privacy" className="hover:text-blue-200 transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms-and-conditions" className="hover:text-blue-200 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 
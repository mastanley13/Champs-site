import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Champs</h3>
              <p className="text-gray-300">
                Professional pet care services including daycare, boarding, grooming, and training.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/daycare" className="text-gray-300 hover:text-white">
                    Daycare Services
                  </Link>
                </li>
                <li>
                  <Link to="/boarding" className="text-gray-300 hover:text-white">
                    Boarding Services
                  </Link>
                </li>
                <li>
                  <Link to="/grooming" className="text-gray-300 hover:text-white">
                    Grooming Services
                  </Link>
                </li>
                <li>
                  <Link to="/training" className="text-gray-300 hover:text-white">
                    Training Programs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Email: info@champspetservices.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Pet Care Lane</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Champs Pet Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 
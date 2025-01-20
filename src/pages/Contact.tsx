import React from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';

export function ContactPage() {
  const locations = [
    {
      name: "Champ's Medford",
      services: "Daycare, Boarding, & Grooming",
      address: "163 Rt. 70",
      city: "Medford",
      state: "NJ",
      zip: "08055",
      hours: {
        weekday: "6:30am-6pm",
        weekend: "8:00am-5:00pm"
      }
    },
    {
      name: "Champ's Mt. Laurel",
      services: "Training, Grooming, & Supply",
      address: "1155 Rt. 73",
      city: "Mt. Laurel",
      state: "NJ",
      zip: "08054",
      hours: {
        weekday: "9am-5pm",
        weekend: "9am-5pm",
        note: "Monday - Saturday"
      }
    }
  ];

  return (
    <PageLayout 
      title="Contact Us"
      subtitle="We're here to help with all your pet care needs"
    >
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/images/contact-pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're here to help with all your dog care needs
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="sms:888-856-0012"
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 inline-flex items-center"
            >
              Text Us
              <span className="ml-2">→</span>
            </a>
            <a 
              href="mailto:info@champsdoghouse.com"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 inline-flex items-center"
            >
              Email Us
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Our Locations</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {locations.map((location) => (
              <div 
                key={location.name}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-2 text-blue-900">{location.name}</h3>
                <p className="text-blue-600 font-semibold mb-6">{location.services}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Address</h4>
                    <p className="text-gray-600">{location.address}</p>
                    <p className="text-gray-600">{location.city}, {location.state} {location.zip}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Hours</h4>
                    <div className="space-y-1">
                      <p className="text-gray-600">
                        <span className="font-medium">Monday-Friday:</span> {location.hours.weekday}
                      </p>
                      {location.hours.weekend && (
                        <p className="text-gray-600">
                          <span className="font-medium">Saturday/Sunday:</span> {location.hours.weekend}
                        </p>
                      )}
                      {location.hours.note && (
                        <p className="text-gray-500 text-sm italic">{location.hours.note}</p>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <a 
                      href={`https://maps.google.com/?q=${encodeURIComponent(
                        `${location.address}, ${location.city}, ${location.state} ${location.zip}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-900 text-white px-6 py-2 rounded-full text-center hover:bg-blue-800 transition-colors"
                    >
                      Get Directions
                    </a>
                    <a 
                      href="sms:888-856-0012"
                      className="border-2 border-blue-900 text-blue-900 px-6 py-2 rounded-full text-center hover:bg-blue-900 hover:text-white transition-colors"
                    >
                      Text Location
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Get In Touch</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="font-bold text-xl mb-2">Text Us</h3>
                <a href="sms:888-856-0012" className="text-blue-600 hover:text-blue-800">
                  888-856-0012
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✉️</span>
                </div>
                <h3 className="font-bold text-xl mb-2">Email Us</h3>
                <a href="mailto:info@champsdoghouse.com" className="text-blue-600 hover:text-blue-800">
                  info@champsdoghouse.com
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📅</span>
                </div>
                <h3 className="font-bold text-xl mb-2">Book Online</h3>
                <Link to="/booking" className="text-blue-600 hover:text-blue-800">
                  Schedule an Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-blue-900">Services</h3>
              <ul className="space-y-2">
                <li><Link to="/daycare" className="text-gray-600 hover:text-blue-900">Daycare</Link></li>
                <li><Link to="/boarding" className="text-gray-600 hover:text-blue-900">Boarding</Link></li>
                <li><Link to="/grooming" className="text-gray-600 hover:text-blue-900">Grooming</Link></li>
                <li><Link to="/training" className="text-gray-600 hover:text-blue-900">Training</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-blue-900">Shop</h3>
              <ul className="space-y-2">
                <li><Link to="/shop" className="text-gray-600 hover:text-blue-900">Champion Dog Products</Link></li>
                <li><Link to="/shop/new" className="text-gray-600 hover:text-blue-900">New Arrivals</Link></li>
                <li><Link to="/shop/best-sellers" className="text-gray-600 hover:text-blue-900">Best Sellers</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-blue-900">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/booking" className="text-gray-600 hover:text-blue-900">Book Appointment</Link></li>
                <li><Link to="/locations" className="text-gray-600 hover:text-blue-900">Locations</Link></li>
                <li><Link to="/faq" className="text-gray-600 hover:text-blue-900">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-blue-900">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-600 hover:text-blue-900">About Us</Link></li>
                <li><Link to="/careers" className="text-gray-600 hover:text-blue-900">Careers</Link></li>
                <li><Link to="/terms" className="text-gray-600 hover:text-blue-900">Terms & Conditions</Link></li>
                <li><Link to="/privacy" className="text-gray-600 hover:text-blue-900">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <footer className="bg-gray-50 py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} by Champ's Dog House. All rights reserved.</p>
        </div>
      </footer>
    </PageLayout>
  );
} 
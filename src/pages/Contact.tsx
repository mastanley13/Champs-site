import React from 'react';

export function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl mb-8">
            Get in touch with Champ's Dog House
          </p>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Locations */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                {/* Replace with actual location icon */}
                <svg className="w-full h-full text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Visit Us</h2>
              <a href="/locations" className="text-blue-600 hover:text-blue-800">
                Find a Location Near You
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                {/* Replace with actual phone icon */}
                <svg className="w-full h-full text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Call Us</h2>
              <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-800">
                Call Our Team
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                {/* Replace with actual email icon */}
                <svg className="w-full h-full text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Email Us</h2>
              <a href="mailto:contact@champsdoghouse.com" className="text-blue-600 hover:text-blue-800">
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/products" className="text-gray-600 hover:text-blue-900">Champion Dog Products</a></li>
                <li><a href="/terms" className="text-gray-600 hover:text-blue-900">Terms & Conditions</a></li>
                <li><a href="/careers" className="text-gray-600 hover:text-blue-900">Join the Champ's Team</a></li>
                <li><a href="/team" className="text-gray-600 hover:text-blue-900">Team Member Page</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="/daycare" className="text-gray-600 hover:text-blue-900">Daycare</a></li>
                <li><a href="/boarding" className="text-gray-600 hover:text-blue-900">Boarding</a></li>
                <li><a href="/grooming" className="text-gray-600 hover:text-blue-900">Grooming</a></li>
                <li><a href="/training" className="text-gray-600 hover:text-blue-900">Puppy Training</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-center text-gray-600">
          © 2019 by Champ's Dog House.
        </div>
      </footer>
    </div>
  );
} 
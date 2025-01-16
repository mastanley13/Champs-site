import React from 'react';
import { Link } from 'react-router-dom';

export function GroomingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Professional Dog Grooming Services</h1>
          <p className="text-xl mb-8">
            Keep your furry friend clean, healthy, and looking their best
          </p>
          <Link 
            to="/booking" 
            className="bg-white text-blue-900 px-8 py-3 rounded-lg text-xl font-semibold hover:bg-blue-50 transition-colors"
          >
            Book a Grooming Appointment
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Grooming Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Bath & Brush</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Shampoo & conditioning</li>
                <li>Blow dry & brush out</li>
                <li>Nail trimming</li>
                <li>Ear cleaning</li>
                <li>Anal gland expression</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Full Service Groom</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>All Bath & Brush services</li>
                <li>Breed-specific haircut</li>
                <li>Face trimming</li>
                <li>Paw pad trimming</li>
                <li>Sanitary trimming</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Additional Services</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>De-matting</li>
                <li>De-shedding treatment</li>
                <li>Flea treatments</li>
                <li>Special shampoos</li>
                <li>Teeth brushing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Grooming Services?</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <p>Experienced, professional groomers who love what they do</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <p>Clean, safe, and comfortable environment for your pet</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <p>Personalized attention to your dog's specific needs</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <p>High-quality products and equipment</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <p>Flexible scheduling options</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Schedule a Grooming Session?</h2>
          <div className="flex justify-center gap-4">
            <Link 
              to="/booking" 
              className="bg-white text-blue-900 px-6 py-3 rounded hover:bg-blue-50"
            >
              Book Now
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-6 py-3 rounded hover:bg-blue-800"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 
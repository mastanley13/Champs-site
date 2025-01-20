import React from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';

export function GroomingPage() {
  const groomingServices = [
    {
      title: "Bath & Brush",
      price: "Starting at $45",
      services: [
        "Luxury shampoo & conditioning",
        "Blow dry & brush out",
        "Nail trimming & filing",
        "Ear cleaning & plucking",
        "Anal gland expression",
        "Cologne & bandana"
      ],
      popular: false
    },
    {
      title: "Full Service Groom",
      price: "Starting at $65",
      services: [
        "All Bath & Brush services",
        "Breed-specific haircut",
        "Face trimming & styling",
        "Paw pad trimming",
        "Sanitary trimming",
        "Custom styling options"
      ],
      popular: true
    },
    {
      title: "Specialty Services",
      price: "Price varies",
      services: [
        "De-matting treatment",
        "De-shedding treatment",
        "Medicated baths",
        "Flea treatments",
        "Teeth brushing",
        "Specialty shampoos"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: "👨‍🎓",
      title: "Certified Groomers",
      description: "Our professional groomers are certified and experienced in all breed standards"
    },
    {
      icon: "🛁",
      title: "Premium Products",
      description: "We use high-quality, pet-safe grooming products for the best results"
    },
    {
      icon: "❤️",
      title: "Stress-Free Environment",
      description: "Calm and comfortable atmosphere for a positive grooming experience"
    },
    {
      icon: "⭐",
      title: "Custom Styling",
      description: "Personalized grooming plans tailored to your dog's needs and your preferences"
    }
  ];

  return (
    <PageLayout 
      title="Pet Grooming"
      subtitle={
        <>
          Expert grooming services to keep your dog looking, feeling, and smelling their absolute best
          <div className="mt-8">
            <Link 
              to="/grooming/book"
              className="bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-semibold 
                       hover:bg-blue-50 transition-all duration-300 shadow-lg 
                       hover:shadow-xl inline-flex items-center"
            >
              Book Appointment
              <span className="ml-2">→</span>
            </Link>
          </div>
        </>
      }
    >
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">The Champ's Difference</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="font-bold text-xl mb-2 text-blue-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Grooming Services</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {groomingServices.map((service) => (
              <div 
                key={service.title}
                className={`bg-white rounded-2xl shadow-lg p-8 ${
                  service.popular ? 'border-2 border-blue-300 relative' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-blue-900">{service.title}</h3>
                <p className="text-lg text-blue-900 font-semibold mb-6">{service.price}</p>
                <ul className="space-y-3">
                  {service.services.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/grooming/book"
                  className="mt-8 inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Book Now
                  <span className="ml-2">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">What to Expect</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-blue-900">1. Check-In</h3>
              <p className="text-gray-600">
                We'll review your grooming preferences and any special requirements for your pet.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-blue-900">2. Assessment</h3>
              <p className="text-gray-600">
                Our groomer will examine your dog's coat condition and discuss the best grooming approach.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-blue-900">3. Grooming Service</h3>
              <p className="text-gray-600">
                Your dog will receive their scheduled services in our calm, clean environment.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-blue-900">4. Final Touch-Ups</h3>
              <p className="text-gray-600">
                We'll ensure everything is perfect and add finishing touches like bandanas or bows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Book Your Dog's Spa Day?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/grooming/book"
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center"
            >
              Book Appointment
              <span className="ml-2">→</span>
            </Link>
            <Link 
              to="/grooming/services"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 inline-flex items-center justify-center"
            >
              View All Services
              <span className="ml-2">→</span>
            </Link>
          </div>
          <p className="mt-6 text-gray-300">
            Questions? Call us at (555) 123-4567
          </p>
        </div>
      </section>
    </PageLayout>
  );
} 
import React from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';

export function AboutPage() {
  const partnerships = [
    {
      name: "Pride Paws",
      description: "A local, south Jersey, non-profit that provides job training and transitional employment experience to individuals with developmental disabilities.",
      activities: [
        "Packaging our products",
        "Facilitating local training destinations",
        "Providing bandanas to grooming clients"
      ]
    }
  ];

  return (
    <PageLayout 
      title="About Us"
      subtitle="Dedicated to providing the best care for your pets since 2010"
    >
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/images/about-pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Keeping dogs out of the pound and in loving homes like yours
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-8 text-blue-900">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Champion Puppy Training was created with one thought in mind: Keeping dogs out of the pound 
              and in loving homes like yours. As our business grew, we understood that our Champion Puppy 
              Owners not only needed the process, they needed the product as well.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Champion Dog Products</h3>
            <p className="text-gray-700 mb-4">
              In 2021 we launched Champion Dog Products - where products and process come together for 
              lifetime results.
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Our Expertise</h3>
            <p className="text-gray-700 mb-4">
              Champion Puppy Training and Champion Dog Products was created by Pat Quinn. With over 17 
              years of experience, Pat is an industry leader and influencer.
            </p>
            <p className="text-gray-700">
              Our home office is based in the greater Philadelphia area. We train locally, nationally, 
              and supply products nation wide.
            </p>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Our Partnerships</h2>
          
          {partnerships.map((partner) => (
            <div 
              key={partner.name}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-900">{partner.name}</h3>
              <p className="text-gray-700 mb-6">{partner.description}</p>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold mb-4">Partnership Activities:</h4>
                <ul className="space-y-2">
                  {partner.activities.map((activity) => (
                    <li key={activity} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link 
              to="/training"
              className="group bg-gray-50 p-6 rounded-xl hover:bg-blue-50 transition-colors duration-300"
            >
              <h3 className="font-bold text-xl mb-3 text-blue-900">Training</h3>
              <p className="text-gray-600 mb-4">Professional dog training services for all ages and breeds</p>
              <span className="text-blue-600 group-hover:text-blue-800 inline-flex items-center">
                Learn More
                <span className="ml-2">→</span>
              </span>
            </Link>

            <Link 
              to="/grooming"
              className="group bg-gray-50 p-6 rounded-xl hover:bg-blue-50 transition-colors duration-300"
            >
              <h3 className="font-bold text-xl mb-3 text-blue-900">Grooming</h3>
              <p className="text-gray-600 mb-4">Expert grooming services for all breeds and coat types</p>
              <span className="text-blue-600 group-hover:text-blue-800 inline-flex items-center">
                Learn More
                <span className="ml-2">→</span>
              </span>
            </Link>

            <Link 
              to="/daycare"
              className="group bg-gray-50 p-6 rounded-xl hover:bg-blue-50 transition-colors duration-300"
            >
              <h3 className="font-bold text-xl mb-3 text-blue-900">Daycare</h3>
              <p className="text-gray-600 mb-4">Safe and engaging daycare services for your dog</p>
              <span className="text-blue-600 group-hover:text-blue-800 inline-flex items-center">
                Learn More
                <span className="ml-2">→</span>
              </span>
            </Link>

            <Link 
              to="/shop"
              className="group bg-gray-50 p-6 rounded-xl hover:bg-blue-50 transition-colors duration-300"
            >
              <h3 className="font-bold text-xl mb-3 text-blue-900">Products</h3>
              <p className="text-gray-600 mb-4">Quality products for training and enrichment</p>
              <span className="text-blue-600 group-hover:text-blue-800 inline-flex items-center">
                Shop Now
                <span className="ml-2">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center"
            >
              Contact Us
              <span className="ml-2">→</span>
            </Link>
            <Link 
              to="/locations"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 inline-flex items-center justify-center"
            >
              Find a Location
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 
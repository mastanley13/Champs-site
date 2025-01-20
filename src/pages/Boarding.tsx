import React from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';

export function BoardingPage() {
  const boardingFeatures = [
    {
      icon: "🏠",
      title: "Comfortable Suites",
      description: "Climate-controlled rooms with comfortable bedding and plenty of space"
    },
    {
      icon: "🎮",
      title: "Daily Activities",
      description: "Structured playtime and socialization with other dogs"
    },
    {
      icon: "📱",
      title: "Daily Updates",
      description: "Regular photos and updates about your dog's stay"
    },
    {
      icon: "👥",
      title: "24/7 Supervision",
      description: "Round-the-clock care from our trained staff"
    }
  ];

  const seasonalRates = [
    {
      season: "Standard Season",
      dates: "Labor Day - Memorial Day",
      rates: [
        { days: "Sunday - Thursday", price: "$63/night" },
        { days: "Friday - Saturday", price: "$65/night" }
      ]
    },
    {
      season: "Peak Season",
      dates: "Memorial Day - Labor Day",
      rates: [
        { days: "Sunday - Thursday", price: "$65/night" },
        { days: "Friday - Saturday", price: "$68/night" }
      ],
      popular: true
    }
  ];

  return (
    <PageLayout 
      title="Luxury Boarding"
      subtitle={
        <>
          A comfortable home away from home where your dog can relax, play, 
          and receive the care they deserve
          <div className="mt-8">
            <Link 
              to="/boarding/book"
              className="bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-semibold 
                       hover:bg-blue-50 transition-all duration-300 shadow-lg 
                       hover:shadow-xl inline-flex items-center"
            >
              Book Your Stay
              <span className="ml-2">→</span>
            </Link>
          </div>
        </>
      }
    >
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">The Boarding Experience</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {boardingFeatures.map((feature) => (
              <div key={feature.title} className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="font-bold text-xl mb-2 text-blue-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Boarding Requirements</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-blue-900 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-blue-900">Daycare Evaluation</h3>
                  <p className="text-gray-600">Available for regular daycare customers only. Dogs must be deemed "green" and complete either:</p>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Three days of daycare
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      One day of daycare plus a trial overnight
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-blue-900 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-blue-900">Food & Medications</h3>
                  <p className="text-gray-600">Please bring your dog's food individually bagged for each meal during their stay. Any medications should be clearly labeled with instructions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Boarding Rates</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {seasonalRates.map((season) => (
              <div 
                key={season.season}
                className={`bg-white rounded-2xl shadow-lg p-8 ${
                  season.popular ? 'border-2 border-blue-300 relative' : ''
                }`}
              >
                {season.popular && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    Current Season
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-blue-900">{season.season}</h3>
                <p className="text-gray-600 mb-6">{season.dates}</p>
                <div className="space-y-4">
                  {season.rates.map((rate) => (
                    <div key={rate.days} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-gray-700">{rate.days}</span>
                      <span className="font-bold text-blue-900">{rate.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Special Discounts</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-blue-900 font-semibold">Siblings receive 30% discount</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-blue-900 font-semibold">5% off stays of 6+ nights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Important Information</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Drop-off & Pick-up Times</h3>
              <div className="space-y-4">
                <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                  <span className="text-blue-900 font-semibold">Drop-off:</span>
                  <span className="ml-4">Between 6:30am - 11am</span>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-red-700">Pick-ups after 11am are subject to a $25 late fee</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Payment Policy</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>$100 deposit required for all boarding stays</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>One-night stays require full payment at reservation</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>All other stays are paid in full at drop-off</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Book Your Dog's Stay?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/boarding/book"
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center"
            >
              Book Now
              <span className="ml-2">→</span>
            </Link>
            <Link 
              to="/boarding/faq"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 inline-flex items-center justify-center"
            >
              View FAQ
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
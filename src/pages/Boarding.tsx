import React from 'react';
import { Link } from 'react-router-dom';

export function BoardingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Dog Boarding Services</h1>
          <p className="text-xl mb-8">
            A home away from home for your Champion
          </p>
          <Link 
            to="/booking" 
            className="bg-white text-blue-900 px-8 py-3 rounded-lg text-xl font-semibold hover:bg-blue-50 transition-colors"
          >
            Book Your Stay
          </Link>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Boarding Requirements</h2>
          <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p>Available for regular daycare customers only</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p>Dogs must be deemed "green" and complete either:
                  <ul className="pl-6 mt-2">
                    <li>- Three days of daycare OR</li>
                    <li>- One day of daycare plus a trial overnight</li>
                  </ul>
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <p>Please bring your Champion's food individually bagged for meals during their stay</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Boarding Rates</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Labor Day - Memorial Day</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Sunday - Thursday</span>
                  <span className="font-semibold">$63/night</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday - Saturday</span>
                  <span className="font-semibold">$65/night</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Memorial Day - Labor Day</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Sunday - Thursday</span>
                  <span className="font-semibold">$65/night</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday - Saturday</span>
                  <span className="font-semibold">$68/night</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center space-y-2">
            <p className="text-lg">Siblings receive 30% discount</p>
            <p className="text-lg">5% discount for stays of 6 nights or more</p>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Drop-off & Pick-up</h3>
              <ul className="space-y-2">
                <li>Drop-off hours: Between 6:30am - 11am</li>
                <li className="text-red-600">Pick-ups after 11am are subject to a $25 fee</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Deposit & Payment</h3>
              <ul className="space-y-2">
                <li>$100 deposit required for all boarding stays</li>
                <li>One-night stays require full payment at reservation</li>
                <li>All other stays are paid in full at drop-off</li>
              </ul>
            </div>

            <div className="text-center mt-6">
              <Link 
                to="/terms" 
                className="text-blue-600 hover:text-blue-800 underline"
              >
                View complete terms and conditions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
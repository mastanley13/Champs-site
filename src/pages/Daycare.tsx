import React from 'react';
import { Link } from 'react-router-dom';

export function DaycarePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Dog Daycare Services</h1>
          <p className="text-xl mb-8">
            Where tired dogs become good dogs
          </p>
          <Link 
            to="/booking" 
            className="bg-white text-blue-900 px-8 py-3 rounded-lg text-xl font-semibold hover:bg-blue-50 transition-colors"
          >
            Reserve Your Spot Today
          </Link>
        </div>
      </section>

      {/* Hours & Pricing */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Hours of Operation</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">Monday - Friday:</span>
                  <span>6:30am - 6:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Saturday & Sunday:</span>
                  <span>8:00am - 5:00pm</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Pricing</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Single Day</span>
                  <span className="font-semibold">$46</span>
                </div>
                <div className="flex justify-between">
                  <span>3 Day Package</span>
                  <span className="font-semibold">$130</span>
                </div>
                <div className="flex justify-between">
                  <span>5 Day Package</span>
                  <span className="font-semibold">$210</span>
                </div>
                <div className="flex justify-between">
                  <span>10 Day Package</span>
                  <span className="font-semibold">$410</span>
                </div>
                <div className="flex justify-between">
                  <span>Weekend Package</span>
                  <span className="font-semibold">$80</span>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  * Siblings receive 30% discount
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements & Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Important Information</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Evaluation Process</h3>
              <p>
                All dogs that come to Champ's go through a first day process which includes 
                an evaluation day. During the evaluation we are looking for overall temperament, 
                energy, and recall.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Required Vaccinations</h3>
              <p>
                All dogs must be fully vaccinated with:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Rabies</li>
                <li>Bordatella (every six months)</li>
                <li>Canine Influenza</li>
                <li>DHHP</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Evaluation Schedule</h3>
              <p>
                Evaluation Days are done Monday - Thursday by appointment at:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>9:30am</li>
                <li>10:30am</li>
                <li>11:30am</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">What to Expect</h3>
              <ul className="list-disc pl-6">
                <li>Dogs take rest breaks throughout the day</li>
                <li>Play yards are grouped by disposition and size</li>
                <li>Supervised by trained staff at all times</li>
                <li>Ideal for dogs who can easily run and play</li>
                <li>Crate training helpful for rest periods</li>
              </ul>
            </div>

            <div className="bg-red-50 p-4 rounded">
              <p className="text-red-700">
                Champ's is not ideal for dogs with aggression, elopement risk, 
                behavior problems, or a bite history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join the Pack?</h2>
          <div className="flex justify-center gap-4">
            <Link 
              to="/booking" 
              className="bg-white text-blue-900 px-6 py-3 rounded hover:bg-blue-50"
            >
              Schedule Evaluation
            </Link>
            <Link 
              to="/training" 
              className="border-2 border-white text-white px-6 py-3 rounded hover:bg-blue-800"
            >
              Learn About Training
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 
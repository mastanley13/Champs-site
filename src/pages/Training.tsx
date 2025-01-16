import React from 'react';

export function TrainingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Puppy Training</h1>
          <p className="text-xl mb-8">
            Expert training for your champion companion
          </p>
        </div>
      </section>

      {/* Program Coverage */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Program Covers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="mr-2">✓</span> Nipping
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span> Jumping
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span> Chewing
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span> Potty Training
              </li>
            </ul>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="mr-2">✓</span> Leash Walking
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span> Recall
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span> Obedience
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span> Training Around Distractions
              </li>
            </ul>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="mr-2">✓</span> Behavioral Modification
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span> Your Unique Concerns
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span> So Much More
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* In-Home Boot Camp */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">In-Home Boot Camp</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="mr-2">•</span> 4 x 1 Hour In-Home Sessions
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> 2 Weekly Scheduled Check-in Calls
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> Unlimited Phone Support
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> 21 Day Online Course
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> Success Survey
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> Puppy Playbook
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> Champion Stances
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> Jr. Puppy Trainer Checklist
                </li>
                <li className="flex items-center font-bold">
                  <span className="mr-2">•</span> Guaranteed RESULTS
                </li>
              </ul>
            </div>

            {/* 1:1 Facility Boot Camp */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">1:1 Facility Boot Camp</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="mr-2">•</span> 6 x 1 Hour Sessions at Facility
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> 1 Weekly Scheduled Check-in Calls
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> Unlimited Phone Support
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> 21 Day Online Course
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> Success Survey
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> Puppy Playbook
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> Champion Stances
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> Jr. Puppy Trainer Checklist
                </li>
                <li className="flex items-center font-bold">
                  <span className="mr-2">•</span> Guaranteed RESULTS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Get Promos and Pricing</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="First Name" className="p-3 border rounded" />
              <input type="text" placeholder="Last Name" className="p-3 border rounded" />
              <input type="email" placeholder="Email" className="p-3 border rounded" />
              <input type="tel" placeholder="Phone" className="p-3 border rounded" />
              <input type="text" placeholder="Street Address" className="p-3 border rounded" />
              <input type="text" placeholder="City" className="p-3 border rounded" />
              <input type="text" placeholder="State/Province" className="p-3 border rounded" />
              <input type="text" placeholder="Postal/Zip Code" className="p-3 border rounded" />
              <input type="text" placeholder="Dog Name" className="p-3 border rounded" />
              <input type="text" placeholder="Dog Age" className="p-3 border rounded" />
              <input type="text" placeholder="Dog Breed" className="p-3 border rounded" />
            </div>
            <textarea placeholder="Goals/Issues" className="w-full p-3 border rounded h-32"></textarea>
            <button type="submit" className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
} 
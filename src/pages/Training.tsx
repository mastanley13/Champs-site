import React from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';

export function TrainingPage() {
  const trainingTopics = [
    { id: 1, name: "Nipping", icon: "🦷" },
    { id: 2, name: "Jumping", icon: "⬆️" },
    { id: 3, name: "Chewing", icon: "🦴" },
    { id: 4, name: "Potty Training", icon: "🏠" },
    { id: 5, name: "Leash Walking", icon: "🦮" },
    { id: 6, name: "Recall", icon: "📞" },
    { id: 7, name: "Obedience", icon: "✅" },
    { id: 8, name: "Training Around Distractions", icon: "🎯" },
    { id: 9, name: "Behavioral Modification", icon: "🔄" },
    { id: 10, name: "Your Unique Concerns", icon: "💡" }
  ];

  const programs = [
    {
      title: "In-Home Boot Camp",
      features: [
        "4 x 1 Hour In-Home Sessions",
        "2 Weekly Scheduled Check-in Calls",
        "Unlimited Phone Support",
        "21 Day Online Course",
        "Success Survey",
        "Puppy Playbook",
        "Champion Stances",
        "Jr. Puppy Trainer Checklist"
      ],
      highlight: "Perfect for busy families",
      popular: true
    },
    {
      title: "1:1 Facility Boot Camp",
      features: [
        "6 x 1 Hour Sessions at Facility",
        "1 Weekly Scheduled Check-in Call",
        "Unlimited Phone Support",
        "21 Day Online Course",
        "Success Survey",
        "Puppy Playbook",
        "Champion Stances",
        "Jr. Puppy Trainer Checklist"
      ],
      highlight: "Ideal for focused training",
      popular: false
    }
  ];

  return (
    <PageLayout 
      title="Dog Training"
      subtitle={
        <>
          Over 20 years of experience helping families create well-behaved, happy puppies
          <div className="mt-8">
            <Link 
              to="/training/consultation"
              className="bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-semibold 
                       hover:bg-blue-50 transition-all duration-300 shadow-lg 
                       hover:shadow-xl inline-flex items-center"
            >
              Schedule Free Consultation
              <span className="ml-2">→</span>
            </Link>
          </div>
        </>
      }
    >
      {/* Training Topics Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">What We Cover</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {trainingTopics.map((topic) => (
              <div 
                key={topic.id}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors duration-300"
              >
                <span className="text-3xl mb-3 block">{topic.icon}</span>
                <h3 className="font-semibold text-blue-900">{topic.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Training Programs</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {programs.map((program) => (
              <div 
                key={program.title}
                className={`bg-white rounded-2xl shadow-lg p-8 ${
                  program.popular ? 'border-2 border-blue-300 relative' : ''
                }`}
              >
                {program.popular && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-blue-900">{program.title}</h3>
                <p className="text-blue-600 mb-6">{program.highlight}</p>
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                  <li className="flex items-start font-bold text-blue-900">
                    <span className="text-green-500 mr-2">✓</span>
                    Guaranteed RESULTS
                  </li>
                </ul>
                <Link
                  to={`/training/${program.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Learn More
                  <span className="ml-2">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8 text-blue-900">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 mb-8">
            I've been training puppies in busy homes like yours for over 20 years. Our extensive, 
            customer service oriented program has been helping families stop unwanted behaviors while 
            channeling their puppy's natural drives in a useful manner creating rapid results that last a lifetime.
          </p>
          <div className="bg-blue-50 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Ongoing Support</h3>
            <p className="text-gray-600">
              Our experienced trainers are available through our live text feature to help with any 
              questions you may have during your training journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-900">Get Started Today</h2>
          <p className="text-center text-gray-600 mb-12">
            Fill out this form to receive program details and special pricing
          </p>
          <form className="space-y-6 bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">First Name</label>
                <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Last Name</label>
                <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <input type="tel" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none transition-all" />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Dog Information</label>
              <div className="grid md:grid-cols-3 gap-4">
                <input type="text" placeholder="Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none transition-all" />
                <input type="text" placeholder="Age" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none transition-all" />
                <input type="text" placeholder="Breed" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none transition-all" />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Training Goals/Issues</label>
              <textarea 
                className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none transition-all"
                placeholder="Tell us about your training goals and any specific concerns..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-900 text-white py-4 rounded-lg hover:bg-blue-800 transition-colors font-semibold text-lg"
            >
              Get Program Details & Pricing
            </button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
} 
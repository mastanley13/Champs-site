import { Link } from 'react-router-dom';
import { useState } from 'react';

export function DaycarePage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const scrollToFaq = (e: React.MouseEvent) => {
    e.preventDefault();
    const faqSection = document.getElementById('faq');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/678fb2275c784c2e599cfcec.png",
      title: "Supervised Play",
      description: "Constant monitoring by trained staff in size-appropriate play groups"
    },
    {
      icon: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67862db9b6255b66641e0cbd.jpeg",
      title: "Structured Activities",
      description: "Engaging activities and games throughout the day"
    },
    {
      icon: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67862db9b6ea2b663c22e432.jpeg",
      title: "Rest Periods",
      description: "Scheduled quiet time for recharging and relaxation"
    },
    {
      icon: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67863246b6255b2efb1e11dd.jpeg",
      title: "Daily Report Cards",
      description: "Detailed updates on your dog's activities and behavior"
    }
  ];

  const packages = [
    {
      name: "Single Day",
      price: "$46",
      details: "Perfect for occasional visits"
    },
    {
      name: "3 Day Package",
      price: "$130",
      details: "Save $8 on three days",
      popular: true
    },
    {
      name: "5 Day Package",
      price: "$210",
      details: "Most popular weekday option"
    },
    {
      name: "10 Day Package",
      price: "$410",
      details: "Best value for regular visitors"
    },
    {
      name: "Weekend Package",
      price: "$80",
      details: "Saturday & Sunday special"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Blue Background */}
        <div className="absolute inset-0 bg-[#003B6D] w-full md:w-1/2"></div>
        
        {/* Image Container */}
        <div className="absolute inset-0 ml-auto w-full md:w-1/2">
          <img
            src="https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67862db91842f25e6ae4c50f.jpeg"
            alt="Dog Daycare"
            className="h-full w-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#003B6D] via-[#003B6D]/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="max-w-4xl md:ml-[-100px]">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
              Dog Daycare
              <br />
              <span className="text-[#8E9BDB] block mt-2">Safe & Fun</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-2xl leading-relaxed">
              A safe and fun environment for your furry friend to play, socialize, and thrive
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="#faq"
                onClick={scrollToFaq}
                className="group inline-flex items-center text-white hover:text-[#8E9BDB] 
                           transition-all duration-300"
              >
                <span className="w-12 h-12 rounded-full border-2 border-white 
                               flex items-center justify-center mr-4
                               group-hover:border-[#8E9BDB] group-hover:bg-white/10
                               transition-all duration-300">
                  ?
                </span>
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#003B6D]">The Champ's Experience</h2>
            <div className="w-24 h-1 bg-[#E63946] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto">
            {features.map((feature) => (
              <div 
                key={feature.title} 
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-bold text-2xl mb-3 text-[#003B6D]">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed px-4">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Hours Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-8 text-blue-900">Hours of Operation</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Weekdays</h3>
                  <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">6:30am - 6:00pm</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Weekends</h3>
                  <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                    <span>Saturday & Sunday</span>
                    <span className="font-semibold">8:00am - 5:00pm</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-8 text-blue-900">Pricing</h2>
              <div className="space-y-4">
                {packages.map((pkg) => (
                  <div 
                    key={pkg.name}
                    className={`p-4 rounded-lg ${pkg.popular ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50'}`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-semibold text-lg">{pkg.name}</span>
                        <p className="text-sm text-gray-600">{pkg.details}</p>
                      </div>
                      <span className="font-bold text-xl text-blue-900">{pkg.price}</span>
                    </div>
                  </div>
                ))}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-900 font-semibold">
                    Siblings receive 30% discount on all packages
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Getting Started</h2>
          
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Evaluation Process</h3>
              <p className="text-gray-700 mb-4">
                All new dogs complete an evaluation day to ensure they'll thrive in our daycare environment. 
                We assess temperament, energy levels, and social skills.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Evaluation Times Available:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>9:30am</li>
                  <li>10:30am</li>
                  <li>11:30am</li>
                </ul>
                <p className="text-sm text-gray-600 mt-2">Monday - Thursday by appointment only</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Required Vaccinations</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {['Rabies', 'Bordatella (every 6 months)', 'Canine Influenza', 'DHHP'].map((vaccine) => (
                  <div key={vaccine} className="bg-white p-4 rounded-lg flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {vaccine}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-red-700">Important Notice</h3>
              <p className="text-red-700">
                Our daycare program may not be suitable for dogs with aggression, elopement risk, 
                or a history of behavioral issues. We recommend our training programs for these cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-[#F5F5F5] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What is the evaluation process?",
                answer: "All dogs go through a first day evaluation process where we assess overall temperament, energy levels, and recall ability. Evaluations are done Monday - Thursday by appointment at 9:30am, 10:30am, and 11:30am."
              },
              {
                question: "What vaccinations are required?",
                answer: "All dogs must be fully vaccinated with Rabies, Bordatella (every six months), Canine Influenza, and DHHP before attending daycare."
              },
              {
                question: "How are play groups organized?",
                answer: "Our play yards are grouped by disposition and size, and are supervised by trained staff at all times. Dogs take scheduled rest breaks throughout the day."
              },
              {
                question: "Is crate training required?",
                answer: "While not required, crate training is helpful as it assists with the rest process during the day. All dogs take rest breaks throughout their stay."
              },
              {
                question: "What if my dog has behavioral issues?",
                answer: "Our facility is not ideal for dogs with aggression, elopement risk, behavior problems, or a bite history. However, we do offer comprehensive training programs for puppies and adolescent dogs that can help address these issues."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                >
                  <h3 className="font-bold text-xl text-blue-900">{faq.question}</h3>
                  <span className={`transform transition-transform duration-200 ${
                    expandedFaq === index ? 'rotate-180' : ''
                  }`}>
                    ▼
                  </span>
                </button>
                <div 
                  className={`px-6 py-4 text-gray-700 transition-all duration-200 ${
                    expandedFaq === index ? 'block' : 'hidden'
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 
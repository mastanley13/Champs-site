import { Link } from 'react-router-dom';
import { ROUTES } from '../config/routes';
import { useNavigate } from 'react-router-dom';

export function BoardingPage() {
  const navigate = useNavigate();

  const handleFaqClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/daycare');
    // Wait for navigation to complete before scrolling
    setTimeout(() => {
      const faqSection = document.getElementById('faq');
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const boardingFeatures = [
    {
      icon: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67e3bc411870f428093de236.jpeg",
      title: "Comfortable Suites",
      description: "Climate-controlled rooms with comfortable bedding and plenty of space"
    },
    {
      icon: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67862db9b6255b66641e0cbd.jpeg",
      title: "Daily Activities",
      description: "Structured playtime and socialization with other dogs"
    },
    {
      icon: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67862dba5418db493390e257.jpeg",
      title: "Personal Care Updates",
      description: "Our team provides detailed updates on your dog's activities, behavior, and well-being throughout their stay"
    },
    {
      icon: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67e3bd83625f83f733d1a84d.png",
      title: "Dedicated Professionals",
      description: "Our expertly trained team closely monitors your dog's daily activities, ensuring their comfort and safety every step of the way"
    }
  ];

  const seasonalRates = [
    {
      season: "Standard Season",
      dates: "Labor Day - Memorial Day",
      rates: [
        { days: "Sunday - Thursday", price: "$63/night" },
        { days: "Friday - Saturday", price: "$65/night" }
      ],
      popular: true
    },
    {
      season: "Peak Season",
      dates: "Memorial Day - Labor Day",
      rates: [
        { days: "Sunday - Thursday", price: "$65/night" },
        { days: "Friday - Saturday", price: "$68/night" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Blue Background */}
        <div className="absolute inset-0 bg-[#005596] w-full md:w-1/2"></div>
        
        {/* Image Container */}
        <div className="absolute inset-0 ml-auto w-full md:w-1/2">
          <img
            src="https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67862db9b6ea2b5fb322e433.jpeg"
            alt="Luxury Dog Boarding"
            className="h-full w-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#005596] via-[#005596]/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="max-w-4xl md:ml-[-100px]">
            <h1 className="hero-heading text-6xl md:text-7xl lg:text-8xl mb-6 text-white leading-tight">
              LUXURY BOARDING
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-2xl leading-relaxed">
              Comfort, care, and play - everything your dog needs while you're away.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="https://calendly.com/champsdoghouse/daycare-evaluation"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#E63946] text-white text-lg font-bold rounded-lg hover:bg-[#E63946]/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book Your Stay
              </Link>
              <Link 
                to="/daycare#faq"
                onClick={handleFaqClick}
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

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-anton text-4xl mb-6 text-[#003B6D] uppercase tracking-normal drop-shadow-sm">
              The Champion Boarding Experience
            </h2>
            <p className="text-xl text-gray-600">
              We are an all inclusive boarding facility meaning
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto">
            {boardingFeatures.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center">
                <div className={`w-full mb-6 rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 ${
                  feature.title === "Dedicated Professionals" ? "aspect-square bg-[#005596]" : "aspect-square"
                }`}>
                  {typeof feature.icon === 'string' && feature.icon.startsWith('http') ? (
                    <img 
                      src={feature.icon} 
                      alt={feature.title} 
                      className={`w-full h-full ${
                        feature.title === "Dedicated Professionals" ? "object-contain p-4" : "object-cover"
                      } hover:scale-110 transition-transform duration-500`}
                    />
                  ) : (
                    <span className="text-4xl flex items-center justify-center h-full">{feature.icon}</span>
                  )}
                </div>
                <h3 className="font-anton text-xl mb-3 text-[#003B6D] uppercase tracking-normal">{feature.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-anton text-4xl text-center mb-12 text-[#003B6D] uppercase tracking-normal drop-shadow-sm">Boarding Requirements</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-blue-900 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-anton text-xl mb-2 text-[#003B6D] uppercase tracking-normal">Daycare Evaluation</h3>
                  <p className="text-gray-600">Available for regular daycare customers only. Dogs must be deemed "green" and complete:</p>
                  <ul className="mt-2 space-y-2 text-gray-600">
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
                  <h3 className="font-anton text-xl mb-2 text-[#003B6D] uppercase tracking-normal">Food & Medications</h3>
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
          <h2 className="font-anton text-4xl text-center mb-4 text-[#003B6D] uppercase tracking-normal drop-shadow-sm">Boarding Rates</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our all-inclusive pricing covers everything—feeding, medication, and playtime with your pup—at no extra charge.
          </p>
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
                <h3 className="font-anton text-2xl mb-2 text-[#003B6D] uppercase tracking-normal">{season.season}</h3>
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

          <div className="mt-8 max-w-4xl mx-auto space-y-6">
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <h3 className="font-anton text-xl mb-4 text-[#003B6D] uppercase tracking-normal">Special Discounts</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-blue-900 font-semibold">Siblings receive 30% discount</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-blue-900 font-semibold">5% off stays of 6+ nights</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50/50 rounded-xl p-6 text-center">
              <p className="text-blue-900 font-semibold">
                Want to treat your pup during their stay? Ask for our additional services like pup cups, treats, and treat filled kongs.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6">
              <p className="text-yellow-800 font-semibold text-center">
                Peak holidays (Spring Break, Thanksgiving, and Christmas) are subject to a $5 charge per night
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-anton text-4xl text-center mb-12 text-[#003B6D] uppercase tracking-normal drop-shadow-sm">Important Information</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="font-anton text-xl mb-4 text-[#003B6D] uppercase tracking-normal">Drop-off & Pick-up Times</h3>
              <div className="space-y-4">
                <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                  <span className="text-blue-900 font-semibold">Drop-off:</span>
                  <span className="ml-4">Between 6:30am - 11am</span>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-900">Pick-ups after 11am will be charged for a day of daycare at a discounted rate of $25</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="font-anton text-xl mb-4 text-[#003B6D] uppercase tracking-normal">Payment Policy</h3>
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
      <section className="py-24 bg-[#005596] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-anton text-4xl font-bold mb-8">Ready to Book Your Dog's Stay?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Give your furry friend the home away from home they deserve. Book now to secure their spot.
          </p>
          <a
            href={ROUTES.CUSTOMER_PORTAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-[#005596] px-8 py-4 rounded-full 
                     font-semibold hover:bg-[#8E9BDB] hover:text-white transition-all duration-300
                     shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Book Now
            <span className="ml-2">→</span>
          </a>
          <p className="mt-8 text-lg">
            Questions? Call us at <span className="font-semibold">(888) 856-0012</span>
          </p>
        </div>
      </section>
    </div>
  );
} 
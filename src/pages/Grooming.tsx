import { Link } from 'react-router-dom';
import { ROUTES } from '../config/routes';

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

  const groomingFeatures = [
    {
      icon: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67862db9b6255b5c671e0cc0.jpeg",
      title: "Certified Groomers",
      description: "Our professional groomers are certified and experienced in all breeds"
    },
    {
      icon: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67862dba5418db493390e257.jpeg",
      title: "Breed-Specific Cuts",
      description: "Expert grooming tailored to your dog's breed standards"
    },
    {
      icon: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67862db91842f22ae3e4c511.jpeg",
      title: "Spa Treatments",
      description: "Relaxing baths, nail care, and skin treatments for your pet"
    },
    {
      icon: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67862db9b6255b66641e0cbd.jpeg",
      title: "Custom Styling",
      description: "Personalized grooming styles to match your preferences"
    }
  ];

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Blue Background */}
        <div className="absolute inset-0 bg-[#003B6D] w-full md:w-1/2"></div>
        
        {/* Image Container */}
        <div className="absolute inset-0 ml-auto w-full md:w-1/2">
          <img
            src="https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67862dba1842f2282be4c512.jpeg"
            alt="Pet Grooming"
            className="h-full w-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#003B6D] via-[#003B6D]/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="max-w-4xl md:ml-[-100px]">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
              Pet
              <br />
              <span className="text-[#8E9BDB] block mt-2">Grooming</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-2xl leading-relaxed">
              Expert grooming services to keep your dog looking, feeling, and smelling their absolute best
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href={ROUTES.CUSTOMER_PORTAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#003B6D] px-8 py-4 rounded-full 
                         font-semibold hover:bg-[#8E9BDB] hover:text-white transition-all duration-300
                         shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book Appointment
              </a>
              <Link 
                to="#services"
                onClick={scrollToServices}
                className="group inline-flex items-center text-white hover:text-[#8E9BDB] 
                           transition-all duration-300"
              >
                <span className="w-12 h-12 rounded-full border-2 border-white 
                               flex items-center justify-center mr-4
                               group-hover:border-[#8E9BDB] group-hover:bg-white/10
                               transition-all duration-300">
                  ✨
                </span>
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#003B6D]">
            The Grooming Experience
          </h2>
          <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto">
            {groomingFeatures.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center">
                <div className="w-full aspect-square mb-6 rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
                  {typeof feature.icon === 'string' && feature.icon.startsWith('http') ? (
                    <img 
                      src={feature.icon} 
                      alt={feature.title} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <span className="text-4xl flex items-center justify-center h-full">{feature.icon}</span>
                  )}
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#003B6D]">{feature.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#003B6D]">Our Grooming Services</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {groomingServices.map((service) => (
              <div 
                key={service.title}
                className={`bg-white rounded-2xl shadow-lg p-8 ${
                  service.popular ? 'border-2 border-[#8E9BDB] relative' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-[#003B6D] text-white px-3 py-1 rounded-full text-sm">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-[#003B6D]">{service.title}</h3>
                <p className="text-lg text-[#003B6D] font-semibold mb-6">{service.price}</p>
                <ul className="space-y-3">
                  {service.services.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={ROUTES.CUSTOMER_PORTAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center text-[#003B6D] hover:text-[#8E9BDB] font-semibold transition-all duration-300"
                >
                  Book Now
                  <span className="ml-2">→</span>
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600">
              Questions? Text us at <span className="font-semibold">888-856-0012</span>
            </p>
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
      <section className="py-24 bg-[#003B6D] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Book Your Dog's Spa Day?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Give your furry friend the pampering they deserve. Our expert groomers are ready to make them look and feel their best.
          </p>
          <a
            href={ROUTES.CUSTOMER_PORTAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-[#003B6D] px-8 py-4 rounded-full 
                     font-semibold hover:bg-[#8E9BDB] hover:text-white transition-all duration-300
                     shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Book Appointment
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
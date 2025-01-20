import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const COLORS = {
  blue: {
    primary: '#3B4B96',
    light: '#8E9BDB',
    dark: '#2A3875'
  },
  red: {
    primary: '#E63946',  // Adjust this red to match your old site
    light: '#FF4D5E',
    dark: '#D32F3D'
  }
} as const;

export function HomePage() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
  }, []);

  const services = [
    {
      title: "Dog Training",
      description: "Transform your dog's behavior with our proven methods",
      icon: "/images/services/training-icon.svg",
      path: "/training",
      features: ["Behavior Modification", "Puppy Training", "Advanced Commands"]
    },
    {
      title: "Grooming",
      description: "Premium grooming services tailored to your pet",
      icon: "/images/services/grooming-icon.svg",
      path: "/grooming",
      features: ["Breed-Specific Cuts", "Spa Treatments", "Health Checks"]
    },
    {
      title: "Daycare",
      description: "Enriching daycare experience for social development",
      icon: "/images/services/daycare-icon.svg",
      path: "/daycare",
      features: ["Supervised Play", "Social Integration", "Daily Activities"]
    },
    {
      title: "Boarding",
      description: "Luxury boarding in a home-like environment",
      icon: "/images/services/boarding-icon.svg",
      path: "/boarding",
      features: ["24/7 Care", "Comfortable Suites", "Daily Updates"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#3B4B96]">
        <div ref={parallaxRef} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-radial from-[#3B4B96] via-[#3B4B96] to-[#2A3875]"></div>
          <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-5"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-7xl md:text-8xl font-bold mb-8 text-white leading-none animate-float">
              Champion Dogs,
              <br />
              <span className="text-[#8E9BDB] block mt-2">Happy Homes</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience the transformation as we turn your beloved pet into a 
              well-behaved family champion.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/training"
                className="group relative bg-white text-[#3B4B96] px-10 py-4 rounded-full 
                         font-semibold overflow-hidden"
              >
                <span className="relative z-10">Begin Your Journey</span>
                {/* Shine effect */}
                <div className="absolute inset-0 w-[200%] translate-x-[-100%] 
                                group-hover:translate-x-[50%] transition-transform duration-1000
                                bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              </Link>
              <button className="group flex items-center text-white">
                <span className="w-12 h-12 rounded-full border-2 border-white 
                               flex items-center justify-center mr-4
                               animate-pulse bg-[#E63946]/20">
                  ▶
                </span>
                <span className="group-hover:text-[#E63946] transition-colors duration-300">
                  Watch Our Story
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg 
            className="w-full h-24" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            style={{ transform: 'rotate(180deg)' }}
          >
            {/* Base white waves */}
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-white animate-wave"
            />
            
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-white/20 animate-wave-slow"
            />

            {/* Gradient-width red stroke */}
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3"
              fill="none"
              stroke="url(#redStrokeGradient)"
              strokeWidth="5"
              className="animate-wave"
              vectorEffect="non-scaling-stroke"
            />

            {/* Define gradient for stroke width */}
            <defs>
              <linearGradient id="redStrokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E63946" stopOpacity="0" />
                <stop offset="50%" stopColor="#E63946" stopOpacity="1" />
                <stop offset="100%" stopColor="#E63946" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white relative slide-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 text-[#3B4B96]">
              Premium Pet Services
            </h2>
            <div className="w-24 h-1 bg-[#E63946] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of services designed to bring out the 
              best in your furry family member.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.path}
                className="group bg-white rounded-2xl p-8 
                         transform transition-all duration-300 ease-in-out
                         hover:scale-105 hover:shadow-xl
                         border border-gray-100 relative overflow-hidden"
              >
                {/* Red line that slides in from top */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#E63946] 
                                transform -translate-y-full group-hover:translate-y-0 
                                transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center 
                                 group-hover:bg-blue-100 transition-colors duration-300">
                      <img src={service.icon} alt={service.title} className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-500">
                        <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                    Explore Service
                    <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6 text-[#3B4B96]">Our Approach</h2>
              <div className="w-24 h-1 bg-[#E63946] mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology that delivers consistent results through our 
                structured training process.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  step: "01",
                  title: "Assessment",
                  description: "Comprehensive evaluation of your dog's behavior and needs",
                  accent: COLORS.red.primary
                },
                {
                  step: "02",
                  title: "Custom Plan",
                  description: "Tailored training program designed for your specific goals",
                  accent: COLORS.blue.primary
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Expert guidance and support throughout the journey",
                  accent: COLORS.red.primary
                }
              ].map((phase) => (
                <div key={phase.step} className="relative group">
                  <div className={`text-8xl font-bold opacity-10 absolute -top-10 -left-6
                                 transition-colors duration-300
                                 ${phase.accent === COLORS.red.primary ? 
                                   'text-[#E63946]' : 'text-[#3B4B96]'}`}>
                    {phase.step}
                  </div>
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-4 text-[#3B4B96]">{phase.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#3B4B96] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/pattern-dark.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#E63946]/10 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8 text-white">
              Ready to Transform Your Dog's Life?
            </h2>
            <p className="text-xl text-blue-200 mb-12 leading-relaxed">
              Join our community of successful pet owners who have experienced the 
              Champion difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="group bg-white text-blue-900 px-10 py-5 rounded-xl 
                         font-semibold relative overflow-hidden
                         transition-all duration-300"
              >
                <span className="relative z-10">Schedule a Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r 
                                from-[#E63946] to-[#E63946]/80
                                translate-x-[-100%] group-hover:translate-x-0 
                                transition-transform duration-500"></div>
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-10 py-5 rounded-xl 
                         font-semibold hover:bg-white/10 transition-all duration-300 
                         inline-flex items-center justify-center"
              >
                Learn More
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

<style>
  {`
    @keyframes wave {
      0% { transform: translateX(-5%) rotate(180deg); }
      50% { transform: translateX(3%) rotate(180deg); }
      100% { transform: translateX(-5%) rotate(180deg); }
    }
    .animate-wave {
      animation: wave 15s ease-in-out infinite;
    }
    .animate-wave-slow {
      animation: wave 20s ease-in-out infinite;
    }
  `}
</style> 
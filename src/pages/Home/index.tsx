import { useEffect, useRef, useState } from 'react';
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex: number) => 
        prevIndex === carouselImages.length - 3 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      title: "Dog Training",
      description: "Transform your dog's behavior with our professional training programs.",
      path: "/training",
      image: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67863246b6255b7e0e1e11de.jpeg"
    },
    {
      title: "Grooming",
      description: "Keep your pet looking and feeling their best with our grooming services.",
      path: "/grooming",
      image: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67862dba1842f2282be4c512.jpeg"
    },
    {
      title: "Daycare",
      description: "Give your dog a fun-filled day of play and socialization.",
      path: "/daycare",
      image: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67862db91842f25e6ae4c50f.jpeg"
    },
    {
      title: "Boarding",
      description: "A home away from home for your pet when you're away.",
      path: "/boarding",
      image: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67862db9b6ea2b5fb322e433.jpeg"
    }
  ];

  const carouselImages = [
    {
      src: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67862dba1842f2282be4c512.jpeg",
      alt: "Dog Training Image 1"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67862dbab16f9bd03f86f6b6.jpeg",
      alt: "Dog Training Image 2"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67862db95418dbe2e290e254.jpeg",
      alt: "Dog Training Image 3"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67862dbab6255b64a01e0cc2.jpeg",
      alt: "Dog Training Image 4"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67862dba5418dbe27c90e255.jpeg",
      alt: "Dog Training Image 5"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67862db9b6ea2b5e0922e431.jpeg",
      alt: "Dog Training Image 6"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67862db9b6ea2b663c22e432.jpeg",
      alt: "Dog Training Image 7"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67862dba5418db404d90e256.jpeg",
      alt: "Dog Training Image 8"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67863246b6255b2efb1e11dd.jpeg",
      alt: "Dog Training Image 9"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67863246b6255b7e0e1e11de.jpeg",
      alt: "Dog Training Image 10"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67863246b16f9b430386fa2e.jpeg",
      alt: "Dog Training Image 11"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/678fb227d0f2ba1d4e43e2f9.png",
      alt: "Dog Training Image 12"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/678fb227d0f2ba139143e2fc.png",
      alt: "Dog Training Image 13"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/678fb2270709929b90523cb9.png",
      alt: "Dog Training Image 14"
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
            src="https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67901f515d20c8187874d07b.webp"
            alt="Champion Dog Products Background"
            className="h-full w-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#003B6D] via-[#003B6D]/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="max-w-4xl md:ml-[-100px]">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
              Champion Dogs,
              <br />
              <span className="text-[#8E9BDB] block mt-2">Happy Homes</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-2xl leading-relaxed">
              Experience the transformation as we turn your beloved pet into a 
              well-behaved family champion.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/about"
                className="group inline-flex items-center text-white hover:text-[#8E9BDB] 
                           transition-all duration-300"
              >
                <span className="w-12 h-12 rounded-full border-2 border-white 
                               flex items-center justify-center mr-4
                               group-hover:border-[#8E9BDB] group-hover:bg-white/10
                               transition-all duration-300">
                  ▶
                </span>
                Meet Our Founder
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentImageIndex * (100 / 3)}%)` }}
              >
                {carouselImages.map((image, index) => (
                  <div 
                    key={index}
                    className="w-1/3 flex-shrink-0 px-4"
                  >
                    <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={() => setCurrentImageIndex(prev => 
                  prev === 0 ? carouselImages.length - 3 : prev - 1
                )}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 
                          bg-white/90 hover:bg-white w-10 h-10 rounded-full shadow-lg
                          flex items-center justify-center transition-all duration-300"
                aria-label="Previous images"
              >
                <span className="text-blue-900">‹</span>
              </button>
              <button 
                onClick={() => setCurrentImageIndex(prev => 
                  prev === carouselImages.length - 3 ? 0 : prev + 1
                )}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 
                          bg-white/90 hover:bg-white w-10 h-10 rounded-full shadow-lg
                          flex items-center justify-center transition-all duration-300"
                aria-label="Next images"
              >
                <span className="text-blue-900">›</span>
              </button>
            </div>

            {/* Carousel Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: Math.ceil(carouselImages.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index * 3)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 
                    ${Math.floor(currentImageIndex / 3) === index 
                      ? 'bg-blue-900 w-4' 
                      : 'bg-gray-300'}`}
                  aria-label={`Go to image set ${index + 1}`}
                />
              ))}
            </div>
          </div>
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
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl 
                           transition-all duration-300 flex flex-col h-[420px]"
              >
                {/* Image Container - Top Half */}
                <div className="w-full h-48 relative overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-[center_35%]"
                  />
                </div>
                
                {/* Content Container - Bottom Half */}
                <div className="flex-1 bg-gray-50 p-6 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-blue-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm flex-1">{service.description}</p>
                  <div className="flex items-center text-blue-600 font-semibold 
                                group-hover:text-blue-800 transition-colors mt-4">
                    Explore Service
                    <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>

                {/* Hover Effect Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#E63946] 
                              transform -translate-y-full group-hover:translate-y-0 
                              transition-transform duration-500"></div>
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
                At Champ's, we believe in building lasting relationships with both our human customers and four-legged guests. Our talented and dedicated staff's love for dogs shines through in everything we do.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  step: "01",
                  title: "Passionate Care",
                  description: "Our dedicated staff loves dogs and is just as excited to serve our human customers. We cultivate a culture where exceptional service is our standard.",
                  accent: COLORS.red.primary
                },
                {
                  step: "02",
                  title: "Partnership Model",
                  description: "You're not just a customer - you and your dog are a relationship. We partner with our customers, valuing your feedback to provide the best possible care.",
                  accent: COLORS.blue.primary
                },
                {
                  step: "03",
                  title: "Long-term Commitment",
                  description: "We're in this for the long run, taking our responsibility seriously. Your dog's care and service are our top priority, ensuring lasting results.",
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
                to="/supply"
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
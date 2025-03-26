import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export function AboutPage() {
  // Add scroll handling
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash === '#founder-video') {
      // Wait a bit for the page to render
      setTimeout(() => {
        const element = document.getElementById('founder-video');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const services = [
    {
      title: "Training",
      description: "Professional dog training services for all ages and breeds",
      path: "/training",
      image: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67862db95418dbe2e290e254.jpeg",
      cta: "Learn More"
    },
    {
      title: "Grooming",
      description: "Expert grooming services for all breeds and coat types",
      path: "/grooming",
      image: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67862dbab6255b64a01e0cc2.jpeg",
      cta: "Learn More"
    },
    {
      title: "Daycare",
      description: "Safe and engaging daycare services for your dog",
      path: "/daycare",
      image: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67862dba5418db404d90e256.jpeg",
      cta: "Learn More"
    },
    {
      title: "Products",
      description: "Quality products for training and enrichment",
      path: "/supply",
      image: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67862db9b6ea2b5e0922e431.jpeg",
      cta: "Shop Now"
    }
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67c73247ac9d4ae3854206d1.png')"
      }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Blue Background */}
        <div className="absolute inset-0 bg-[#005596] w-full md:w-1/2"></div>
        
        {/* Image Container */}
        <div className="absolute inset-0 ml-auto w-full md:w-1/2">
          <img
            src="https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67c8ab94feac7d7f92a49c88.jpeg"
            alt="About Champion Dogs"
            className="h-full w-full object-cover object-[center_25%]"
            style={{
              objectPosition: 'center 30%'
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#005596] via-[#005596]/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="max-w-4xl md:ml-[-100px]">
            <h1 className="hero-heading text-6xl md:text-7xl lg:text-8xl mb-6 text-white leading-tight">
              About Us
              <br />
              <span className="text-[#E63946] block mt-2">Our Story</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-2xl leading-relaxed">
              Keeping dogs out of the pound and in loving homes like yours since 2010
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/contact"
                className="inline-block bg-white text-[#003B6D] px-8 py-4 rounded-full 
                         font-semibold hover:bg-[#8E9BDB] hover:text-white transition-all duration-300
                         shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section Replaced with New Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Three Pillars Container */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16 shadow-sm">
            {/* What We Do */}
            <div className="text-center mb-12 bg-white rounded-xl p-8 shadow-sm">
              <h2 className="font-anton text-4xl mb-6 text-[#003B6D] uppercase tracking-normal drop-shadow-sm">What We Do</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Champ's, we provide exceptional spaces, products, and services that help both dogs and their owners live fuller, happier lives.
              </p>
            </div>

            {/* How We Do It */}
            <div className="text-center mb-12 bg-white rounded-xl p-8 shadow-sm">
              <h2 className="font-anton text-4xl mb-6 text-[#003B6D] uppercase tracking-normal drop-shadow-sm">How We Do It</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We show our love for our Champions by living our core values in every interaction—whether with ourselves, our team, clients, or our dogs.
              </p>
            </div>

            {/* Why We Do It */}
            <div className="text-center bg-white rounded-xl p-8 shadow-sm">
              <h2 className="font-anton text-4xl mb-6 text-[#003B6D] uppercase tracking-normal drop-shadow-sm">Why We Do It</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe every human and dog has the potential to be their best. Through every moment, interaction, relationship, and service, we create opportunities to help them reach their full potential.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="font-anton text-4xl mb-8 text-[#003B6D] uppercase tracking-normal drop-shadow-sm text-center">Champ's Core Values</h2>
            <h3 className="font-anton text-3xl mb-6 text-[#003B6D] uppercase tracking-normal drop-shadow-sm">We Are:</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-anton text-xl mb-2 text-[#003B6D] uppercase tracking-normal">Service-Driven</h4>
                <p className="text-gray-700">We create a warm, welcoming environment for team members, clients, and dogs alike.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-anton text-xl mb-2 text-[#003B6D] uppercase tracking-normal">Constantly Developing</h4>
                <p className="text-gray-700">We strive for continuous improvement in both our company operations and personal growth to meet organizational and career goals.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-anton text-xl mb-2 text-[#003B6D] uppercase tracking-normal">Committed to Systems of Excellence</h4>
                <p className="text-gray-700">We set high standards in everything we do, leading by example and encouraging others to follow.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-anton text-xl mb-2 text-[#003B6D] uppercase tracking-normal">Accountable</h4>
                <p className="text-gray-700">We take ownership of outcomes, continuously learning and finding ways to improve.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-anton text-xl mb-2 text-[#003B6D] uppercase tracking-normal">Proactive</h4>
                <p className="text-gray-700">Using our training and past experiences, we anticipate needs and act before issues arise.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-anton text-xl mb-2 text-[#003B6D] uppercase tracking-normal">Maximization-Oriented</h4>
                <p className="text-gray-700">We focus on making the best use of our time and energy.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-anton text-xl mb-2 text-[#003B6D] uppercase tracking-normal">Harmonious</h4>
                <p className="text-gray-700">We operate in a calm, cheerful, and optimistic manner, creating a peaceful environment for all.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-anton text-xl mb-2 text-[#003B6D] uppercase tracking-normal">Inclusive</h4>
                <p className="text-gray-700">We welcome everyone who shares our values, regardless of race, religion, sexual identity, or any other characteristic.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm md:col-span-2">
                <h4 className="font-anton text-xl mb-2 text-[#003B6D] uppercase tracking-normal">Connected</h4>
                <p className="text-gray-700">We ensure that everyone feels heard, valued, and supported—whether team members or clients.</p>
              </div>
            </div>

            <div className="mt-8 text-center text-gray-700 italic">
              At Champ's, we are more than just an employer and employees—we are a community united by shared values, a vision for excellence, and a commitment to the care of each other, our clients, and our Champions.
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Founder Section */}
      <section id="founder-video" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-anton text-4xl mb-8 text-[#003B6D] uppercase tracking-normal drop-shadow-sm">Meet Our Founder</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Get to know Pat Quinn, the founder of Champion Puppy Training and Champion Dog Products, 
              and learn about our journey to becoming industry leaders in dog training and care.
            </p>
          </div>
          
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe
                src="https://player.vimeo.com/video/556875728?h=56f0e2d8c7"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Meet Our Founder"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-anton text-4xl mb-12 text-[#003B6D] uppercase tracking-normal drop-shadow-sm text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link 
                key={service.title}
                to={service.path}
                className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="w-full h-48 relative overflow-hidden">
                  <img 
                    src={service.image}
                    alt={`${service.title} Service`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-anton text-xl mb-3 text-[#003B6D] uppercase tracking-normal">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="text-blue-600 group-hover:text-blue-800 inline-flex items-center">
                    {service.cta}
                    <span className="ml-2">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 
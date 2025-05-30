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

  const partnerships = [
    {
      name: "Pride Paws",
      description: "A local, south Jersey, non-profit that provides job training and transitional employment experience to individuals with developmental disabilities.",
      activities: [
        "Packaging our products",
        "Facilitating local training destinations",
        "Providing bandanas to grooming clients"
      ]
    }
  ];

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
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
              About Us
              <br />
              <span className="text-[#8E9BDB] block mt-2">Our Story</span>
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

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-8 text-blue-900">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Champion Puppy Training was created with one thought in mind: Keeping dogs out of the pound 
              and in loving homes like yours. As our business grew, we understood that our Champion Puppy 
              Owners not only needed the process, they needed the product as well.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Champion Dog Products</h3>
            <p className="text-gray-700 mb-4">
              In 2021 we launched Champion Dog Products - where products and process come together for 
              lifetime results.
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Our Expertise</h3>
            <p className="text-gray-700 mb-4">
              Champion Puppy Training and Champion Dog Products was created by Pat Quinn. With over 17 
              years of experience, Pat is an industry leader and influencer.
            </p>
            <p className="text-gray-700">
              Our home office is based in the greater Philadelphia area. We train locally, nationally, 
              and supply products nation wide.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Founder Section */}
      <section id="founder-video" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8 text-blue-900">Meet Our Founder</h2>
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

      {/* Partnerships Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Our Partnerships</h2>
          
          {partnerships.map((partner) => (
            <div 
              key={partner.name}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-900">{partner.name}</h3>
              <p className="text-gray-700 mb-6">{partner.description}</p>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold mb-4">Partnership Activities:</h4>
                <ul className="space-y-2">
                  {partner.activities.map((activity) => (
                    <li key={activity} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Our Services</h2>
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
                  <h3 className="font-bold text-xl mb-3 text-blue-900">{service.title}</h3>
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
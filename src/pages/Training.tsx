import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

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

  // Add state for carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    {
      src: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/677bcb616419fd2fc598a1b1.png",
      alt: "Champion Puppy Training Programs Overview"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/677bcb618f9556f36399044e.png",
      alt: "One-on-One Puppy Training"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/677bcb61fa02bd49e0fbf9f1.png",
      alt: "Champ's Dog House Services: Daycare, Boarding, Grooming, and Mobile Grooming"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/677bcb61b0a11f1f05c7a643.png",
      alt: "Terms and Conditions"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/677bcb618f955610a699044d.png", 
      alt: "Back to School Special - Buy One Get One Half Off All Bones"
    }
  ];

  // Auto-rotate images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex: number) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // Handle manual navigation
  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex: number) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex: number) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
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
            src="https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67863246b6255b7e0e1e11de.jpeg"
            alt="Dog Training"
            className="h-full w-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#003B6D] via-[#003B6D]/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="max-w-4xl md:ml-[-100px]">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
              Professional
              <br />
              <span className="text-[#8E9BDB] block mt-2">Dog Training</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-2xl leading-relaxed">
              Transform your dog's behavior with our proven training methods and expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/training/book"
                className="inline-block bg-white text-[#003B6D] px-8 py-4 rounded-full 
                         font-semibold hover:bg-[#8E9BDB] hover:text-white transition-all duration-300
                         shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Training
              </Link>
              <Link 
                to="/training/programs"
                className="group inline-flex items-center text-white hover:text-[#8E9BDB] 
                           transition-all duration-300"
              >
                <span className="w-12 h-12 rounded-full border-2 border-white 
                               flex items-center justify-center mr-4
                               group-hover:border-[#8E9BDB] group-hover:bg-white/10
                               transition-all duration-300">
                  🎓
                </span>
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

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

      {/* Image Carousel Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Our Training in Action</h2>
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                  {images.map((image, index) => (
                    <div 
                      key={index}
                      className="w-full flex-shrink-0 px-4"
                    >
                      <div className="aspect-[16/9] relative bg-gray-100 rounded-lg">
                        <img 
                          src={image.src}
                          alt={image.alt}
                          className="absolute inset-0 w-full h-full object-contain rounded-lg"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 
                          bg-white/90 hover:bg-white w-12 h-12 rounded-full shadow-lg
                          flex items-center justify-center transition-all duration-300
                          border border-gray-200 hover:scale-110"
                aria-label="Previous image"
              >
                <span className="text-blue-900 text-2xl">‹</span>
              </button>
              <button 
                onClick={goToNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 
                          bg-white/90 hover:bg-white w-12 h-12 rounded-full shadow-lg
                          flex items-center justify-center transition-all duration-300
                          border border-gray-200 hover:scale-110"
                aria-label="Next image"
              >
                <span className="text-blue-900 text-2xl">›</span>
              </button>
            </div>

            {/* Carousel Navigation */}
            <div className="mt-8">
              <div className="flex justify-center space-x-3 mb-4">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 
                      ${currentImageIndex === index 
                        ? 'bg-blue-900 scale-110' 
                        : 'bg-gray-300 hover:bg-gray-400'}`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
              <div className="text-center">
                <p className="text-gray-600 mb-2">
                  {currentImageIndex + 1} of {images.length}
                </p>
                <p className="text-blue-900 font-semibold">
                  Voted Best of Burlington County 2024
                </p>
              </div>
            </div>
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
    </div>
  );
} 
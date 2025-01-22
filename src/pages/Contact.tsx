import { Link } from 'react-router-dom';

export function ContactPage() {
  const locations = [
    {
      name: "Main Facility",
      address: "123 Champion Way, Burlington, NJ 08016",
      phone: "(555) 123-4567",
      email: "info@champspuppytraining.com",
      hours: {
        weekday: "6:30 AM - 6:00 PM",
        weekend: "8:00 AM - 5:00 PM"
      }
    }
  ];

  const services = [
    { name: "Training", icon: "🎓", path: "/training" },
    { name: "Daycare", icon: "🏃‍♂️", path: "/daycare" },
    { name: "Boarding", icon: "🏠", path: "/boarding" },
    { name: "Grooming", icon: "✨", path: "/grooming" },
    { name: "Shop", icon: "🛍️", path: "/supply" }
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
            src="https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67862db9b6ea2b5fb322e433.jpeg"
            alt="Contact Champion Dogs"
            className="h-full w-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#003B6D] via-[#003B6D]/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="max-w-4xl md:ml-[-100px]">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
              Contact Us
              <br />
              <span className="text-[#8E9BDB] block mt-2">Get in Touch</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-2xl leading-relaxed">
              Have questions? We're here to help! Reach out to our team for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="tel:+15551234567"
                className="inline-block bg-white text-[#003B6D] px-8 py-4 rounded-full 
                         font-semibold hover:bg-[#8E9BDB] hover:text-white transition-all duration-300
                         shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Call Now
              </a>
              <Link 
                to="/locations"
                className="group inline-flex items-center text-white hover:text-[#8E9BDB] 
                           transition-all duration-300"
              >
                <span className="w-12 h-12 rounded-full border-2 border-white 
                               flex items-center justify-center mr-4
                               group-hover:border-[#8E9BDB] group-hover:bg-white/10
                               transition-all duration-300">
                  📍
                </span>
                Find Location
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Location Card */}
            {locations.map((location) => (
              <div key={location.name} className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-blue-900">{location.name}</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-blue-900">Address</h3>
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-blue-900">Contact</h3>
                    <p className="text-gray-600">
                      Phone: <a href={`tel:${location.phone}`} className="text-blue-600 hover:text-blue-800">{location.phone}</a>
                      <br />
                      Email: <a href={`mailto:${location.email}`} className="text-blue-600 hover:text-blue-800">{location.email}</a>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-blue-900">Hours</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Monday - Friday</span>
                        <span className="font-medium text-blue-900">{location.hours.weekday}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Saturday - Sunday</span>
                        <span className="font-medium text-blue-900">{location.hours.weekend}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Service Interest</label>
                  <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none transition-all">
                    <option value="">Select a service...</option>
                    {services.map((service) => (
                      <option key={service.name} value={service.name.toLowerCase()}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-900 text-white py-4 rounded-lg hover:bg-blue-800 transition-colors font-semibold text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.name}
                to={service.path}
                className="flex flex-col items-center p-6 bg-white rounded-xl hover:shadow-md transition-all duration-300"
              >
                <span className="text-3xl mb-3">{service.icon}</span>
                <span className="font-medium text-blue-900">{service.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-blue-900">Visit Us</h2>
          <div className="max-w-4xl mx-auto bg-gray-200 rounded-2xl overflow-hidden">
            {/* Replace with actual map component or iframe */}
            <div className="aspect-[16/9] bg-gray-300">
              {/* Map placeholder */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Interactive Map Coming Soon
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
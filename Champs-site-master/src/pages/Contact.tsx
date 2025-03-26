import { Link } from 'react-router-dom';

export function ContactPage() {
  const locations = [
    {
      name: "CHAMP'S",
      subtitle: "Training, Grooming, & Supply",
      address: "1155 Rt. 73, Mt. Laurel, NJ 08054",
      phone: "(856) 724-4344",
      email: "info@champsdoghouse.com",
      hours: {
        weekday: "9:00 AM - 5:00 PM",
        weekend: "9:00 AM - 5:00 PM",
        note: "Monday - Saturday"
      },
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3053.7475266755585!2d-74.9592543!3d39.9402222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c14d1e6c61c823%3A0x61fd2b0a117fb98f!2s1155%20NJ-73%2C%20Mt%20Laurel%2C%20NJ%2008054!5e0!3m2!1sen!2sus!4v1706126986!5m2!1sen!2sus"
    },
    {
      name: "CHAMP'S",
      subtitle: "Daycare & Boarding",
      address: "1000 Jackson Rd, Medford, NJ 08055",
      phone: "(609) 654-4170",
      email: "info@champsdoghouse.com",
      hours: {
        weekday: "6:30 AM - 6:30 PM",
        weekend: "6:30 AM - 6:30 PM",
        note: "Monday - Saturday"
      },
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3053.7475266755585!2d-74.9592543!3d39.9402222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c14d1e6c61c823%3A0x61fd2b0a117fb98f!2s1000%20Jackson%20Rd%2C%20Medford%2C%20NJ%2008055!5e0!3m2!1sen!2sus!4v1706126986!5m2!1sen!2sus"
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
        <div className="absolute inset-0 bg-[#005596] w-full md:w-1/2"></div>
        
        {/* Image Container */}
        <div className="absolute inset-0 ml-auto w-full md:w-1/2">
          <img
            src="https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67862db9b6ea2b5fb322e433.jpeg"
            alt="Contact Champion Dogs"
            className="h-full w-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#005596] via-[#005596]/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="max-w-4xl md:ml-[-100px]">
            <h1 className="hero-heading text-6xl md:text-7xl lg:text-8xl mb-6 text-white leading-tight">
              Contact Us
              <br />
              <span className="text-[#E63946] block mt-2">Get in Touch</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-2xl leading-relaxed">
              Have questions? We're here to help! Reach out to our team for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#map-section"
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
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-anton text-4xl text-center mb-12 text-[#E63946] uppercase tracking-normal drop-shadow-sm">Our Locations</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {locations.map((location) => (
              <div key={location.name} className="bg-gray-50 rounded-2xl p-8">
                <div className="text-left">
                  <h2 className="font-anton text-3xl mb-1 text-[#E63946] uppercase tracking-normal">{location.name}</h2>
                  <h3 className="text-lg font-light tracking-[0.15em] uppercase text-[#E63946]">{location.subtitle}</h3>
                </div>
                <div className="space-y-6 mt-6">
                  <div>
                    <h3 className="font-anton text-xl mb-2 text-[#E63946] uppercase tracking-normal">Address</h3>
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                  <div>
                    <h3 className="font-anton text-xl mb-2 text-[#E63946] uppercase tracking-normal">Contact</h3>
                    <p className="text-gray-600">
                      Text: <a href={`tel:${location.phone}`} className="text-[#E63946] hover:text-[#C1121F]">{location.phone}</a>
                      <br />
                      Email: <a href={`mailto:${location.email}`} className="text-[#E63946] hover:text-[#C1121F]">{location.email}</a>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-anton text-xl mb-2 text-[#E63946] uppercase tracking-normal">Hours</h3>
                    <div className="space-y-2">
                      <p className="text-gray-600">{location.hours.note}</p>
                      <p className="font-medium text-[#E63946]">{location.hours.weekday}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-anton text-4xl text-center mb-12 text-[#E63946] uppercase tracking-normal drop-shadow-sm">Send us a Message</h2>
            <div className="bg-white rounded-2xl p-8">
              <div style={{ overflow: 'hidden' }}>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/lU8nqAIL5Wmyhfd9ba34"
                  style={{ width: '100%', height: '850px', border: 'none', borderRadius: '3px', overflow: 'hidden', display: 'block' }}
                  id="inline-lU8nqAIL5Wmyhfd9ba34" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Contact Us"
                  data-layout-iframe-id="inline-lU8nqAIL5Wmyhfd9ba34"
                  data-form-id="lU8nqAIL5Wmyhfd9ba34"
                  title="Contact Us"
                  scrolling="no"
                />
              </div>
              <script src="https://link.msgsndr.com/js/form_embed.js" async></script>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-anton text-4xl text-center mb-12 text-[#E63946] uppercase tracking-normal drop-shadow-sm">Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.name}
                to={service.path}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300"
              >
                <span className="text-3xl mb-3">{service.icon}</span>
                <span className="font-medium text-[#E63946]">{service.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Maps Section */}
      <section id="map-section" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-anton text-4xl text-center mb-12 text-[#E63946] uppercase tracking-normal drop-shadow-sm">Visit Us</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {locations.map((location) => (
              <div key={location.name} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="p-6">
                  <h3 className="font-anton text-2xl mb-2 text-[#E63946] uppercase tracking-normal">{location.subtitle}</h3>
                  <p className="text-gray-600 mb-4">{location.address}</p>
                </div>
                <div className="aspect-video">
                  <iframe
                    src={location.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${location.name} Location`}
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 
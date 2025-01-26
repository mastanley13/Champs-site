import { Link } from 'react-router-dom';
import { ROUTES } from '../../config/routes';

export function SupplyPage() {
  const categories = [
    {
      title: 'Chewing Items',
      count: 25,
      path: 'https://championdogproducts.com/collections/chewing-accessories',
      description: 'Durable chew toys and natural treats',
      imageUrl: 'https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/6790001f5d20c8992a74b33d.webp',
      fallbackImage: '/images/placeholders/chewing.jpg',
      featured: ['Bully Sticks', 'Kong Toys', 'Natural Chews']
    },
    {
      title: 'Essentials',
      count: 8,
      path: ROUTES.SHOPIFY_STORE + '/collections/essentials',
      description: 'Must-have training tools and equipment',
      imageUrl: 'https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/6790001b798d3afbbfa654e5.webp',
      fallbackImage: '/images/placeholders/essentials.jpg',
      featured: ['Training Clickers', 'Treat Pouches', 'Training Leads']
    },
    {
      title: 'Holiday Toys',
      count: 21,
      path: 'https://championdogproducts.com/collections/holiday-toys',
      description: 'Seasonal and festive toys for special occasions',
      imageUrl: 'https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/679000175d20c850c974b338.webp',
      fallbackImage: '/images/placeholders/holiday.jpg',
      featured: ['Christmas Toys', 'Halloween Toys', 'Birthday Sets']
    },
    {
      title: 'Collars, Leashes & Harnesses',
      count: 19,
      path: 'https://championdogproducts.com/collections/accessories-apparel',
      description: 'Professional-grade walking and training equipment',
      imageUrl: 'https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/679000158020bf076c45d623.webp',
      fallbackImage: '/images/placeholders/collars.jpg',
      featured: ['Training Collars', 'No-Pull Harnesses', 'Leather Leashes']
    },
    {
      title: 'Puzzles, Bowls & Accessories',
      count: 8,
      path: 'https://championdogproducts.com/collections/accessories',
      description: 'Interactive toys and feeding solutions',
      imageUrl: 'https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67900013f8a81ce3d6ea7833.webp',
      fallbackImage: '/images/placeholders/puzzles.jpg',
      featured: ['Slow Feeders', 'Puzzle Toys', 'Interactive Games']
    },
    {
      title: 'Toys',
      count: 34,
      path: 'https://championdogproducts.com/collections/toys-coming-soon',
      description: 'Engaging toys for positive reinforcement',
      imageUrl: 'https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67900011985d820341c918d4.webp',
      fallbackImage: '/images/placeholders/toys.jpg',
      featured: ['Reward Toys', 'Tug Toys', 'Training Dummies']
    }
  ];

  const benefits = [
    {
      icon: "🌟",
      title: "Trainer Approved",
      description: "Every product tested and approved by professional trainers"
    },
    {
      icon: "🔍",
      title: "Carefully Curated",
      description: "Only the best products that support positive training"
    },
    {
      icon: "📦",
      title: "Fast Shipping",
      description: "Quick delivery on all your training essentials"
    },
    {
      icon: "💯",
      title: "Satisfaction Guaranteed",
      description: "Love it or return it - no questions asked"
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
            src="https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/6790001f5d20c8992a74b33d.webp"
            alt="Champion Dog Products"
            className="h-full w-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#003B6D] via-[#003B6D]/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="max-w-4xl md:ml-[-100px]">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
              Champion Dog
              <br />
              <span className="text-[#8E9BDB] block mt-2">Products</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-2xl leading-relaxed">
              Quality products designed for training success and your dog's enrichment
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="https://championdogproducts.com/collections"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#003B6D] px-8 py-4 rounded-full 
                         font-semibold hover:bg-[#8E9BDB] hover:text-white transition-all duration-300
                         shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Store
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="font-bold text-xl mb-2 text-blue-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-blue-900">About Champion Dogs</h2>
            <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
              <iframe
                src="https://player.vimeo.com/video/556875728?loop=1&app_id=122963"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="Intro to Champion Dog Products"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Shop by Category</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
            {categories.map((category) => (
              category.path.startsWith('http') ? (
                <a
                  key={category.title}
                  href={category.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  <div className="w-full h-[240px] relative">
                    <img 
                      src={category.imageUrl}
                      alt={`${category.title} category`}
                      className="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
                      style={{
                        objectFit: 'cover',
                        objectPosition: (() => {
                          switch(category.title) {
                            case 'Holiday Toys':
                              return 'center 20%';
                            case 'Puzzles, Bowls & Accessories':
                              return 'center 25%';
                            case 'Chewing Items':
                              return 'center 35%';
                            case 'Toys':
                              return 'center 35%';
                            case 'Collars, Leashes & Harnesses':
                              return 'center 40%';
                            case 'Essentials':
                              return 'center 40%';
                            default:
                              return 'center';
                          }
                        })()
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-bold text-blue-900">{category.title}</h3>
                      <span className="text-xs text-blue-600 font-medium">{category.count} items</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                    <div className="space-y-2">
                      {category.featured.map((item) => (
                        <div key={item} className="text-xs text-gray-500 flex items-center">
                          <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </a>
              ) : (
                <Link
                  key={category.title}
                  to={category.path}
                  className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  <div className="w-full h-[240px] relative">
                    <img 
                      src={category.imageUrl}
                      alt={`${category.title} category`}
                      className="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
                      style={{
                        objectFit: 'cover',
                        objectPosition: (() => {
                          switch(category.title) {
                            case 'Holiday Toys':
                              return 'center 20%';
                            case 'Puzzles, Bowls & Accessories':
                              return 'center 25%';
                            case 'Chewing Items':
                              return 'center 35%';
                            case 'Toys':
                              return 'center 35%';
                            case 'Collars, Leashes & Harnesses':
                              return 'center 40%';
                            case 'Essentials':
                              return 'center 40%';
                            default:
                              return 'center';
                          }
                        })()
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-bold text-blue-900">{category.title}</h3>
                      <span className="text-xs text-blue-600 font-medium">{category.count} items</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                    <div className="space-y-2">
                      {category.featured.map((item) => (
                        <div key={item} className="text-xs text-gray-500 flex items-center">
                          <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Program */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Join Our Rewards Program</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Earn points on every purchase and get exclusive access to member-only deals and early product releases.
          </p>
          
          {/* Form Container */}
          <div className="max-w-3xl mx-auto h-[800px] mb-8">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/mDxVirv07nGtfSf7XyIF"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '4px',
                overflow: 'hidden'
              }}
              id="inline-mDxVirv07nGtfSf7XyIF" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Rewards Program Form"
              data-height="800"
              data-layout-iframe-id="inline-mDxVirv07nGtfSf7XyIF"
              data-form-id="mDxVirv07nGtfSf7XyIF"
              title="Rewards Program Form"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

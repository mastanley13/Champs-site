import { Link } from 'react-router-dom';
import { ROUTES } from '../../config/routes';

export function SupplyPage() {
  const categories = [
    {
      title: 'Chewing Items',
      count: 26,
      path: 'https://championdogproducts.com/collections/chewing-accessories',
      description: 'Durable chew toys and natural treats',
      imageUrl: 'https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/6790001f5d20c8992a74b33d.webp',
      fallbackImage: '/images/placeholders/chewing.jpg',
      featured: ['Bully Sticks', 'Natural Chews', 'Long-lasting Treats']
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
      title: 'Toys',
      count: 34,
      path: 'https://championdogproducts.com/collections/toys-coming-soon',
      description: 'Engaging toys for positive reinforcement',
      imageUrl: 'https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67900011985d820341c918d4.webp',
      fallbackImage: '/images/placeholders/toys.jpg',
      featured: ['Interactive Toys', 'Reward Toys', 'Training Dummies']
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
      title: 'Cots, Covers, & Bedding',
      count: 9,
      path: 'https://championdogproducts.com/collections/accessories',
      description: 'Comfortable bedding and crate accessories',
      imageUrl: 'https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67e3cfd07146fe27054e2b35.png',
      fallbackImage: '/images/placeholders/bedding.jpg',
      featured: ['Crate Pads', 'Bed Covers', 'Comfort Mats']
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
        <div className="absolute inset-0 bg-[#005596] w-full md:w-1/2"></div>
        
        {/* Image Container */}
        <div className="absolute inset-0 ml-auto w-full md:w-1/2">
          <img
            src="https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/6790001f5d20c8992a74b33d.webp"
            alt="Champion Dog Products"
            className="h-full w-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#005596] via-[#005596]/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="max-w-4xl md:ml-[-100px]">
            <h1 className="hero-heading text-6xl md:text-7xl lg:text-8xl mb-6 leading-tight">
              <span className="text-[#E63946]">Champion</span>
              <br />
              <span className="text-white block mt-2">Products</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-2xl leading-relaxed">
              Quality products designed for training success and your dog's enrichment
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="https://championdogproducts.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#005596] px-8 py-4 rounded-full 
                         font-semibold hover:bg-[#8E9BDB] hover:text-white transition-all duration-300
                         shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Shop All Collections
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

      {/* Best Sellers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Featured Collections</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
            {/* Best Sellers Collection */}
            <a
              href="https://championdogproducts.com/collections/best-sellers"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square relative">
                <img 
                  src="https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67e3cd31964335a815397ad4.png"
                  alt="Best Sellers"
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Best Sellers</h3>
                  <p className="text-white/90">Shop our most popular training products</p>
                </div>
              </div>
            </a>

            {/* Champion Chewers Club */}
            <a
              href="https://championdogproducts.com/products/champion-chewers-club"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square relative">
                <img 
                  src="https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67e3cd312be3f7bf6721555d.png"
                  alt="Champion Chewers Club"
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Champion Chewers Club</h3>
                  <p className="text-white/90">Subscribe & save on monthly treats</p>
                </div>
              </div>
            </a>

            {/* Bully Sticks */}
            <a
              href="https://championdogproducts.com/collections/chewing-accessories"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square relative">
                <img 
                  src="https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67e3cd317146fec1084e2863.png"
                  alt="Bully Sticks"
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Bully Sticks</h3>
                  <p className="text-white/90">Premium natural chews for your pup</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Shop by Category</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
            {categories.map((category) => (
              <Link
                key={category.title}
                to={category.path}
                className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="w-full h-[240px] relative">
                  <img 
                    src={category.imageUrl}
                    alt={`${category.title} category`}
                    className="w-full h-full object-cover transition-transform duration-300"
                    style={{
                      objectFit: 'cover',
                      objectPosition: (() => {
                        switch(category.title) {
                          case 'Cots, Covers, & Bedding':
                            return 'center 30%';
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
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Program */}
      <div className="bg-red-600 text-white py-2 text-center">
        Free shipping for orders over $70
      </div>

      <section className="bg-[#005596] text-white py-16">
        <div className="container mx-auto px-4">
          {/* Banner */}
          <div className="relative max-w-4xl mx-auto mb-20">
            <div className="text-center">
              <h2 className="hero-heading text-7xl mb-4">Rewards</h2>
              <p className="text-2xl text-white/90">Our program is FREE, learn more!</p>
            </div>
            <a
              href="https://championdogproducts.com/account/register"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition-colors"
            >
              Join Now
            </a>
          </div>

          {/* How to Earn */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-bold mb-8">How to Earn</h2>
            <p className="text-xl mb-4">
              Become a Rewards Member and start earning 10% on all future purchases in Champ's Bucks. No obscure points system, just Champ's Bucks added directly to your account.
            </p>
            <p className="text-xl mb-4">$1 = 1 Champ's Buck! No math Needed!</p>
            <p className="text-xl">The more you spend - the more Champ's Bucks you get!</p>

            {/* Steps */}
            <div className="bg-white/10 rounded-2xl p-8 mt-16">
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-white/10 p-2 mx-auto mb-6">
                    <img 
                      src="https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67e3d2121870f486083e0f89.png" 
                      alt="Join" 
                      className="w-full h-full object-contain rounded-full bg-white"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Join</h3>
                  <p>To get started - create an account!</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-white/10 p-2 mx-auto mb-6">
                    <img 
                      src="https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67e3d2119643357f6439835f.png" 
                      alt="Shop" 
                      className="w-full h-full object-contain rounded-full bg-white"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Shop</h3>
                  <p>Shop with us to start earning rewards!</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-white/10 p-2 mx-auto mb-6">
                    <img 
                      src="https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67e3d2112be3f72496215da1.png" 
                      alt="Earn" 
                      className="w-full h-full object-contain rounded-full bg-white"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Earn</h3>
                  <p>Earn 10% on every purchase.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Join Now Button */}
          <div className="text-center mb-20">
            <a
              href="https://championdogproducts.com/account/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-red-700 transition-colors"
            >
              Join Now
            </a>
          </div>

          {/* How to Redeem */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">How to Redeem</h2>
            <p className="text-xl mb-12">
              Log in to your account, and use the 'Apply Store Credit' button in the cart page or checkout.
            </p>

            <div className="bg-white/10 rounded-2xl p-8">
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#005596" className="w-16 h-16">
                      <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <button className="bg-white text-[#005596] px-6 py-2 rounded-lg font-semibold">Sign In</button>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#005596" className="w-16 h-16">
                      <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <button className="bg-white text-[#005596] px-6 py-2 rounded-lg font-semibold">Add to Cart</button>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="relative w-16 h-16">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#005596" className="w-full h-full">
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold">$</span>
                    </div>
                  </div>
                  <button className="bg-white text-[#005596] px-6 py-2 rounded-lg font-semibold">Apply Store Credit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../../components/PageLayout';

const placeholderImages = {
  'Chewing Items': '/images/placeholders/chewing.jpg',
  'Essentials': '/images/placeholders/essentials.jpg',
  'Holiday Toys': '/images/placeholders/holiday.jpg',
  'Collars, Leashes & Harnesses': '/images/placeholders/collars.jpg',
  'Puzzles, Bowls & Accessories': '/images/placeholders/puzzles.jpg',
  'Training Toys': '/images/placeholders/toys.jpg'
};

export function SupplyPage() {
  const categories = [
    {
      title: 'Chewing Items',
      count: 25,
      path: '/shop/chewing-items',
      description: 'Durable chew toys and natural treats',
      imageUrl: 'https://championdogproducts.com/cdn/shop/collections/chewing.jpg',
      fallbackImage: '/images/placeholders/chewing.jpg',
      featured: ['Bully Sticks', 'Kong Toys', 'Natural Chews']
    },
    {
      title: 'Essentials',
      count: 8,
      path: '/shop/essentials',
      description: 'Must-have training tools and equipment',
      imageUrl: 'https://championdogproducts.com/cdn/shop/collections/essentials.jpg',
      fallbackImage: '/images/placeholders/essentials.jpg',
      featured: ['Training Clickers', 'Treat Pouches', 'Training Leads']
    },
    {
      title: 'Holiday Toys',
      count: 21,
      path: '/shop/holiday-toys',
      description: 'Seasonal and festive toys for special occasions',
      imageUrl: 'https://championdogproducts.com/cdn/shop/collections/holiday.jpg',
      fallbackImage: '/images/placeholders/holiday.jpg',
      featured: ['Christmas Toys', 'Halloween Toys', 'Birthday Sets']
    },
    {
      title: 'Collars, Leashes & Harnesses',
      count: 19,
      path: '/shop/collars-leashes-harnesses',
      description: 'Professional-grade walking and training equipment',
      imageUrl: 'https://championdogproducts.com/cdn/shop/collections/collars.jpg',
      fallbackImage: '/images/placeholders/collars.jpg',
      featured: ['Training Collars', 'No-Pull Harnesses', 'Leather Leashes']
    },
    {
      title: 'Puzzles, Bowls & Accessories',
      count: 8,
      path: '/shop/puzzles-bowls',
      description: 'Interactive toys and feeding solutions',
      imageUrl: 'https://championdogproducts.com/cdn/shop/collections/puzzles.jpg',
      fallbackImage: '/images/placeholders/puzzles.jpg',
      featured: ['Slow Feeders', 'Puzzle Toys', 'Interactive Games']
    },
    {
      title: 'Training Toys',
      count: 34,
      path: '/shop/toys',
      description: 'Engaging toys for positive reinforcement',
      imageUrl: 'https://championdogproducts.com/cdn/shop/collections/toys.jpg',
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
    <PageLayout 
      title="Champion Dog Products"
      subtitle={
        <>
          Professional-grade training tools and supplies to support your dog's development and happiness
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/shop/new-arrivals" 
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold 
                       hover:bg-blue-50 transition-all duration-300 shadow-lg 
                       hover:shadow-xl inline-flex items-center justify-center"
            >
              Shop New Arrivals
              <span className="ml-2">→</span>
            </Link>
            <Link 
              to="/shop/best-sellers" 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold 
                       hover:bg-white hover:text-blue-900 transition-all duration-300 
                       inline-flex items-center justify-center"
            >
              View Best Sellers
              <span className="ml-2">→</span>
            </Link>
          </div>
        </>
      }
    >
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

      {/* Categories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Shop by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {categories.map((category) => (
              <Link
                key={category.title}
                to={category.path}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                  <img 
                    src={category.imageUrl}
                    alt={`${category.title} category`}
                    className="object-cover w-full h-48"
                    onError={(e) => {
                      e.currentTarget.src = category.fallbackImage || '/images/placeholders/default.jpg';
                    }}
                    style={{
                      backgroundColor: '#f3f4f6',
                      backgroundImage: "url('/images/placeholders/loading.svg')",
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '48px'
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-blue-900">{category.title}</h3>
                    <span className="text-sm text-blue-600 font-semibold">{category.count} items</span>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="space-y-2">
                    {category.featured.map((item) => (
                      <div key={item} className="text-sm text-gray-500 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
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
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Join Our Rewards Program</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Earn points on every purchase and get exclusive access to member-only deals and early product releases.
          </p>
          <Link 
            to="/rewards/join"
            className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center"
          >
            Join Now - It's Free
            <span className="ml-2">→</span>
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to get new product alerts, exclusive offers, and training tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-3 rounded-full border focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none"
            />
            <button
              type="submit"
              className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
}

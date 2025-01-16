import React from 'react';

export default function SupplyPage() {
  const categories = [
    {
      title: 'Chewing Items',
      count: 25,
      url: 'https://championdogproducts.com/collections/chewing-items',
      description: 'Quality chewing products for your dog'
    },
    {
      title: 'Essentials',
      count: 8,
      url: 'https://championdogproducts.com/collections/essentials',
      description: 'Must-have items for every dog'
    },
    {
      title: 'Holiday Toys',
      count: 21,
      url: 'https://championdogproducts.com/collections/holiday-toys',
      description: 'Seasonal and festive toys'
    },
    {
      title: 'Collars, Leashes & Harnesses',
      count: 19,
      url: 'https://championdogproducts.com/collections/collars-leashes-harnesses',
      description: 'Quality walking and training equipment'
    },
    {
      title: 'Puzzles, Bowls & Accessories',
      count: 8,
      url: 'https://championdogproducts.com/collections/puzzles-bowls-and-more',
      description: 'Interactive and feeding solutions'
    },
    {
      title: 'Toys',
      count: 34,
      url: 'https://championdogproducts.com/collections/toys',
      description: 'Fun and engaging playtime items'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Champion Dog Supplies</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our carefully curated collection of premium dog products, from essential training gear to engaging toys that will keep your furry friend happy and healthy.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <a
                key={category.title}
                href={category.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold text-blue-900">{category.title}</h2>
                  <span className="text-sm text-gray-500">{category.count} items</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-center">
            Champion Puppy Training was created with one thought in mind. Keeping dogs out of the pound and in loving homes like yours. As our business grew, we understood that our Champion Puppy Owners not only needed the process, they needed the product as well.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Puppy Relief Right Now!</h2>
          <p className="mb-8 max-w-3xl mx-auto">
            No matter where you are at in your puppy's journey, I want to take you to the next level. My goal is to provide Champion Puppy Owners like you with the products and training you need to overcome challenges and even more importantly take advantage of opportunities with your puppy. I've helped thousands of puppy owners just like you, turn their puppy's into Champions.
          </p>
          <a 
            href="https://championdogproducts.com/pages/the-app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
          >
            Download our Free App
          </a>
        </div>
      </section>
    </div>
  );
}

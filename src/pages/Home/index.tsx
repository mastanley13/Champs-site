import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="bg-white">
      <div className="bg-blue-900 border-b-8" style={{ borderColor: 'red' }}>
        <div className="text-center py-16">
          <h1 className="text-white text-4xl font-bold mb-6">
            Welcome to Champion Dog Products
          </h1>
          <button className="bg-white text-blue-900 px-6 py-2 rounded">
            Reserve Your Spot Today
          </button>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-8 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300 border-2 border-gray-200 hover:border-blue-300 transform hover:-translate-y-1">
              <h2 className="font-bold text-2xl mb-4 text-blue-900" style={{ fontFamily: 'Oswald' }}>DAYCARE</h2>
              <Link to="/daycare" className="text-blue-600 hover:text-blue-800 flex items-center group" style={{ fontFamily: 'Oswald' }}>
                Learn More 
                <span className="ml-2 group-hover:ml-3 transition-all duration-300">→</span>
              </Link>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300 border-2 border-gray-200 hover:border-blue-300 transform hover:-translate-y-1">
              <h2 className="font-bold text-2xl mb-4 text-blue-900" style={{ fontFamily: 'Playfair Display' }}>BOARDING</h2>
              <Link to="/boarding" className="text-blue-600 hover:text-blue-800 flex items-center group" style={{ fontFamily: 'Playfair Display' }}>
                Learn More
                <span className="ml-2 group-hover:ml-3 transition-all duration-300">→</span>
              </Link>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300 border-2 border-gray-200 hover:border-blue-300 transform hover:-translate-y-1">
              <h2 className="font-bold text-2xl mb-4 text-blue-900" style={{ fontFamily: 'Roboto Slab' }}>GROOMING</h2>
              <Link to="/grooming" className="text-blue-600 hover:text-blue-800 flex items-center group" style={{ fontFamily: 'Roboto Slab' }}>
                Learn More
                <span className="ml-2 group-hover:ml-3 transition-all duration-300">→</span>
              </Link>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300 border-2 border-gray-200 hover:border-blue-300 transform hover:-translate-y-1">
              <h2 className="font-bold text-2xl mb-4 text-blue-900" style={{ fontFamily: 'Ubuntu' }}>TRAINING</h2>
              <Link to="/training" className="text-blue-600 hover:text-blue-800 flex items-center group" style={{ fontFamily: 'Ubuntu' }}>
                Learn More
                <span className="ml-2 group-hover:ml-3 transition-all duration-300">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
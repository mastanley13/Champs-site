import { Link } from 'react-router-dom';
import { ROUTES } from '../config/routes';

export function EmployeeResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#005596] text-white pt-32 pb-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col items-center">
            {/* Icon Container */}
            <div className="bg-white rounded-full p-4 mb-8 shadow-lg w-32 h-32 flex items-center justify-center overflow-hidden">
              <img 
                src="https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/6798fd8c4f0aeba1445fcd49.gif"
                alt="Employee Resources"
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 className="hero-heading text-5xl text-center mb-6">Employee Resources</h1>
            <p className="text-xl text-center max-w-2xl mx-auto">
              Access your comprehensive guide to managing customer journeys and service delivery at Champ's Dog House
            </p>
          </div>
        </div>
      </section>

      {/* Flowchart Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto relative">
            {/* Main vertical line */}
            <div className="absolute top-0 left-1/2 w-1 bg-[#005596] h-full -translate-x-1/2 z-0"></div>

            {/* Initial Contact Stage */}
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 mb-12 max-w-2xl mx-auto hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -left-3 top-1/2 w-6 h-6 bg-[#005596] rounded-full -translate-y-1/2"></div>
              <div className="text-4xl mb-4 text-[#005596]">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h2 className="text-2xl font-bold text-[#005596] mb-4">Initial Contact</h2>
              <div className="space-y-4">
                <p className="text-gray-600">First point of contact with potential customer</p>
                <div className="grid grid-cols-1 gap-4">
                  <button className="bg-[#005596] text-white text-center py-2 px-4 rounded-lg hover:bg-[#004d8a] transition-colors">
                    View Contact Guidelines
                  </button>
                </div>
              </div>
            </div>

            {/* Information Collection */}
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 mb-12 max-w-2xl mx-auto ml-auto hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -left-3 top-1/2 w-6 h-6 bg-[#005596] rounded-full -translate-y-1/2"></div>
              <div className="text-4xl mb-4 text-[#005596]">
                <i className="fas fa-clipboard-list"></i>
              </div>
              <h2 className="text-2xl font-bold text-[#005596] mb-4">Information Collection</h2>
              <div className="space-y-4">
                <p className="text-gray-600">Gather essential customer and pet information</p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Customer contact details</li>
                  <li>Pet information and history</li>
                  <li>Service requirements</li>
                  <li>Schedule preferences</li>
                </ul>
              </div>
            </div>

            {/* Service Selection */}
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 mb-12 max-w-2xl mx-auto hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -left-3 top-1/2 w-6 h-6 bg-[#005596] rounded-full -translate-y-1/2"></div>
              <div className="text-4xl mb-4 text-[#005596]">
                <i className="fas fa-list-check"></i>
              </div>
              <h2 className="text-2xl font-bold text-[#005596] mb-4">Service Selection</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold text-[#005596] mb-2">Primary Services</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Daycare</li>
                      <li>• Boarding</li>
                      <li>• Grooming</li>
                      <li>• Training</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold text-[#005596] mb-2">Add-on Services</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Bath & Brush</li>
                      <li>• Nail Trim</li>
                      <li>• Special Treats</li>
                      <li>• Extended Play</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Scheduling & Booking */}
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 mb-12 max-w-2xl mx-auto ml-auto hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -left-3 top-1/2 w-6 h-6 bg-[#005596] rounded-full -translate-y-1/2"></div>
              <div className="text-4xl mb-4 text-[#005596]">
                <i className="fas fa-calendar-check"></i>
              </div>
              <h2 className="text-2xl font-bold text-[#005596] mb-4">Scheduling & Booking</h2>
              <div className="space-y-4">
                <p className="text-gray-600">Schedule services and confirm bookings</p>
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-[#005596] text-white text-center py-2 px-4 rounded-lg hover:bg-[#004d8a] transition-colors">
                    Access Calendar
                  </button>
                  <button className="bg-gray-100 text-[#005596] text-center py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                    Booking Rules
                  </button>
                </div>
              </div>
            </div>

            {/* Service Delivery */}
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 mb-12 max-w-2xl mx-auto hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -left-3 top-1/2 w-6 h-6 bg-[#005596] rounded-full -translate-y-1/2"></div>
              <div className="text-4xl mb-4 text-[#005596]">
                <i className="fas fa-paw"></i>
              </div>
              <h2 className="text-2xl font-bold text-[#005596] mb-4">Service Delivery</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold text-[#005596] mb-2">Service Standards</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Safety protocols</li>
                      <li>• Quality checks</li>
                      <li>• Progress tracking</li>
                      <li>• Documentation</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold text-[#005596] mb-2">Monitoring</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Health checks</li>
                      <li>• Behavior notes</li>
                      <li>• Activity logs</li>
                      <li>• Photo updates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow-up & Feedback */}
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 mb-8 max-w-2xl mx-auto ml-auto hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -left-3 top-1/2 w-6 h-6 bg-[#005596] rounded-full -translate-y-1/2"></div>
              <div className="text-4xl mb-4 text-[#005596]">
                <i className="fas fa-comments"></i>
              </div>
              <h2 className="text-2xl font-bold text-[#005596] mb-4">Follow-up & Feedback</h2>
              <div className="space-y-4">
                <p className="text-gray-600">Collect feedback and maintain customer relationship</p>
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-[#005596] text-white text-center py-2 px-4 rounded-lg hover:bg-[#004d8a] transition-colors">
                    Send Survey
                  </button>
                  <button className="bg-gray-100 text-[#005596] text-center py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                    Schedule Next Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="bg-[#005596] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
          <p className="mb-6">Contact our support team for assistance with any step of the process</p>
          <a
            href="mailto:support@champsdoghouse.com"
            className="inline-block bg-white text-[#005596] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </section>
    </div>
  );
} 
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function EmployeeResourcesPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeNavSection, setActiveNavSection] = useState<string | null>('main');
  
  const toggleSection = (section: string) => {
    setActiveSection(prev => prev === section ? null : section);
  };
  
  const toggleNavSection = (section: string) => {
    setActiveNavSection(prev => prev === section ? null : section);
  };
  
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

      {/* Navigation Menu Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#005596] mb-8 text-center">Navigation Resources</h2>
          <div className="max-w-7xl mx-auto relative">
            {/* Redesigned Navigation Layout - Side by Side with Content */}
            <div className="flex flex-col lg:flex-row justify-center gap-6 mb-12">
              {/* Navigation Buttons - Vertical Stack on Left */}
              <div className="flex flex-row lg:flex-col justify-center gap-4 lg:w-1/4">
                {/* Main Navigation */}
                <div 
                  className={`relative z-10 ${activeNavSection === 'main' ? 'bg-[#005596] text-white translate-x-4 lg:translate-x-6 translate-y-0' : 'bg-[#e5f0f9]'} rounded-xl shadow-lg p-5 hover:shadow-xl transition-all duration-300 w-full text-center cursor-pointer transform hover:translate-x-2 lg:hover:translate-x-4 border-2 ${activeNavSection === 'main' ? 'border-[#00416e]' : 'border-transparent'}`}
                  onClick={() => toggleNavSection('main')}
                >
                  <h3 className={`text-xl font-bold ${activeNavSection === 'main' ? 'text-white' : 'text-[#005596]'}`}>Main Navigation</h3>
                </div>
                
                {/* Customer Portal */}
                <div 
                  className={`relative z-10 ${activeNavSection === 'portal' ? 'bg-[#005596] text-white translate-x-4 lg:translate-x-6 translate-y-0' : 'bg-[#e5f0f9]'} rounded-xl shadow-lg p-5 hover:shadow-xl transition-all duration-300 w-full text-center cursor-pointer transform hover:translate-x-2 lg:hover:translate-x-4 border-2 ${activeNavSection === 'portal' ? 'border-[#00416e]' : 'border-transparent'}`}
                  onClick={() => toggleNavSection('portal')}
                >
                  <h3 className={`text-xl font-bold ${activeNavSection === 'portal' ? 'text-white' : 'text-[#005596]'}`}>Customer Portal</h3>
                </div>
                
                {/* External Systems */}
                <div 
                  className={`relative z-10 ${activeNavSection === 'external' ? 'bg-[#005596] text-white translate-x-4 lg:translate-x-6 translate-y-0' : 'bg-[#e5f0f9]'} rounded-xl shadow-lg p-5 hover:shadow-xl transition-all duration-300 w-full text-center cursor-pointer transform hover:translate-x-2 lg:hover:translate-x-4 border-2 ${activeNavSection === 'external' ? 'border-[#00416e]' : 'border-transparent'}`}
                  onClick={() => toggleNavSection('external')}
                >
                  <h3 className={`text-xl font-bold ${activeNavSection === 'external' ? 'text-white' : 'text-[#005596]'}`}>External Systems</h3>
                </div>
              </div>

              {/* Content Area - Right Side Panel */}
              <div className="lg:w-3/4 relative">
                {/* Decorative Connector Line - Vertical for desktop */}
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-1 bg-[#005596]">
                  <div className={`absolute top-0 left-0 w-full h-full ${activeNavSection ? 'animate-pulse' : ''} bg-[#0077cc] opacity-30`}></div>
                </div>
                
                {/* Content Panels */}
                <div className="pl-0 lg:pl-10 relative">
                  {/* Dynamic Card Container - All cards visible but only active one prominent */}
                  <div className="relative min-h-[350px]">
                    {/* Default Content - Shown when no section is selected */}
                    <div 
                      className={`absolute inset-0 transition-all duration-500 ${
                        activeNavSection === null 
                          ? 'opacity-100 z-30 transform-none' 
                          : 'opacity-0 z-10 scale-95 pointer-events-none'
                      }`}
                    >
                      <div className={`h-full overflow-y-auto bg-white rounded-xl shadow-lg p-6 transition-all duration-300 border-2 border-dashed border-[#005596] border-opacity-50`}>
                        <div className="h-full flex flex-col justify-center items-center text-center">
                          <div className="w-20 h-20 bg-[#e5f0f9] rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#005596]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-[#005596] mb-3">Navigation Resources</h3>
                          <p className="text-gray-600 mb-4 max-w-md">Select one of the navigation options on the left to view detailed information about that section.</p>
                          <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
                            <div 
                              className="bg-[#e5f0f9] p-3 rounded-lg text-center cursor-pointer hover:bg-[#005596] hover:text-white transition-all duration-300"
                              onClick={() => toggleNavSection('main')}
                            >
                              <p className="text-sm font-medium">Main Navigation</p>
                            </div>
                            <div 
                              className="bg-[#e5f0f9] p-3 rounded-lg text-center cursor-pointer hover:bg-[#005596] hover:text-white transition-all duration-300"
                              onClick={() => toggleNavSection('portal')}
                            >
                              <p className="text-sm font-medium">Customer Portal</p>
                            </div>
                            <div 
                              className="bg-[#e5f0f9] p-3 rounded-lg text-center cursor-pointer hover:bg-[#005596] hover:text-white transition-all duration-300"
                              onClick={() => toggleNavSection('external')}
                            >
                              <p className="text-sm font-medium">External Systems</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Main Navigation Content */}
                    <div 
                      className={`absolute inset-0 transition-all duration-500 ${
                        activeNavSection === 'main' 
                          ? 'opacity-100 z-30 transform-none' 
                          : activeNavSection === null 
                            ? 'opacity-0 z-10 scale-95 pointer-events-none' 
                            : 'opacity-30 z-10 scale-90 translate-y-4'
                      }`}
                    >
                      <div className={`h-full overflow-y-auto bg-white ${activeNavSection === 'main' ? 'bg-[#b8d8f2]' : ''} rounded-xl shadow-lg p-6 transition-all duration-300 border-2 ${activeNavSection === 'main' ? 'border-[#00416e]' : 'border-transparent'}`}>
                        <nav className="space-y-3">
                          {['Home', 'Daycare', 'Boarding', 'Grooming', 'Training', 'Supply', 'Contact', 'About Us'].map((item) => (
                            <Link 
                              key={item} 
                              to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                              className="flex items-center p-2 rounded-lg hover:bg-[#e5f0f9] transition-colors"
                            >
                              <span className="w-2 h-2 bg-[#005596] rounded-full mr-3 flex-shrink-0"></span>
                              <span className="font-medium text-[#005596] truncate">{item}</span>
                            </Link>
                          ))}
                        </nav>
                      </div>
                    </div>

                    {/* Customer Portal Content */}
                    <div 
                      className={`absolute inset-0 transition-all duration-500 ${
                        activeNavSection === 'portal' 
                          ? 'opacity-100 z-30 transform-none' 
                          : activeNavSection === null 
                            ? 'opacity-0 z-10 scale-95 pointer-events-none' 
                            : 'opacity-30 z-10 scale-90 translate-y-4'
                      }`}
                    >
                      <div className={`h-full overflow-y-auto bg-white ${activeNavSection === 'portal' ? 'bg-[#b8d8f2]' : ''} rounded-xl shadow-lg p-6 transition-all duration-300 border-2 ${activeNavSection === 'portal' ? 'border-[#00416e]' : 'border-transparent'}`}>
                        <div className="h-full flex flex-col">
                          <div className="mb-4 flex-1">
                            <h4 className="font-bold text-[#005596] mb-3 border-b pb-2">Access Points</h4>
                            <ul className="space-y-2">
                              {['Login Page', 'Register Page', 'Portal Page'].map((item) => (
                                <li key={item} className="flex items-center p-2 rounded-lg hover:bg-[#e5f0f9] transition-colors">
                                  <span className="w-2 h-2 bg-[#005596] rounded-full mr-3 flex-shrink-0"></span>
                                  <span className="font-medium text-[#005596] text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-[#005596] mb-3 border-b pb-2">Features</h4>
                            <ul className="space-y-2">
                              {['Welcome Banner', 'Pet Cards - Actions', 'Vaccination Information'].map((item) => (
                                <li key={item} className="flex items-center p-2 rounded-lg hover:bg-[#e5f0f9] transition-colors">
                                  <span className="w-2 h-2 bg-[#005596] rounded-full mr-3 flex-shrink-0"></span>
                                  <span className="font-medium text-[#005596] text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* External Systems Content */}
                    <div 
                      className={`absolute inset-0 transition-all duration-500 ${
                        activeNavSection === 'external' 
                          ? 'opacity-100 z-30 transform-none' 
                          : activeNavSection === null 
                            ? 'opacity-0 z-10 scale-95 pointer-events-none' 
                            : 'opacity-30 z-10 scale-90 translate-y-4'
                      }`}
                    >
                      <div className={`h-full overflow-y-auto bg-white ${activeNavSection === 'external' ? 'bg-[#b8d8f2]' : ''} rounded-xl shadow-lg p-6 transition-all duration-300 border-2 ${activeNavSection === 'external' ? 'border-[#00416e]' : 'border-transparent'}`}>
                        <div className="h-full flex flex-col justify-center">
                          <h4 className="font-bold text-[#005596] mb-3 border-b pb-2">Integrations</h4>
                          <ul className="space-y-2">
                            {['External Shopify Store', 'Form Submission System'].map((item) => (
                              <li key={item} className="flex items-center p-2 rounded-lg hover:bg-[#e5f0f9] transition-colors">
                                <span className="w-2 h-2 bg-[#005596] rounded-full mr-3 flex-shrink-0"></span>
                                <span className="font-medium text-[#005596] text-sm whitespace-normal break-words">{item}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <h4 className="font-bold text-[#005596] mb-3 mt-5 border-b pb-2">Additional Resources</h4>
                          <ul className="space-y-2">
                            {['Welcome Banner', 'Pet Cards - Actions'].map((item) => (
                              <li key={item} className="flex items-center p-2 rounded-lg hover:bg-[#e5f0f9] transition-colors">
                                <span className="w-2 h-2 bg-[#005596] rounded-full mr-3 flex-shrink-0"></span>
                                <span className="font-medium text-[#005596] text-sm whitespace-normal break-words">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Horizontal Connector Line at Bottom */}
            <div className="w-full flex justify-center mb-4">
              <div className="h-10 w-1 bg-[#005596] relative">
                <div className={`absolute top-0 left-0 w-full ${activeNavSection ? 'animate-pulse' : ''} bg-[#0077cc] h-full opacity-30`}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Flows Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#005596] mb-8 text-center">Service Workflows</h2>
          
          {/* Legend - Moved to right below the header */}
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 mb-10">
            <h3 className="text-xl font-bold text-[#005596] mb-4 text-center border-b pb-2">Flowchart Legend</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
              <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                <div className="w-8 h-8 bg-[#e5f0f9] rounded-lg mr-3 flex-shrink-0 shadow"></div>
                <span className="text-gray-700">Process Step</span>
              </div>
              <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                <div className="w-6 h-6 bg-[#e5f0f9] rounded-lg transform rotate-45 mr-3 flex-shrink-0 shadow"></div>
                <span className="text-gray-700">Decision Point</span>
              </div>
              <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                <div className="h-8 w-1 bg-[#005596] mr-3 flex-shrink-0 shadow"></div>
                <span className="text-gray-700">Process Flow</span>
              </div>
              <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                <div className="w-8 h-8 bg-[#005596] rounded-lg mr-3 flex-shrink-0 shadow"></div>
                <span className="text-gray-700">Active Selection</span>
              </div>
              <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                <div className="w-8 h-8 border-2 border-[#00416e] bg-[#e5f0f9] rounded-lg mr-3 flex-shrink-0 shadow"></div>
                <span className="text-gray-700">Related Element</span>
              </div>
              <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                <div className="h-8 w-1 bg-[#005596] mr-3 flex-shrink-0 shadow relative">
                  <div className="absolute top-0 left-0 w-full bg-[#0077cc] animate-pulse h-full opacity-30"></div>
                </div>
                <span className="text-gray-700">Active Flow</span>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-sm text-center">
              <p className="text-[#005596] font-medium">Click on service buttons (Boarding, Training, Grooming) to highlight their workflow paths</p>
              <p className="text-gray-600 mt-2">Each service has its own workflow that allows employees to understand the process and steps involved</p>
            </div>
          </div>
          
          {/* Flowchart Container */}
          <div className="max-w-7xl mx-auto relative">
            {/* Main Services Row */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {/* Boarding Button */}
              <div 
                className={`relative z-10 ${activeSection === 'boarding' ? 'bg-[#005596] text-white' : 'bg-[#e5f0f9]'} rounded-xl shadow-lg p-5 hover:shadow-xl transition-all duration-300 w-64 text-center cursor-pointer transform hover:-translate-y-1 border-2 ${activeSection === 'boarding' ? 'border-[#00416e]' : 'border-transparent'}`}
                onClick={() => toggleSection('boarding')}
              >
                <h3 className={`text-xl font-bold ${activeSection === 'boarding' ? 'text-white' : 'text-[#005596]'}`}>Boarding Button</h3>
              </div>
              
              {/* Training Button */}
              <div 
                className={`relative z-10 ${activeSection === 'training' ? 'bg-[#005596] text-white' : 'bg-[#e5f0f9]'} rounded-xl shadow-lg p-5 hover:shadow-xl transition-all duration-300 w-64 text-center cursor-pointer transform hover:-translate-y-1 border-2 ${activeSection === 'training' ? 'border-[#00416e]' : 'border-transparent'}`}
                onClick={() => toggleSection('training')}
              >
                <h3 className={`text-xl font-bold ${activeSection === 'training' ? 'text-white' : 'text-[#005596]'}`}>Training Button</h3>
              </div>
              
              {/* Grooming Button */}
              <div 
                className={`relative z-10 ${activeSection === 'grooming' ? 'bg-[#005596] text-white' : 'bg-[#e5f0f9]'} rounded-xl shadow-lg p-5 hover:shadow-xl transition-all duration-300 w-64 text-center cursor-pointer transform hover:-translate-y-1 border-2 ${activeSection === 'grooming' ? 'border-[#00416e]' : 'border-transparent'}`}
                onClick={() => toggleSection('grooming')}
              >
                <h3 className={`text-xl font-bold ${activeSection === 'grooming' ? 'text-white' : 'text-[#005596]'}`}>Grooming Button</h3>
              </div>
            </div>

            {/* Connector Lines */}
            <div className="w-full flex justify-center mb-4">
              <div className="h-10 w-1 bg-[#005596]"></div>
            </div>
            
            {/* API Services Row */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className={`relative z-10 ${activeSection === 'boarding' ? 'bg-[#b8d8f2] scale-105' : 'bg-[#e5f0f9]'} rounded-xl shadow-lg p-5 hover:shadow-xl transition-all duration-300 w-64 text-center border ${activeSection === 'boarding' ? 'border-[#00416e]' : 'border-transparent'}`}>
                <h3 className="text-lg font-bold text-[#005596] mb-2">Boarding Page - API</h3>
                <p className="text-sm">Check for Previous Boarding</p>
              </div>
              
              <div className={`relative z-10 ${activeSection === 'training' ? 'bg-[#b8d8f2] scale-105' : 'bg-[#e5f0f9]'} rounded-xl shadow-lg p-5 hover:shadow-xl transition-all duration-300 w-64 text-center border ${activeSection === 'training' ? 'border-[#00416e]' : 'border-transparent'}`}>
                <h3 className="text-lg font-bold text-[#005596] mb-2">Training Status - API</h3>
                <p className="text-sm">Check for Previous Training</p>
              </div>
              
              <div className={`relative z-10 ${activeSection === 'grooming' ? 'bg-[#b8d8f2] scale-105' : 'bg-[#e5f0f9]'} rounded-xl shadow-lg p-5 hover:shadow-xl transition-all duration-300 w-64 text-center border ${activeSection === 'grooming' ? 'border-[#00416e]' : 'border-transparent'}`}>
                <h3 className="text-lg font-bold text-[#005596] mb-2">Grooming Button</h3>
                <p className="text-sm">Confirm Pop-Up</p>
              </div>
            </div>

            {/* Connector Lines with Animation */}
            <div className="w-full flex justify-center mb-4">
              <div className="h-10 w-1 bg-[#005596] relative">
                <div className={`absolute top-0 left-0 w-full ${activeSection ? 'animate-pulse' : ''} bg-[#0077cc] h-full opacity-30`}></div>
              </div>
            </div>

            {/* Diamond Decision Nodes */}
            <div className="flex flex-wrap justify-center gap-20 mb-12">
              <div className={`flex flex-col items-center ${activeSection !== 'boarding' && activeSection !== null ? 'opacity-50' : 'opacity-100'} transition-opacity duration-300`}>
                <div className={`relative z-10 ${activeSection === 'boarding' ? 'bg-[#b8d8f2]' : 'bg-[#e5f0f9]'} w-40 h-40 rounded-lg shadow-lg flex items-center justify-center transform rotate-45 hover:shadow-xl transition-all duration-300 border-2 ${activeSection === 'boarding' ? 'border-[#00416e]' : 'border-transparent'}`}>
                  <div className="transform -rotate-45 text-center px-2">
                    <h4 className="font-bold text-[#005596]">Previously Boarded?</h4>
                  </div>
                </div>
                {/* Connector Lines */}
                <div className="h-10 w-1 bg-[#005596] mt-6 relative">
                  <div className={`absolute top-0 left-0 w-full ${activeSection === 'boarding' ? 'animate-pulse' : ''} bg-[#0077cc] h-full opacity-30`}></div>
                </div>
              </div>
              
              <div className={`flex flex-col items-center ${activeSection !== 'training' && activeSection !== null ? 'opacity-50' : 'opacity-100'} transition-opacity duration-300`}>
                <div className={`relative z-10 ${activeSection === 'training' ? 'bg-[#b8d8f2]' : 'bg-[#e5f0f9]'} w-40 h-40 rounded-lg shadow-lg flex items-center justify-center transform rotate-45 hover:shadow-xl transition-all duration-300 border-2 ${activeSection === 'training' ? 'border-[#00416e]' : 'border-transparent'}`}>
                  <div className="transform -rotate-45 text-center px-2">
                    <h4 className="font-bold text-[#005596]">Previous Training?</h4>
                  </div>
                </div>
                {/* Connector Lines */}
                <div className="h-10 w-1 bg-[#005596] mt-6 relative">
                  <div className={`absolute top-0 left-0 w-full ${activeSection === 'training' ? 'animate-pulse' : ''} bg-[#0077cc] h-full opacity-30`}></div>
                </div>
              </div>
              
              <div className={`flex flex-col items-center ${activeSection !== 'grooming' && activeSection !== null ? 'opacity-50' : 'opacity-100'} transition-opacity duration-300`}>
                <div className={`relative z-10 ${activeSection === 'grooming' ? 'bg-[#b8d8f2]' : 'bg-[#e5f0f9]'} w-40 h-40 rounded-lg shadow-lg flex items-center justify-center transform rotate-45 hover:shadow-xl transition-all duration-300 border-2 ${activeSection === 'grooming' ? 'border-[#00416e]' : 'border-transparent'}`}>
                  <div className="transform -rotate-45 text-center px-2">
                    <h4 className="font-bold text-[#005596]">Pop-Up: Pet Name & Schedule Grooming Option</h4>
                  </div>
                </div>
                {/* Connector Lines */}
                <div className="h-10 w-1 bg-[#005596] mt-6 relative">
                  <div className={`absolute top-0 left-0 w-full ${activeSection === 'grooming' ? 'animate-pulse' : ''} bg-[#0077cc] h-full opacity-30`}></div>
                </div>
              </div>
            </div>

            {/* Yes/No Paths */}
            <div className="flex flex-wrap justify-center gap-10 mb-12">
              {/* Boarding Paths */}
              <div className={`grid grid-cols-2 gap-10 ${activeSection !== 'boarding' && activeSection !== null ? 'opacity-50' : 'opacity-100'} transition-opacity duration-300`}>
                <div className="flex flex-col items-center">
                  <div className={`relative z-10 ${activeSection === 'boarding' ? 'bg-[#b8d8f2]' : 'bg-[#e5f0f9]'} rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 w-52 text-center border ${activeSection === 'boarding' ? 'border-[#00416e]' : 'border-transparent'}`}>
                    <h4 className="font-bold text-[#005596] mb-1">No - Display Boarding Process Overview</h4>
                  </div>
                  {/* Connector Lines */}
                  <div className="h-8 w-1 bg-[#005596] my-2 relative">
                    <div className={`absolute top-0 left-0 w-full ${activeSection === 'boarding' ? 'animate-pulse' : ''} bg-[#0077cc] h-full opacity-30`}></div>
                  </div>
                  <div className={`relative z-10 ${activeSection === 'boarding' ? 'bg-[#b8d8f2]' : 'bg-[#e5f0f9]'} rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 w-52 text-center border ${activeSection === 'boarding' ? 'border-[#00416e]' : 'border-transparent'}`}>
                    <h4 className="text-sm font-bold text-[#005596]">Acknowledgement Completion</h4>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className={`relative z-10 ${activeSection === 'boarding' ? 'bg-[#b8d8f2]' : 'bg-[#e5f0f9]'} rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 w-52 text-center border ${activeSection === 'boarding' ? 'border-[#00416e]' : 'border-transparent'}`}>
                    <h4 className="font-bold text-[#005596] mb-1">Yes - Suggested Categories</h4>
                  </div>
                  {/* Connector Lines */}
                  <div className="h-8 w-1 bg-[#005596] my-2 relative">
                    <div className={`absolute top-0 left-0 w-full ${activeSection === 'boarding' ? 'animate-pulse' : ''} bg-[#0077cc] h-full opacity-30`}></div>
                  </div>
                  <div className={`relative z-10 ${activeSection === 'boarding' ? 'bg-[#b8d8f2]' : 'bg-[#e5f0f9]'} rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 w-52 text-center border ${activeSection === 'boarding' ? 'border-[#00416e]' : 'border-transparent'}`}>
                    <h4 className="text-sm font-bold text-[#005596]">Announcement Area - Remaining Options</h4>
                  </div>
                </div>
              </div>
              
              {/* Training Paths */}
              <div className={`grid grid-cols-2 gap-10 ${activeSection !== 'training' && activeSection !== null ? 'opacity-50' : 'opacity-100'} transition-opacity duration-300`}>
                <div className="flex flex-col items-center">
                  <div className={`relative z-10 ${activeSection === 'training' ? 'bg-[#b8d8f2]' : 'bg-[#e5f0f9]'} rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 w-52 text-center border ${activeSection === 'training' ? 'border-[#00416e]' : 'border-transparent'}`}>
                    <h4 className="font-bold text-[#005596] mb-1">No - Access Training Portal</h4>
                  </div>
                  {/* Connector Lines */}
                  <div className="h-8 w-1 bg-[#005596] my-2 relative">
                    <div className={`absolute top-0 left-0 w-full ${activeSection === 'training' ? 'animate-pulse' : ''} bg-[#0077cc] h-full opacity-30`}></div>
                  </div>
                  <div className={`relative z-10 ${activeSection === 'training' ? 'bg-[#b8d8f2]' : 'bg-[#e5f0f9]'} rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 w-52 text-center border ${activeSection === 'training' ? 'border-[#00416e]' : 'border-transparent'}`}>
                    <h4 className="text-sm font-bold text-[#005596]">Onboarding - Show Next Session</h4>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className={`relative z-10 ${activeSection === 'training' ? 'bg-[#b8d8f2]' : 'bg-[#e5f0f9]'} rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 w-52 text-center border ${activeSection === 'training' ? 'border-[#00416e]' : 'border-transparent'}`}>
                    <h4 className="font-bold text-[#005596] mb-1">Yes - Suggested Training Picks</h4>
                  </div>
                  {/* Connector Lines */}
                  <div className="h-8 w-1 bg-[#005596] my-2 relative">
                    <div className={`absolute top-0 left-0 w-full ${activeSection === 'training' ? 'animate-pulse' : ''} bg-[#0077cc] h-full opacity-30`}></div>
                  </div>
                  <div className={`relative z-10 ${activeSection === 'training' ? 'bg-[#b8d8f2]' : 'bg-[#e5f0f9]'} rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 w-52 text-center border ${activeSection === 'training' ? 'border-[#00416e]' : 'border-transparent'}`}>
                    <h4 className="text-sm font-bold text-[#005596]">Course Links - Access Training Materials</h4>
                  </div>
                </div>
              </div>
              
              {/* Grooming Paths */}
              <div className={`grid grid-cols-2 gap-10 ${activeSection !== 'grooming' && activeSection !== null ? 'opacity-50' : 'opacity-100'} transition-opacity duration-300`}>
                <div className="flex flex-col items-center">
                  <div className={`relative z-10 ${activeSection === 'grooming' ? 'bg-[#b8d8f2]' : 'bg-[#e5f0f9]'} rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 w-52 text-center border ${activeSection === 'grooming' ? 'border-[#00416e]' : 'border-transparent'}`}>
                    <h4 className="font-bold text-[#005596] mb-1">No - Redirect to Scheduling</h4>
                  </div>
                  {/* Connector Lines */}
                  <div className="h-8 w-1 bg-[#005596] my-2 relative">
                    <div className={`absolute top-0 left-0 w-full ${activeSection === 'grooming' ? 'animate-pulse' : ''} bg-[#0077cc] h-full opacity-30`}></div>
                  </div>
                  <div className={`relative z-10 ${activeSection === 'grooming' ? 'bg-[#b8d8f2]' : 'bg-[#e5f0f9]'} rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 w-52 text-center border ${activeSection === 'grooming' ? 'border-[#00416e]' : 'border-transparent'}`}>
                    <h4 className="text-sm font-bold text-[#005596]">Register New Pet</h4>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className={`relative z-10 ${activeSection === 'grooming' ? 'bg-[#b8d8f2]' : 'bg-[#e5f0f9]'} rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 w-52 text-center border ${activeSection === 'grooming' ? 'border-[#00416e]' : 'border-transparent'}`}>
                    <h4 className="font-bold text-[#005596] mb-1">Redirect to Calendar Booking Page</h4>
                  </div>
                  {/* Connector Lines */}
                  <div className="h-8 w-1 bg-[#005596] my-2 relative">
                    <div className={`absolute top-0 left-0 w-full ${activeSection === 'grooming' ? 'animate-pulse' : ''} bg-[#0077cc] h-full opacity-30`}></div>
                  </div>
                  <div className={`relative z-10 ${activeSection === 'grooming' ? 'bg-[#b8d8f2]' : 'bg-[#e5f0f9]'} rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 w-52 text-center border ${activeSection === 'grooming' ? 'border-[#00416e]' : 'border-transparent'}`}>
                    <h4 className="text-sm font-bold text-[#005596]">Service Selection - Choose Grooming Service</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Process Outputs Row */}
            <div className="flex flex-wrap justify-center gap-8 mb-6">
              <div className={`relative z-10 ${activeSection === 'boarding' ? 'bg-[#b8d8f2] scale-105' : 'bg-[#e5f0f9]'} rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 w-64 text-center border-2 ${activeSection === 'boarding' ? 'border-[#00416e]' : 'border-transparent'}`}>
                <h3 className="text-lg font-bold text-[#005596] mb-2">Complete Boarding Flow</h3>
                <p className="text-sm">Calendar Features, Dates and Bookings</p>
              </div>
              
              <div className={`relative z-10 ${activeSection === 'training' ? 'bg-[#b8d8f2] scale-105' : 'bg-[#e5f0f9]'} rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 w-64 text-center border-2 ${activeSection === 'training' ? 'border-[#00416e]' : 'border-transparent'}`}>
                <h3 className="text-lg font-bold text-[#005596] mb-2">Complete Training Flow</h3>
                <p className="text-sm">Pet Card Information, Task Sent to Staff</p>
              </div>
              
              <div className={`relative z-10 ${activeSection === 'grooming' ? 'bg-[#b8d8f2] scale-105' : 'bg-[#e5f0f9]'} rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 w-64 text-center border-2 ${activeSection === 'grooming' ? 'border-[#00416e]' : 'border-transparent'}`}>
                <h3 className="text-lg font-bold text-[#005596] mb-2">Appointment Information</h3>
                <p className="text-sm">Schedule Appointment</p>
              </div>
            </div>

            {/* Experience Flow Connectors */}
            <div className="w-full flex justify-center mb-4">
              <div className="h-10 w-1 bg-[#005596] relative">
                <div className={`absolute top-0 left-0 w-full ${activeSection ? 'animate-pulse' : ''} bg-[#0077cc] h-full opacity-30`}></div>
              </div>
            </div>

            {/* Customer/Staff Experience Sections */}
            <div className="flex flex-wrap justify-center gap-10">
              <div className="relative z-10 bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow duration-300 w-80 text-center">
                <h3 className="text-lg font-bold text-[#005596] mb-4 border-b pb-2">Customer Experience</h3>
                <ul className="text-sm text-left space-y-3 pl-4">
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#005596] rounded-full mr-3"></span><span className="text-gray-700">Confirmation Email</span></li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#005596] rounded-full mr-3"></span><span className="text-gray-700">Calendar Integration</span></li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#005596] rounded-full mr-3"></span><span className="text-gray-700">Email Reminders</span></li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#005596] rounded-full mr-3"></span><span className="text-gray-700">Task Sent Forms</span></li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#005596] rounded-full mr-3"></span><span className="text-gray-700">Notes and Observations</span></li>
                </ul>
              </div>
              
              <div className="relative z-10 bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow duration-300 w-80 text-center">
                <h3 className="text-lg font-bold text-[#005596] mb-4 border-b pb-2">Staff Experience</h3>
                <ul className="text-sm text-left space-y-3 pl-4">
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#005596] rounded-full mr-3"></span><span className="text-gray-700">Appointment Creation</span></li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#005596] rounded-full mr-3"></span><span className="text-gray-700">Dashboard Updates</span></li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#005596] rounded-full mr-3"></span><span className="text-gray-700">Pet Notes Updates</span></li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#005596] rounded-full mr-3"></span><span className="text-gray-700">Follow-up Scheduling</span></li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-[#005596] rounded-full mr-3"></span><span className="text-gray-700">Report Generation</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Original Flowchart Section (Refined) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#005596] mb-3 text-center">Comprehensive Customer Journey</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">A detailed walkthrough of the end-to-end process for client onboarding and service delivery at Champ's Dog House</p>
          
          <div className="max-w-6xl mx-auto relative">
            {/* Initial Contact - Larger Section */}
            <div className="flex justify-center mb-12">
              <div className="bg-white border-2 border-[#005596] rounded-xl shadow-lg p-8 w-full max-w-3xl text-center relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#005596] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl shadow-md">1</div>
                <h3 className="text-2xl font-bold text-[#005596] mb-4">Initial Contact</h3>
                <div className="bg-[#e5f0f9] p-6 rounded-lg mb-6">
                  <p className="text-lg mb-4">Customer reaches out via phone or website contact form. Our staff gathers initial information and determines service needs.</p>
                  <ul className="text-left mx-auto max-w-md mb-4">
                    <li className="flex items-start mb-3">
                      <span className="w-2 h-2 bg-[#005596] rounded-full mr-3 mt-2"></span>
                      <span>Customers may call our main line or submit an inquiry through the website</span>
                    </li>
                    <li className="flex items-start mb-3">
                      <span className="w-2 h-2 bg-[#005596] rounded-full mr-3 mt-2"></span>
                      <span>Initial screening questions help determine which services are appropriate</span>
                    </li>
                    <li className="flex items-start mb-3">
                      <span className="w-2 h-2 bg-[#005596] rounded-full mr-3 mt-2"></span>
                      <span>Availability is checked before proceeding to information collection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#005596] rounded-full mr-3 mt-2"></span>
                      <span>Staff confirms customer contact details for follow-up communication</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <button className="bg-[#005596] text-white px-8 py-3 rounded-lg hover:bg-[#00416e] transition-colors mx-auto flex items-center shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    Continue Process <span className="ml-2">↓</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Connector Line with Dots and Animation */}
            <div className="w-full flex justify-center mb-12">
              <div className="h-16 w-1 bg-[#005596] relative">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#005596] rounded-full"></div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#005596] rounded-full"></div>
                <div className="absolute top-0 left-0 h-full w-full bg-[#0077cc] opacity-30 animate-pulse"></div>
              </div>
            </div>
            
            {/* Information Collected - Larger Section */}
            <div className="flex justify-center mb-12">
              <div className="bg-white border-2 border-[#005596] rounded-xl shadow-lg p-8 w-full max-w-3xl text-center relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#005596] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl shadow-md">2</div>
                <h3 className="text-2xl font-bold text-[#005596] mb-4">Information Collection</h3>
                <div className="bg-[#e5f0f9] p-6 rounded-lg mb-6">
                  <p className="text-lg mb-4">Staff collects detailed information about the customer and their pets to ensure proper service delivery and personalized care.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4 text-left">
                    <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-[#005596] mb-3 border-b border-[#005596] pb-2">Customer Details</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#005596] rounded-full mr-3 mt-2"></span>
                          <span>Full contact information</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#005596] rounded-full mr-3 mt-2"></span>
                          <span>Address and preferred phone</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#005596] rounded-full mr-3 mt-2"></span>
                          <span>Emergency contacts (2 required)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#005596] rounded-full mr-3 mt-2"></span>
                          <span>Communication preferences</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-[#005596] mb-3 border-b border-[#005596] pb-2">Pet Information</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#005596] rounded-full mr-3 mt-2"></span>
                          <span>Health history and conditions</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#005596] rounded-full mr-3 mt-2"></span>
                          <span>Behavioral notes and triggers</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#005596] rounded-full mr-3 mt-2"></span>
                          <span>Vaccination records (verified)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#005596] rounded-full mr-3 mt-2"></span>
                          <span>Diet requirements and allergies</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="bg-[#005596] text-white px-8 py-3 rounded-lg hover:bg-[#00416e] transition-colors mx-auto flex items-center shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    Select Service <span className="ml-2">↓</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Connector Line with Dots and Animation */}
            <div className="w-full flex justify-center mb-12">
              <div className="h-16 w-1 bg-[#005596] relative">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#005596] rounded-full"></div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#005596] rounded-full"></div>
                <div className="absolute top-0 left-0 h-full w-full bg-[#0077cc] opacity-30 animate-pulse"></div>
              </div>
            </div>
            
            {/* Service Selection - Larger Section */}
            <div className="flex justify-center mb-12">
              <div className="bg-white border-2 border-[#005596] rounded-xl shadow-lg p-8 w-full max-w-3xl text-center relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#005596] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl shadow-md">3</div>
                <h3 className="text-2xl font-bold text-[#005596] mb-4">Service Selection</h3>
                <div className="bg-[#e5f0f9] p-6 rounded-lg mb-6">
                  <p className="text-lg mb-5">Based on the customer's needs and pet requirements, the appropriate service path is selected and customized for optimal care.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-transparent hover:border-[#005596]">
                      <div className="w-16 h-16 bg-[#e5f0f9] rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#005596]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-[#005596] mb-2">Boarding</h4>
                      <p className="text-sm mb-3">Overnight stays with full care</p>
                      <div className="w-16 h-1 bg-[#005596] mx-auto mb-3"></div>
                      <p className="text-xs">Room selection, feeding schedule, activity preferences</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-transparent hover:border-[#005596]">
                      <div className="w-16 h-16 bg-[#e5f0f9] rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#005596]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-[#005596] mb-2">Training</h4>
                      <p className="text-sm mb-3">Behavior and obedience</p>
                      <div className="w-16 h-1 bg-[#005596] mx-auto mb-3"></div>
                      <p className="text-xs">Program type, goals, evaluation of current skills</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-transparent hover:border-[#005596]">
                      <div className="w-16 h-16 bg-[#e5f0f9] rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#005596]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-[#005596] mb-2">Grooming</h4>
                      <p className="text-sm mb-3">Complete pet styling</p>
                      <div className="w-16 h-1 bg-[#005596] mx-auto mb-3"></div>
                      <p className="text-xs">Service type, special handling needs, style preferences</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="bg-[#005596] text-white px-8 py-3 rounded-lg hover:bg-[#00416e] transition-colors mx-auto flex items-center shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    Complete Booking <span className="ml-2">↓</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Connector Line with Dots and Animation */}
            <div className="w-full flex justify-center mb-12">
              <div className="h-16 w-1 bg-[#005596] relative">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#005596] rounded-full"></div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#005596] rounded-full"></div>
                <div className="absolute top-0 left-0 h-full w-full bg-[#0077cc] opacity-30 animate-pulse"></div>
              </div>
            </div>
            
            {/* Confirmation - Larger Section */}
            <div className="flex justify-center">
              <div className="bg-white border-2 border-[#005596] rounded-xl shadow-lg p-8 w-full max-w-3xl text-center relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#005596] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl shadow-md">4</div>
                <div className="w-24 h-24 bg-[#005596] rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#005596] mb-4">Appointment Confirmation</h3>
                <div className="bg-[#e5f0f9] p-6 rounded-lg mb-6">
                  <p className="text-lg mb-4">The booking is confirmed and detailed follow-up information is provided to the customer via their preferred communication method.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-left">
                    <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-[#005596] mb-3 border-b border-[#005596] pb-2">Customer Receives</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#005596] rounded-full mr-3 mt-2"></span>
                          <span>Detailed confirmation email</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#005596] rounded-full mr-3 mt-2"></span>
                          <span>Digital calendar invitation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#005596] rounded-full mr-3 mt-2"></span>
                          <span>Service preparation instructions</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#005596] rounded-full mr-3 mt-2"></span>
                          <span>Checklist of items to bring</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-[#005596] mb-3 border-b border-[#005596] pb-2">Staff Actions</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#005596] rounded-full mr-3 mt-2"></span>
                          <span>System schedule updated</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#005596] rounded-full mr-3 mt-2"></span>
                          <span>Staff resources allocated</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#005596] rounded-full mr-3 mt-2"></span>
                          <span>Service preparation initiated</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#005596] rounded-full mr-3 mt-2"></span>
                          <span>Automated reminders scheduled</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-[#005596] bg-opacity-10 p-4 rounded-lg border border-[#005596] border-opacity-20">
                    <h4 className="font-bold text-[#005596] mb-2">Follow-up Process</h4>
                    <p className="text-sm">Customers receive automated reminders 48 hours before their appointment and a post-service follow-up to gather feedback and ensure satisfaction.</p>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-green-100 p-3 rounded-lg text-green-800 font-medium border border-green-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Process complete! Customer is now ready for their appointment.
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
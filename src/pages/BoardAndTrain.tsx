import { Link } from 'react-router-dom';
import { ROUTES } from '../config/routes';

export function BoardAndTrainPage() {
  const features = [
    {
      title: "1:1 Attention",
      description: "Personalized training with a dedicated puppy training coach",
      icon: "👤"
    },
    {
      title: "Socialization",
      description: "Controlled exposure to other dogs with similar play styles",
      icon: "🐾"
    },
    {
      title: "Core Training",
      description: "Focus on sit/stay, loose leash walking, recall, and more",
      icon: "🎯"
    },
    {
      title: "24/7 Support",
      description: "Unlimited phone support and scheduled check-in calls",
      icon: "📱"
    }
  ];

  const expectations = [
    "You consumed the online course material",
    "You 'drive the process' by anticipating your puppy's needs",
    "You keep up with doggie daycare twice a week",
    "A 'can do' attitude"
  ];

  const programIncludes = [
    "1 x 60 minute in-home sessions prior to BNT",
    "1 60 minute in-home session after the BNT",
    "1 scheduled check in call per week",
    "Mid-week progress report",
    "Unlimited Phone Support",
    "21 Day Online Course",
    "Success Survey",
    "Puppy Playbook",
    "Socialization",
    "Champion Stances",
    "Jr. Puppy Trainer Checklist",
    "Guaranteed results"
  ];

  const afterTrainingSupport = [
    "24/7 availability via text at 1-877-CHAMP",
    "Training call 2 days after pick-up session",
    "1:1 session 5 days after pick up",
    "Continued phone and 1:1 in-person sessions for life"
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
            alt="Board and Train Program"
            className="h-full w-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#005596] via-[#005596]/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="max-w-4xl md:ml-[-100px]">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
              Board &
              <br />
              <span className="text-[#8E9BDB] block mt-2">Train</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-2xl leading-relaxed">
              Get faster results with our immersive training program where your puppy learns in a controlled environment
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href={ROUTES.CUSTOMER_PORTAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#005596] px-8 py-4 rounded-full 
                         font-semibold hover:bg-[#8E9BDB] hover:text-white transition-all duration-300
                         shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-8 text-blue-900">Fresh Start Board & Train Program</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              In select locations we offer Board & Train Options for your pup. A board & train gets you a higher level 
              of relief and results faster. We remove your puppy from its normal environment to place them out of their 
              comfort zone and into a programmable state. Our professional trainers have a higher level of consistency 
              in handling and skill set. An added benefit is your puppy is immersed in a social setting in a controlled way.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-4">{feature.icon}</span>
                  <h3 className="font-bold text-xl text-blue-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Program Includes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-blue-900">What's Included</h3>
              <ul className="space-y-3">
                {programIncludes.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-blue-900">After Training Support</h3>
              <ul className="space-y-3">
                {afterTrainingSupport.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expectations Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-blue-900">What We Expect From You</h2>
            <div className="space-y-6">
              {expectations.map((expectation, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <p className="text-gray-700">{expectation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-blue-900">What to Expect After Training</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-700 mb-6">
              Your dog will not be a robot, but it will definitely be a way better version of itself! 
              We will demo for you its new found relaxation and responsiveness around distractions. 
              We will do some food and play drills together that showcase how you can continue to 
              "work" your puppy when you get home.
            </p>
            <p className="text-gray-700">
              During pick up we will also cover how to walk, hike, go to place/crate, stay on place, 
              threshold training, your specific goals/issues and how to maintain your puppy using the 
              Champion's Daily Regimen as your guide.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Get Started Today</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div style={{ height: '1538px' }}>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/CWqtcgWJpLL4NB0OOleg"
                style={{ 
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  borderRadius: '3px'
                }}
                id="inline-CWqtcgWJpLL4NB0OOleg" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Board&Train"
                data-height="1538"
                data-layout-iframe-id="inline-CWqtcgWJpLL4NB0OOleg"
                data-form-id="CWqtcgWJpLL4NB0OOleg"
                title="Board&Train"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Add the script tag */}
      <script src="https://link.msgsndr.com/js/form_embed.js" async />

      {/* CTA Section */}
      <section className="py-24 bg-[#005596] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Dog?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Get started with our Board & Train program and see the difference professional training can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={ROUTES.CUSTOMER_PORTAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-[#005596] px-8 py-4 rounded-full 
                       font-semibold hover:bg-[#8E9BDB] hover:text-white transition-all duration-300
                       shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Program Details & Pricing
            </a>
            <a 
              href="tel:877-55-CHAMP"
              className="inline-flex items-center text-white border-2 border-white px-8 py-4 rounded-full
                       font-semibold hover:bg-white hover:text-[#005596] transition-all duration-300"
            >
              Call 877-55-CHAMP
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 
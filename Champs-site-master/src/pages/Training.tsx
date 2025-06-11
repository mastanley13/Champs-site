import { Link } from 'react-router-dom';
import { ROUTES } from '../config/routes';

// Import training icons
const trainingIcons = {
  house: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67d4568d9672ec2106369108.gif",
  ball: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67d4544f0f3aea437e676449.gif",
  search: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/6798fd8c4f0aeba1445fcd49.gif",
  dog: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/6798fd905878ac26b764e094.gif",
  bone: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/6798fda9d45f40266637a12e.gif",
  walking: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/6798fd825878acc53464e08e.gif",
  nipping: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/6798ff3fbdb4646e5690881c.gif",
  recall: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/6798ff1a77cb98091b05354a.gif",
  obedience: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/6798ff18ff38df28bbdf5000.gif",
  behavioralModification: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67d455508b28011504bf47aa.gif",
  uniqueConcerns: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67d455d41b97aca7a5fcf473.gif",
  schedule: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67d457060f3aea45f36767e3.gif",
  crate: "https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67d457c78b2801c648bf4ccc.png"
};

export function TrainingPage() {
  const trainingTopics = [
    { id: 1, name: "Nipping", iconUrl: trainingIcons.nipping },
    { id: 2, name: "Jumping", iconUrl: trainingIcons.dog },
    { id: 3, name: "Chewing", iconUrl: trainingIcons.bone },
    { id: 4, name: "Potty Training", iconUrl: trainingIcons.house },
    { id: 5, name: "Daily Schedule", iconUrl: trainingIcons.schedule },
    { id: 6, name: "Crate Training", iconUrl: trainingIcons.crate },
    { id: 7, name: "Leash Walking", iconUrl: trainingIcons.walking },
    { id: 8, name: "Recall", iconUrl: trainingIcons.recall },
    { id: 9, name: "Obedience", iconUrl: trainingIcons.obedience },
    { id: 10, name: "Training Around Distractions", iconUrl: trainingIcons.ball },
    { id: 11, name: "Behavioral Modification", iconUrl: trainingIcons.behavioralModification },
    { id: 12, name: "Your Unique Concerns", iconUrl: trainingIcons.uniqueConcerns }
  ];

  const programs = [
    {
      title: "In-Home Boot Camp",
      features: [
        "4 x 1 Hour In-Home Sessions",
        "2 Weekly Scheduled Check-in Calls",
        "Unlimited Phone Support",
        "21 Day Online Course",
        "Success Survey",
        "Puppy Playbook",
        "Champion Stances",
        "Jr. Puppy Trainer Checklist"
      ],
      highlight: "Perfect for busy families",
      popular: true
    },
    {
      title: "1:1 Facility Boot Camp",
      features: [
        "6 x 1 Hour Sessions at Facility",
        "1 Weekly Scheduled Check-in Call",
        "Unlimited Phone Support",
        "21 Day Online Course",
        "Success Survey",
        "Puppy Playbook",
        "Champion Stances",
        "Jr. Puppy Trainer Checklist"
      ],
      highlight: "Ideal for focused training",
      popular: false
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
            src="https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67863246b6255b7e0e1e11de.jpeg"
            alt="Dog Training"
            className="h-full w-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#005596] via-[#005596]/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="max-w-4xl md:ml-[-100px]">
            <h1 className="hero-heading text-6xl md:text-7xl lg:text-8xl mb-6 text-white leading-tight">
              CHAMPION
              <br />
              <span className="inline">
                <span className="text-[#E63946]">PUPPY</span> TRAINING
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-2xl leading-relaxed">
              Achieve lasting results with our professional trainers and technology-driven puppy training—designed for busy people who want real progress, fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href={ROUTES.CUSTOMER_PORTAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#E63946] text-white text-lg font-bold rounded-lg hover:bg-[#E63946]/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Training
              </a>
              <a 
                href="#training-programs"
                className="group inline-flex items-center text-white hover:text-[#8E9BDB] 
                         transition-all duration-300"
              >
                <span className="w-12 h-12 rounded-full border-2 border-white 
                             flex items-center justify-center mr-4
                             group-hover:border-[#8E9BDB] group-hover:bg-white/10
                             transition-all duration-300">
                  🎓
                </span>
                View Programs
              </a>
              <a 
                href="https://api.leadconnectorhq.com/widget/form/lU8nqAIL5Wmyhfd9ba34"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center text-white hover:text-[#8E9BDB] 
                         transition-all duration-300"
              >
                <span className="w-12 h-12 rounded-full border-2 border-white 
                             flex items-center justify-center mr-4
                             group-hover:border-[#8E9BDB] group-hover:bg-white/10
                             transition-all duration-300">
                  📝
                </span>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://player.vimeo.com/video/1047585620?autoplay=0"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="fullscreen; picture-in-picture"
                allowFullScreen
                title="Founder Video"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">What We Cover</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {trainingTopics.map((topic) => (
              <div 
                key={topic.id}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors duration-300"
              >
                {topic.iconUrl ? (
                  <img 
                    src={topic.iconUrl} 
                    alt={`${topic.name} icon`}
                    className="w-16 h-16 mx-auto mb-3 object-contain"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-3xl mb-3 block">{topic.icon}</span>
                )}
                <h3 className="font-semibold text-blue-900">{topic.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section id="training-programs" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Training Programs</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {programs.map((program) => (
              <div 
                key={program.title}
                className={`bg-white rounded-2xl shadow-lg p-8 ${
                  program.popular ? 'border-2 border-blue-300 relative' : ''
                }`}>
                {program.popular && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    Most Popular
                  </div>
                )}
                <h3 className="font-semibold text-blue-900">{program.title}</h3>
                <p className="text-base text-gray-600">{program.highlight}</p>
                <ul className="list-disc pl-6 mt-4">
                  {program.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Why Choose Us Card */}
            <div className="bg-white rounded-xl p-8 shadow-md transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex flex-col items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#005596]/10 flex items-center justify-center mb-4">
                  <img 
                    src={trainingIcons.behavioralModification}
                    alt="Experience icon"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#005596] text-center">WHY CHOOSE US</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
                With over 20 years of experience training puppies in busy homes like yours, our customer-focused program helps families eliminate unwanted behaviors while channeling their puppy's natural instincts in productive ways, resulting in lasting, rapid transformations.
              </p>
            </div>

            {/* Ongoing Support Card */}
            <div className="bg-white rounded-xl p-8 shadow-md transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex flex-col items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#E63946]/10 flex items-center justify-center mb-4">
                  <img 
                    src={trainingIcons.search}
                    alt="Support icon"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#005596] text-center">ONGOING SUPPORT</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
                Our experienced trainers are just a text away, ready to assist with any questions you have throughout your training journey
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
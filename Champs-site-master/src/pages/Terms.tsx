import { Link } from 'react-router-dom';

export function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Blue Background */}
        <div className="absolute inset-0 bg-[#005596] w-full md:w-1/2"></div>
        
        {/* Image Container */}
        <div className="absolute inset-0 ml-auto w-full md:w-1/2">
          <img
            src="https://storage.googleapis.com/msgsndr/mGAU84INytusQO0Fo5P9/media/67862db9b6ea2b5fb322e433.jpeg"
            alt="Terms and Conditions"
            className="h-full w-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#005596] via-[#005596]/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="max-w-4xl md:ml-[-100px]">
            <h1 className="hero-heading text-6xl md:text-7xl lg:text-8xl mb-6 text-white leading-tight">
              Terms & Conditions
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-2xl leading-relaxed">
              Please review our policies and procedures for all services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Daycare Section */}
            <div className="mb-16">
              <h2 className="font-anton text-4xl mb-8 text-[#E63946] uppercase tracking-normal">Daycare</h2>
              <div className="bg-white/10 rounded-2xl p-8 space-y-6">
                <div>
                  <h3 className="font-anton text-2xl mb-4 text-[#E63946] uppercase tracking-normal">Vaccination Requirements</h3>
                  <p className="text-gray-600 mb-4">All dogs must be fully vaccinated with the following vaccines prior to their first day:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Rabies</li>
                    <li>Bordatella (every six months)</li>
                    <li>Canine Influenza</li>
                    <li>DHPP</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    We consistently review our policies and procedures in accordance with recommendations from vets in our area. We are continually reviewing them and each year may/may not make changes based on new studies. At this time Titers have been a subject of increasing awareness, however, there hasn't been enough research yet for us to say whether or not they would protect against the illness. Given the amount of dogs in our care and the social and communicable setting, we require the vaccination to protect all dogs in our care.
                  </p>
                </div>

                <div>
                  <h3 className="font-anton text-2xl mb-4 text-[#E63946] uppercase tracking-normal">Health & Safety</h3>
                  <p className="text-gray-600 mb-4">
                    Due to the communicable nature of our facility there is always a risk your dog may become ill. Our vaccination policy and stringent cleaning policy mitigates these issues, however, it is not a guarantee.
                  </p>
                  <p className="text-gray-600">
                    All dogs must be spayed or neutered by 6 months.
                  </p>
                </div>

                <div>
                  <h3 className="font-anton text-2xl mb-4 text-[#E63946] uppercase tracking-normal">Behavior System</h3>
                  <p className="text-gray-600 mb-4">Our Daycare runs on a Flag System:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Green - no issues or unwanted behaviors</li>
                    <li>Yellow - few unwanted behaviors or minor incidents</li>
                    <li>Red - incidents no longer suitable for daycare</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    We monitor behavior constantly at Champ's to ensure your dog and other dogs are safe while in our care. If we notice any behaviors we will communicate them with you and create a plan for your dog to remain in daycare.
                  </p>
                </div>

                <div>
                  <h3 className="font-anton text-2xl mb-4 text-[#E63946] uppercase tracking-normal">Cancellation Policy</h3>
                  <p className="text-gray-600 mb-4">
                    At Champ's you pay at the time you book your reservation for future dates. This is considered a daycare package. Due to the nature of our business we require 48 hours advanced notice if you need to cancel or change your reservation in order to preserve your daycare package. Reservations cancelled after the 48 hour timeline will result in your daycare package being forfeited.
                  </p>
                </div>

                <div>
                  <h3 className="font-anton text-2xl mb-4 text-[#E63946] uppercase tracking-normal">Holidays & Hours</h3>
                  <p className="text-gray-600 mb-4">Daycare is closed on the following holidays:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>New Years Day</li>
                    <li>Easter Sunday</li>
                    <li>Memorial Day</li>
                    <li>July 4th</li>
                    <li>Labor Day</li>
                    <li>Thanksgiving Day</li>
                    <li>Christmas Day</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    Daycare closes at 6pm*. If you are going to be late please let us know. A $10 charge may be assessed to your account for pick ups after 6pm.
                  </p>
                  <p className="text-gray-600">
                    *Late pick ups are not available on the weekends and daycare closes at 5pm.
                  </p>
                </div>
              </div>
            </div>

            {/* Boarding Section */}
            <div className="mb-16">
              <h2 className="font-anton text-4xl mb-8 text-[#E63946] uppercase tracking-normal">Boarding</h2>
              <div className="bg-white/10 rounded-2xl p-8 space-y-6">
                <div>
                  <h3 className="font-anton text-2xl mb-4 text-[#E63946] uppercase tracking-normal">Requirements</h3>
                  <p className="text-gray-600 mb-4">
                    Due to the nature of our facility and the social play areas we only board dogs that come to our daycare. We ask that all dogs that wish to remain boarding dogs come to our daycare at least once a month. In order to board at our facility your dog must complete either 2 days of daycare and a trial overnight.
                  </p>
                </div>

                <div>
                  <h3 className="font-anton text-2xl mb-4 text-[#E63946] uppercase tracking-normal">Drop-off & Pick-up</h3>
                  <p className="text-gray-600 mb-4">
                    Boarding drop offs are between 8am-11am. This is so that your dog has all it's energy expended and can easily acclimate to the facility for his/her stay. Pick up time is between 8am-11am. Any dogs picked up after 11am will be charged a $20 late pick up fee.
                  </p>
                </div>

                <div>
                  <h3 className="font-anton text-2xl mb-4 text-[#E63946] uppercase tracking-normal">What to Bring</h3>
                  <p className="text-gray-600 mb-4">
                    At Champ's we do not need to bring toys, blankets, or bowls. We do require you bring all medications in the original pill bottle with the dog's name, prescription type and amount. We do not charge for basic medication administration.
                  </p>
                  <p className="text-gray-600">
                    All food must be individually bagged and labeled for the length of your dogs stay. If food is not properly prepared you will be assessed a $10 food preparation fee.
                  </p>
                </div>

                <div>
                  <h3 className="font-anton text-2xl mb-4 text-[#E63946] uppercase tracking-normal">Deposit & Payment</h3>
                  <p className="text-gray-600 mb-4">
                    We require a $100 deposit for all boarding reservations. At the time of check-in your $100 deposits will be credited to your reservation. Payment is due in full at the time of check-in. For one night stays we only require a deposit equal to the cost of your stay.
                  </p>
                </div>

                <div>
                  <h3 className="font-anton text-2xl mb-4 text-[#E63946] uppercase tracking-normal">Cancellation Policy</h3>
                  <p className="text-gray-600">
                    72 hours notice to cancel or change your reservation. If you cancel after the 72 hour time frame your deposit will be forfeited.
                  </p>
                </div>
              </div>
            </div>

            {/* Grooming Section */}
            <div className="mb-16">
              <h2 className="font-anton text-4xl mb-8 text-[#E63946] uppercase tracking-normal">Grooming</h2>
              <div className="bg-white/10 rounded-2xl p-8 space-y-6">
                <div>
                  <h3 className="font-anton text-2xl mb-4 text-[#E63946] uppercase tracking-normal">Requirements</h3>
                  <p className="text-gray-600 mb-4">
                    All grooming dogs must have current rabies vaccination.
                  </p>
                </div>

                <div>
                  <h3 className="font-anton text-2xl mb-4 text-[#E63946] uppercase tracking-normal">Cancellation Policy</h3>
                  <p className="text-gray-600 mb-4">
                    We require 24 hour notice for cancellation. Cancellations done after the 24 hour period expires will be subject to a cancellation fee equal to 50% of the groom.
                  </p>
                </div>

                <div>
                  <h3 className="font-anton text-2xl mb-4 text-[#E63946] uppercase tracking-normal">Additional Services</h3>
                  <p className="text-gray-600 mb-4">
                    Mobile grooming appointments will be subject to a $50 service fee plus the cost of the groom.
                  </p>
                  <p className="text-gray-600">
                    Mobile grooming is offered to dogs 60 lbs or less.
                  </p>
                </div>

                <div>
                  <h3 className="font-anton text-2xl mb-4 text-[#E63946] uppercase tracking-normal">Payment</h3>
                  <p className="text-gray-600">
                    A credit card is required to secure all appointments and reservations.
                  </p>
                </div>
              </div>
            </div>

            {/* Incidents Section */}
            <div>
              <h2 className="font-anton text-4xl mb-8 text-[#E63946] uppercase tracking-normal">Incidents</h2>
              <div className="bg-white/10 rounded-2xl p-8 space-y-6">
                <p className="text-gray-600 mb-4">
                  If an incident occurs during daycare, boarding or grooming we may require that your dog be picked up.
                </p>
                <p className="text-gray-600">
                  As dogs play there may be a scuffle. If your dog was involved in a scuffle to the extent where either your dog or another dog was injured your dog will be separated from the playgroup and we will be asked to be picked up immediately.
                </p>
                <p className="text-gray-600">
                  If for some reason you cannot pick up your dog will be isolated for play for the remainder of the day and 1:1 care fees may apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-anton text-4xl text-center mb-12 text-[#E63946] uppercase tracking-normal drop-shadow-sm">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Link
              to="/privacy"
              className="flex flex-col items-center p-6 bg-white rounded-xl hover:shadow-md transition-all duration-300"
            >
              <span className="text-3xl mb-3">🔒</span>
              <span className="font-medium text-[#E63946]">Privacy Policy</span>
            </Link>
            <Link
              to="/contact"
              className="flex flex-col items-center p-6 bg-white rounded-xl hover:shadow-md transition-all duration-300"
            >
              <span className="text-3xl mb-3">📞</span>
              <span className="font-medium text-[#E63946]">Contact Us</span>
            </Link>
            <Link
              to="/faq"
              className="flex flex-col items-center p-6 bg-white rounded-xl hover:shadow-md transition-all duration-300"
            >
              <span className="text-3xl mb-3">❓</span>
              <span className="font-medium text-[#E63946]">FAQ</span>
            </Link>
            <Link
              to="/"
              className="flex flex-col items-center p-6 bg-white rounded-xl hover:shadow-md transition-all duration-300"
            >
              <span className="text-3xl mb-3">🏠</span>
              <span className="font-medium text-[#E63946]">Home</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 
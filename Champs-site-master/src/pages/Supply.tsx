import { ROUTES } from '../constants/routes';

  {/* Rewards Program Section */}
  <section className="py-24 bg-[#005596] text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-8">Join Our Rewards Program</h2>
      <p className="text-xl mb-12 max-w-2xl mx-auto">
        Earn points with every purchase and get exclusive access to member-only discounts and special offers.
      </p>
      <a
        href={ROUTES.CUSTOMER_PORTAL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-white text-[#005596] px-8 py-4 rounded-full 
                  font-semibold hover:bg-[#8E9BDB] hover:text-white transition-all duration-300
                  shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        Sign Up Now
        <span className="ml-2">→</span>
      </a>
    </div>
  </section> 
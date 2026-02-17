import { Link } from "react-router-dom";

const perks = [
  { icon: "🍳", text: "Freshly Prepared" },
  { icon: "🏪", text: "Support Local Business" },
  { icon: "🚚", text: "Fast & Reliable Delivery" },
];

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-6 md:py-10 flex-1">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-[#FF7A18] font-normal italic text-xl md:text-2xl" style={{ fontFamily: "'Island Moments', cursive" }}>
            Chuks Kitchen
          </div>
          <Link
            to="/login"
            className="px-6 py-2.5 rounded-lg border-2 border-[#007BFF] text-[#007BFF] font-semibold text-sm hover:bg-[#007BFF]/5 transition-colors"
          >
            Sign In
          </Link>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-card shadow-soft border border-black/5 overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left - Image Section */}
            <div className="relative min-h-[400px] md:min-h-[500px]">
              <img
                src="/images/img1.png"
                alt="Welcome to Chuks Kitchen"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Right - Content Section */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="text-[#FF7A18] font-normal italic text-2xl mb-6" style={{ fontFamily: "'Island Moments', cursive" }}>
                Chuks Kitchen
              </div>
              
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-textDark">
                  Your Authentic Taste of Nigeria
                </h1>
                <p className="mt-4 text-textDark/70 leading-relaxed">
                  Experience homemade flavors delivered fresh to your desk or home. We bring the rich culinary heritage of Nigeria right to your doorstep.
                </p>
              </div>

              {/* Perks/Features */}
              <div className="mt-8 flex flex-wrap gap-3">
                {perks.map((perk) => (
                  <div
                    key={perk.text}
                    className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-2"
                  >
                    <span className="text-lg">{perk.icon}</span>
                    <span className="text-sm font-medium text-textDark">
                      {perk.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 space-y-3">
                <Link
                  to="/signup"
                  className="inline-flex w-full h-12 items-center justify-center rounded-lg bg-[#FF7A18] text-white font-semibold hover:bg-[#FF7A18]/90 transition-colors"
                >
                  Start Your Order
                </Link>

                <Link
                  to="/login"
                  className="inline-flex w-full h-12 items-center justify-center rounded-lg border-2 border-[#007BFF] text-[#007BFF] font-semibold hover:bg-[#007BFF]/5 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>

              {/* Footer Text */}
              <div className="mt-8 text-center text-xs text-textDark/50">
                © 2025 Chuks Kitchen · <Link to="#" className="hover:text-[#007BFF]">Privacy Policy</Link> · <Link to="#" className="hover:text-[#007BFF]">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#5C4033] text-white mt-12">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div>
              <div className="text-[#FF7A18] font-normal italic text-2xl mb-3" style={{ fontFamily: "'Island Moments', cursive" }}>
                Chuks Kitchen
              </div>
              <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><Link to="/" className="hover:text-brandOrange transition-colors">Home</Link></li>
                <li><Link to="/menu" className="hover:text-brandOrange transition-colors">Menus</Link></li>
                <li><Link to="/explore" className="hover:text-brandOrange transition-colors">My Order</Link></li>
                <li><Link to="/profile" className="hover:text-brandOrange transition-colors">Account</Link></li>
                <li><Link to="/orders" className="hover:text-brandOrange transition-colors">Couriers</Link></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>+234 802 234 5678</li>
                <li>hello@chukskitchen.com</li>
                <li>123 Ikoyi, Eko, Lagos, Nigeria</li>
                <li className="pt-2 space-x-3">
                  <span className="text-white/60">Facebook</span>
                  <span className="text-white/60">Twitter</span>
                  <span className="text-white/60">LinkedIn</span>
                  <span className="text-white/60">Instagram</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/60">
            © 2025 Lift Media. All rights reserved.
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-brandBlue text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-brandBlue/90 transition-colors"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </footer>
    </div>
  );
}

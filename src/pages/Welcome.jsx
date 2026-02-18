import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";

const perks = [
  { icon: "🍳", text: "Freshly Prepared" },
  { icon: "🏪", text: "Support Local Business" },
  { icon: "🚚", text: "Fast & Reliable Delivery" },
];

export default function Welcome() {
  return (
    <>
      <div className="bg-white">
        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Mobile Image */}
          <div className="h-52 mt-4">
            <img
              src="/images/img27.png"
              alt="Welcome to Chuks Kitchen"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Sign In button below image */}
          <div className="flex justify-end px-6 py-4">
            <Link
              to="/login"
              className="px-5 py-2 rounded-lg border-2 border-brandBlue text-brandBlue font-semibold text-sm hover:bg-brandBlue/5 transition-colors"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Content */}
          <div className="px-6 pb-8">
            <div className="text-center mb-6">
              <div className="text-brandOrange font-semibold italic text-2xl mb-4">
                Chuks Kitchen
              </div>
              <h1 className="text-2xl font-bold text-textDark mb-3">
                Your Authentic Taste of Nigeria
              </h1>
              <p className="text-textDark/70 text-sm leading-relaxed">
                Experience homemade flavors delivered fresh to your desk or home. We bring the rich culinary heritage of Nigeria right to your doorstep.
              </p>
            </div>

            {/* Perks/Features */}
            <div className="space-y-3 mb-6">
              {perks.map((perk) => (
                <div
                  key={perk.text}
                  className="flex items-center gap-3 bg-orange-50 rounded-lg px-4 py-3"
                >
                  <span className="text-xl">{perk.icon}</span>
                  <span className="text-sm font-medium text-textDark">
                    {perk.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 mb-8">
              <Link
                to="/menu"
                className="flex items-center justify-center w-full h-12 rounded-lg bg-brandOrange text-white font-semibold hover:bg-brandOrange/90 transition-colors"
              >
                Start Your Order
              </Link>

              <Link
                to="/explore"
                className="flex items-center justify-center w-full h-12 rounded-lg border-2 border-brandBlue text-brandBlue font-semibold hover:bg-brandBlue/5 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2">
          {/* Left - Image Section */}
          <div className="relative min-h-screen">
            <img
              src="/images/img1.png"
              alt="Welcome to Chuks Kitchen"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {/* Right - Content Section */}
          <div className="min-h-screen flex flex-col p-8 md:p-12">
            {/* Header with Logo and Sign In */}
            <div className="flex items-center justify-between mb-12">
              <div className="text-brandOrange font-semibold italic text-2xl">
                Chuks Kitchen
              </div>
              <Link
                to="/login"
                className="px-6 py-2.5 rounded-lg border-2 border-brandBlue text-brandBlue font-semibold text-sm hover:bg-brandBlue/5 transition-colors"
              >
                Sign In
              </Link>
            </div>

            {/* Main Content - Centered */}
            <div className="flex-1 flex flex-col justify-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-textDark">
                  Your Authentic Taste of Nigeria
                </h1>
                <p className="mt-4 text-textDark/70 leading-relaxed">
                  Experience homemade flavors delivered fresh to your desk or home. We bring the rich culinary heritage of Nigeria right to your doorstep.
                </p>
              </div>

              {/* Perks/Features */}
              <div className="mt-8 space-y-3">
                {perks.map((perk) => (
                  <div
                    key={perk.text}
                    className="inline-flex items-center gap-3 bg-orange-50 rounded-lg px-4 py-3 mr-3"
                  >
                    <span className="text-xl">{perk.icon}</span>
                    <span className="text-sm font-medium text-textDark">
                      {perk.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 space-y-3">
                <Link
                  to="/menu"
                  className="inline-flex w-full h-12 items-center justify-center rounded-lg bg-brandOrange text-white font-semibold hover:bg-brandOrange/90 transition-colors"
                >
                  Start Your Order
                </Link>

                <Link
                  to="/explore"
                  className="inline-flex w-full h-12 items-center justify-center rounded-lg border-2 border-brandBlue text-brandBlue font-semibold hover:bg-brandBlue/5 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>

              {/* Footer Text */}
              <div className="mt-12 text-center text-xs text-textDark/50">
                © 2024 Chuk<span className="lowercase">s</span> Kitchen.{' '}
                <Link to="#" className="text-brandBlue hover:underline">Privacy Policy</Link>{' '}
                <Link to="#" className="text-brandBlue hover:underline">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden md:block">
        <Footer noMargin={true} />
      </div>
    </>
  );
}

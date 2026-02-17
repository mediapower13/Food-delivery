import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Footer() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 250);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="bg-[#5C4033] text-white mt-20 relative">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand Section */}
          <div>
            <div className="text-brandOrange font-bold italic text-2xl mb-4">
              Chuks Kitchen
            </div>
            <p className="text-sm leading-relaxed text-white/80 max-w-xs">
              Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <Link className="hover:text-brandOrange transition-colors" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-brandOrange transition-colors" to="/menu">
                  Menus
                </Link>
              </li>
              <li>
                <Link className="hover:text-brandOrange transition-colors" to="/explore">
                  My Order
                </Link>
              </li>
              <li>
                <Link className="hover:text-brandOrange transition-colors" to="/account">
                  Account
                </Link>
              </li>
              <li>
                <Link className="hover:text-brandOrange transition-colors" to="/orders">
                  Couriers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>+234 802 234 5678</li>
              <li>hello@chukskitchen.com</li>
              <li>123 Ikoyi Eko, Lagos, Nigeria</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-brandOrange transition-colors">Facebook</a>
              </li>
              <li>
                <a href="#" className="hover:text-brandOrange transition-colors">Twitter</a>
              </li>
              <li>
                <a href="#" className="hover:text-brandOrange transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="#" className="hover:text-brandOrange transition-colors">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-10 pt-8 border-t border-white/10 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Lift Media. All rights reserved.
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={[
          "fixed bottom-8 right-8 z-40 h-12 w-12 rounded-full bg-brandBlue text-white shadow-lg hover:bg-brandBlue/90 transition-all flex items-center justify-center",
          show ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none",
        ].join(" ")}
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
      </button>
    </footer>
  );
}

import { Link, NavLink, useLocation } from "react-router-dom";
import { useMemo, useState } from "react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/explore", label: "Explore" },
  { to: "/cart", label: "My Orders" },
  { to: "/account", label: "Account" },
];

function NavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "flex-none flex-grow text-center font-medium transition-colors",
          "w-[215.25px] h-6 text-base leading-6",
          isActive
            ? "text-[#FF7A18]"
            : "text-[#1F2937] hover:text-[#FF7A18]",
        ].join(" ")
      }
      end
    >
      {label}
    </NavLink>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const shouldShowLogin = useMemo(() => {
    return !["/login", "/signup", "/welcome"].includes(location.pathname);
  }, [location.pathname]);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="mx-auto max-w-[1440px] px-12">
        <div className="flex flex-row items-start py-[18px] gap-[45px] h-[90px]">
          <Link to="/" className="flex items-center flex-none order-0">
            <span className="text-[#FF7A18] font-normal italic text-[40.8084px] leading-[41px] h-[41px]" style={{ fontFamily: "'Island Moments', cursive" }}>
              Chuks Kitchen
            </span>
          </Link>

          <nav className="hidden md:flex flex-row justify-center items-center p-2.5 gap-2.5 w-[911px] h-11 flex-none order-1 flex-grow">
            {navItems.map((n) => (
              <NavItem key={n.to} to={n.to} label={n.label} />
            ))}
          </nav>

          <div className="flex items-center gap-3 flex-none order-2">
            {shouldShowLogin && (
              <Link
                to="/login"
                className="hidden md:flex flex-row justify-center items-center px-6 gap-4 w-40 h-[54px] bg-[#FF7A18] rounded-[10px] text-white text-base font-semibold leading-6 hover:bg-[#FF7A18]/90 transition-colors"
              >
                Login
              </Link>
            )}

            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-gray-200 hover:bg-gray-50"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h18M3 6h18M3 18h18"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          <button
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl p-6 flex flex-col animate-slide-in">
            <div className="flex items-center justify-between mb-6">
              <span className="text-brandOrange font-bold italic text-xl">
                Chuks Kitchen
              </span>
              <button
                className="h-10 w-10 rounded-lg border border-gray-200 hover:bg-gray-50 flex items-center justify-center"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {navItems.map((n) => (
                <NavItem
                  key={n.to}
                  to={n.to}
                  label={n.label}
                  onClick={() => setOpen(false)}
                />
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-gray-100">
              {shouldShowLogin && (
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center h-12 rounded-lg bg-brandOrange text-white font-semibold shadow-md hover:bg-brandOrange/90 transition-colors"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import { NavLink } from "react-router-dom";
import { Home, LayoutGrid, ShoppingCart, Package, User } from "lucide-react";
import { useCartStore } from "../../store/useCartStore";

const navItem = (to, Icon, label) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex flex-col items-center justify-center gap-1 px-3 py-2 ${
        isActive ? "text-brandOrange" : "text-gray-500"
      }`
    }
  >
    <Icon size={22} />
    <span className="text-[11px]">{label}</span>
  </NavLink>
);

export default function BottomNav() {
  const count = useCartStore((s) => s.items.reduce((a, i) => a + i.qty, 0));

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="mx-auto max-w-[420px] grid grid-cols-5">
        {navItem("/", Home, "Home")}
        {navItem("/menu", LayoutGrid, "Menu")}

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `relative flex flex-col items-center justify-center gap-1 px-3 py-2 ${
              isActive ? "text-brandOrange" : "text-gray-500"
            }`
          }
        >
          <ShoppingCart size={22} />
          {count > 0 && (
            <span className="absolute top-1 right-6 text-[10px] bg-brandPink text-white px-2 py-[2px] rounded-full">
              {count}
            </span>
          )}
          <span className="text-[11px]">Cart</span>
        </NavLink>

        {navItem("/orders", Package, "Orders")}
        {navItem("/profile", User, "Profile")}
      </div>
    </div>
  );
}

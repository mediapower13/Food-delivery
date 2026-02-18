import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Price from "../components/ui/Price";

const categories = [
  { id: "popular", label: "Popular" },
  { id: "jollof", label: "Jollof Rice & Entrees" },
  { id: "swallow", label: "Swallow & Soups" },
  { id: "grills", label: "Grills & sides" },
  { id: "beverages", label: "Beverages" },
  { id: "desserts", label: "Desserts" },
];

const menuItems = [
  {
    id: "jollof-1",
    name: "Jollof Rice & Fried Chicken",
    description: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
    price: 2800,
    image: "/images/img11.png",
    category: "popular",
  },
  {
    id: "soup-1",
    name: "Eba & Egusi Soup (Goat Meat)",
    description: "Smooth eba paired with rich egusi soup, loaded with tender goat meat pieces and leafy greens.",
    price: 3500,
    image: "/images/img21.png",
    category: "popular",
  },
  {
    id: "jollof-2",
    name: "Jollof Rice & Fried Chicken",
    description: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
    price: 2800,
    image: "/images/img11.png",
    category: "popular",
  },
  {
    id: "jollof-3",
    name: "Jollof Rice & Fried Chicken",
    description: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
    price: 2800,
    image: "/images/img11.png",
    category: "jollof",
  },
  {
    id: "soup-2",
    name: "Eba & Egusi Soup (Goat Meat)",
    description: "Smooth eba paired with rich egusi soup, loaded with tender goat meat pieces and leafy greens.",
    price: 3500,
    image: "/images/img21.png",
    category: "jollof",
  },
  {
    id: "jollof-4",
    name: "Jollof Rice & Fried Chicken",
    description: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
    price: 2800,
    image: "/images/img11.png",
    category: "jollof",
  },
  {
    id: "jollof-5",
    name: "Jollof Rice & Fried Chicken",
    description: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
    price: 2800,
    image: "/images/img11.png",
    category: "swallow",
  },
];

export default function Menu() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("popular");

  const filteredItems = menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile View */}
      <div className="md:hidden">
        {/* Hero Section */}
        <div className="relative w-full h-48">
          <img
            src="/images/img2.png"
            alt="Chuks Kitchen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center text-white">
              <h1 className="text-2xl font-bold mb-2">Chuks Kitchen</h1>
              <p className="text-sm">Delicious Nigerian Home Cooking</p>
            </div>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="px-4 py-6">
          <h2 className="text-xl font-bold text-textDark mb-4">Menu Categories</h2>
          
          <div className="space-y-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === cat.id
                    ? "bg-[#FFE5D9] text-textDark"
                    : "bg-white text-textDark hover:bg-gray-50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Category Food Items */}
          {categories.map((cat) => (
            <div key={cat.id} className="mt-8">
              <h3 className="text-lg font-bold text-textDark mb-4">{cat.label}</h3>
              <div className="space-y-4">
                {menuItems
                  .filter((item) => item.category === cat.id)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-3 bg-white border border-gray-100 rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => navigate(`/food/${item.id}`)}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover flex-shrink-0"
                      />
                      <div className="flex-1 py-2 pr-3 flex flex-col justify-between">
                        <div>
                          <h4 className="font-bold text-sm text-textDark line-clamp-1">
                            {item.name}
                          </h4>
                          <p className="text-xs text-textDark/60 mt-1 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <Price value={item.price} className="text-brandOrange font-bold text-sm" />
                          <button className="h-7 w-7 rounded-full bg-brandOrange text-white flex items-center justify-center text-lg hover:bg-brandOrange/90 transition-colors">
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              
              {cat.id !== "desserts" && (
                <button className="w-full mt-4 text-brandBlue text-sm font-medium hover:underline">
                  View All Categories
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View - Keep existing desktop layout */}
      <div className="hidden md:block">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <h1 className="text-3xl font-bold mb-2">Menu</h1>
          <p className="text-textDark/60 mb-8">Browse categories and order fast.</p>

          {/* Desktop menu layout can stay as is or be enhanced */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => navigate(`/food/${item.id}`)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg text-textDark mb-2">{item.name}</h3>
                  <p className="text-sm text-textDark/60 mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <Price value={item.price} className="text-brandOrange font-bold" />
                    <button className="h-9 px-4 rounded-lg bg-brandOrange text-white font-medium hover:bg-brandOrange/90 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

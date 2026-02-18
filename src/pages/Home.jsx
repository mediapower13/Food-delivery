import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import FoodCard from "../components/FoodCard";
import { foods, featured } from "../data/menu";

export default function Home() {
  const popularCategories = [
    { title: "Jollof Delights", image: "/images/img11.png", to: "/explore?cat=jollof" },
    { title: "Swallow & Soups", image: "/images/img23.png", to: "/explore?cat=swallow" },
    { title: "Grills & BBQ", image: "/images/img24.png", to: "/explore?cat=grills" },
    { title: "Sweet Treats", image: "/images/img22.png", to: "/explore?cat=desserts" },
    { title: "Jollof Delights", image: "/images/img23.png", to: "/explore?cat=jollof" },
    { title: "Jollof Delights", image: "/images/img24.png", to: "/explore?cat=jollof" },
  ];

  // Chef's Specials - specific foods for home page
  const chefSpecials = [
    {
      id: "fish-pepper-soup-chef",
      name: "Spicy Tilapia Pepper Soup",
      price: 4159,
      category: "popular",
      image: "/images/img21.png",
      description: "A comforting and spicy soup with tender tilapia fish.",
    },
    {
      id: "jollof-fried-chicken-chef1",
      name: "Jollof Rice & Fried Chicken",
      price: 4159,
      category: "popular",
      image: "/images/img11.png",
      description: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
    },
    {
      id: "jollof-fried-chicken-chef2",
      name: "Jollof Rice & Fried Chicken",
      price: 4159,
      category: "popular",
      image: "/images/img11.png",
      description: "Our signature Jollof rice served with crispy fried chicken and plantain.",
    },
    {
      id: "jollof-smoked-chicken-chef",
      name: "Jollof Rice & Smoked Chicken",
      price: 4159,
      category: "popular",
      image: "/images/img11.png",
      description: "Flavorful jollof rice with tender smoked chicken.",
    },
    {
      id: "jollof-fried-chicken-chef3",
      name: "Jollof Rice & Fried Chicken",
      price: 4159,
      category: "popular",
      image: "/images/img26.png",
      description: "Our signature Jollof rice with crispy fried chicken and sides.",
    },
    {
      id: "egusi-pounded-chef",
      name: "Egusi Soup & Pounded Yam",
      price: 4159,
      category: "popular",
      image: "/images/img20.png",
      description: "Rich and savory egusi soup with assorted meats, paired with freshly pounded yam.",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden h-[600px] md:h-[1024px]">
        <div className="absolute inset-0">
          <img
            src="/images/img2.png"
            alt="Delicious Nigerian food spread"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative mx-auto max-w-6xl px-4 h-full flex flex-col justify-center md:justify-start md:pt-[365px]">
          {/* Text Section */}
          <div className="flex flex-col gap-8 md:gap-[42px] max-w-full md:w-[922px] md:h-[302px] justify-center md:justify-start">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              The Heart of Nigerian Home Cooking
            </h1>
            <p className="text-white/95 text-base md:text-lg">
              Handcrafted with passion, delivered with care.
            </p>
            <button className="inline-flex h-11 px-8 items-center justify-center rounded-lg bg-brandOrange text-white font-semibold hover:bg-brandOrange/90 transition-colors shadow-md w-fit">
              Discover what's new
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-6 md:top-[975px] md:bottom-auto w-full max-w-[90%] md:max-w-[1069px] px-4 md:px-0">
          <div className="bg-white rounded-lg overflow-hidden h-14 md:h-[78px]" style={{ boxShadow: '0px 6px 30px 5px rgba(0, 0, 0, 0.12)' }}>
            <div className="flex items-center gap-4 px-4 md:px-4 h-full">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                className="w-full outline-none text-sm md:text-base placeholder:text-gray-400"
                placeholder="What are you craving for today?"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <h2 className="text-xl md:text-3xl font-bold text-textDark mb-6 md:mb-8 text-center">
          Popular Categories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          {popularCategories.map((c, idx) => (
            <CategoryCard key={idx} title={c.title} image={c.image} to={c.to} />
          ))}
        </div>
      </section>

      {/* Chef's Specials */}
      <section className="bg-white py-8 md:py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-3xl font-bold text-textDark">
              Chef's Specials
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {chefSpecials.map((f) => (
              <FoodCard key={f.id} food={f} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="relative w-full">
        <div className="relative w-full h-64 md:h-[610px]">
          <img
            src="/images/img3.png"
            alt="New menu additions"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(29, 29, 29, 0.45), rgba(29, 29, 29, 0.45))' }} />
          
          <div className="absolute inset-0 flex items-center px-4 py-8 md:px-12 md:py-[164px]">
            <div className="w-full max-w-[1344px] mx-auto">
              <div className="flex flex-col gap-4 md:gap-[10px]">
                <h3 className="text-white text-lg md:text-[48px] font-extrabold md:leading-[67px] leading-tight">
                  Introducing Our New Menu Additions!
                </h3>
                <p className="text-white text-xs md:text-2xl font-semibold md:leading-[34px] leading-relaxed max-w-full md:max-w-[1344px]">
                  Explore exciting new dishes, crafted with the freshest ingredients and authentic Nigerian flavors. Limited time offer!
                </p>
                <button className="inline-flex mt-2 md:mt-[27px] h-9 md:h-[54px] px-5 md:px-8 items-center justify-center rounded-lg md:rounded-[10px] bg-[#FF7A18] text-white text-xs md:text-base font-semibold hover:bg-[#FF7A18]/90 transition-colors w-fit">
                  Discover what's new
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

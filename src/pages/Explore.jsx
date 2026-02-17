import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FoodCard from "../components/FoodCard";
import { categories, foods } from "../data/menu";

export default function Explore() {
  const [params, setParams] = useSearchParams();
  const initial = params.get("cat") || "popular";
  const [active, setActive] = useState(initial);

  const activeCategory = useMemo(
    () => categories.find((c) => c.id === active) || categories[0],
    [active]
  );

  const items = useMemo(() => {
    if (active === "popular") return foods.slice(0, 6);
    return foods.filter((f) => f.category === active);
  }, [active]);

  const selectCategory = (id) => {
    setActive(id);
    setParams((p) => {
      p.set("cat", id);
      return p;
    });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="relative bg-white h-[400px] md:h-[676px]">
        <div className="relative h-full">
          <img
            src="/images/img25.png"
            alt="Chuks Kitchen menu"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }} />
          
          {/* Text Section */}
          <div className="absolute px-4 md:px-0 md:left-[calc(50%-922px/2-211px)] top-[150px] md:top-[293px] w-full md:w-[922px] md:h-[106px]">
            <div className="flex flex-col gap-[11px]">
              <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
                Chuks Kitchen
              </h1>
              <p className="text-white/95 text-sm md:text-lg drop-shadow">
                Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-[#F3F4F6] py-10 px-4 md:py-[82px] md:px-[38px]">
        <div className="mx-auto max-w-[1440px]">
          {/* Menu Categories */}
          <div className="flex flex-col items-start py-[26px] gap-[18px] w-full bg-white rounded-t-[14px] mb-10">
            {/* Header */}
            <div className="flex flex-col items-start px-[26px] gap-2.5 w-full bg-white rounded-[14px]">
              <div className="flex flex-row justify-center items-center py-2.5 gap-2.5 w-full">
                <h3 className="flex-grow font-semibold text-2xl leading-[34px] text-black">Menu Categories</h3>
              </div>
            </div>
            
            {/* Categories */}
            <div className="w-full">
              {categories.map((c) => (
                <button
                  key={c.id}
                  className={[
                    "w-full flex flex-row items-center transition-colors",
                    active === c.id
                      ? "bg-[#FFE1C4] h-14"
                      : "px-6 h-[34px] hover:bg-gray-50",
                  ].join(" ")}
                  onClick={() => selectCategory(c.id)}
                >
                  {active === c.id && (
                    <div className="w-1 h-14 bg-[#FF7A18] flex-none" />
                  )}
                  <span className={[
                    "font-medium text-2xl leading-[34px] text-black flex-grow",
                    active === c.id ? "pl-[19px]" : ""
                  ].join(" ")}>
                    {c.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Food Sections */}
          <div className="space-y-12">
            {/* Popular */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-textDark mb-6">
                Popular
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {foods.filter(f => f.category === "popular").slice(0, 6).map((f) => (
                  <FoodCard key={f.id} food={f} />
                ))}
              </div>
            </div>

            {/* Jollof Rice & Entrees */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-textDark mb-6">
                Jollof Rice & Entrees
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {foods.filter(f => f.category === "jollof").slice(0, 3).map((f) => (
                  <FoodCard key={f.id} food={f} />
                ))}
              </div>
            </div>

            {/* Swallow & Soups */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-textDark mb-6">
                Swallow & Soups
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {foods.filter(f => f.category === "swallow").slice(0, 3).map((f) => (
                  <FoodCard key={f.id} food={f} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

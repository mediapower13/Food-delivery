import { Link } from "react-router-dom";
import Price from "./ui/Price";
import { useCartStore } from "../store/useCartStore";

export default function FoodCard({ food, compact = false }) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
      <Link to={`/food/${food.id}`} className="block relative overflow-hidden">
        <div className={compact ? "h-36 md:h-40" : "h-40 md:h-44"}>
          <img
            src={food.image}
            alt={food.name}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      </Link>

      <div className="p-3 md:p-4">
        <Link to={`/food/${food.id}`} className="block">
          <h3 className="font-bold text-xs md:text-base leading-snug text-textDark">
            {food.name}
          </h3>
          {food.description && (
            <p className="mt-1 text-xs text-textDark/60 line-clamp-2">
              {food.description}
            </p>
          )}
        </Link>

        <div className="mt-2 md:mt-3 flex items-center justify-between">
          <Price value={food.price} className="text-brandOrange font-bold text-sm md:text-base" />
          
          <button
            onClick={() => addItem(food)}
            className="h-7 w-7 md:h-8 md:w-8 rounded-full bg-brandOrange text-white flex items-center justify-center hover:bg-brandOrange/90 transition-colors shadow-md"
            aria-label="Add to cart"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

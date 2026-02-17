import { foods } from "../data/foods";
import FoodCard from "../components/food/FoodCard";

export default function Menu() {
  return (
    <div className="px-4 pt-4">
      <div className="text-xl font-bold">Menu</div>
      <div className="text-sm text-gray-600 mt-1">Browse categories and order fast.</div>

      <div className="mt-4 grid grid-cols-1 gap-4">
        {foods.map((f) => (
          <FoodCard key={f.id} food={f} />
        ))}
      </div>
    </div>
  );
}

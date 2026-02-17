import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { useCartStore } from "../../store/useCartStore";

export default function FoodCard({ food }) {
  const nav = useNavigate();
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div className="rounded-card border bg-white shadow-sm overflow-hidden">
      <button onClick={() => nav(`/food/${food.id}`)} className="w-full text-left">
        <img
          src={food.image}
          alt={food.name}
          className="h-36 w-full object-cover"
          onError={(e) => {
            e.currentTarget.src =
              "data:image/svg+xml;charset=utf-8," +
              encodeURIComponent(
                `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='400'>
                  <rect width='100%' height='100%' fill='#F4F4F4'/>
                  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#777' font-size='20'>
                    Add image in public/images
                  </text>
                </svg>`
              );
          }}
        />
        <div className="p-3">
          <div className="font-semibold">{food.name}</div>
          <div className="text-sm text-gray-600 mt-1">{food.short}</div>
          <div className="mt-2 font-semibold">₦{food.price.toLocaleString()}</div>
        </div>
      </button>

      <div className="px-3 pb-3">
        <button
          onClick={() => addItem(food)}
          className="w-full h-11 rounded-btn bg-softGray flex items-center justify-center gap-2 font-medium"
        >
          <Plus size={18} /> Add to Cart
        </button>
      </div>
    </div>
  );
}

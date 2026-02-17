import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Price, { formatNaira } from "../components/ui/Price";
import { getFood } from "../data/menu";
import { useCartStore } from "../store/useCartStore";

const proteinOptions = [
  { id: "fried-chicken", label: "Fried Chicken", extra: 0, default: true },
  { id: "grilled-fish", label: "Grilled Fish", extra: 500 },
  { id: "beef", label: "Beef", extra: 700 },
];

const extraSides = [
  { id: "plantain", label: "Fried Plantain", extra: 700 },
  { id: "coleslaw", label: "Coleslaw", extra: 500 },
  { id: "pepper-sauce", label: "Extra Pepper Sauce", extra: 300 },
];

export default function FoodDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const addItem = useCartStore((s) => s.addItem);

  const food = useMemo(() => getFood(id), [id]);

  const [protein, setProtein] = useState(
    proteinOptions.find((p) => p.default)?.id || proteinOptions[0].id
  );
  const [sides, setSides] = useState(() => new Set());
  const [instructions, setInstructions] = useState(
    "E.g no onion, food is too spicy, food is too hot hhhhhhhhhh\nfood is tasty"
  );

  const addOnTotal = useMemo(() => {
    const prot = proteinOptions.find((p) => p.id === protein)?.extra || 0;
    const sidesTotal = [...sides].reduce((sum, sid) => {
      const s = extraSides.find((x) => x.id === sid);
      return sum + (s?.extra || 0);
    }, 0);
    return prot + sidesTotal;
  }, [protein, sides]);

  const totalPrice = (food?.price || 0) + addOnTotal;

  if (!food) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-textDark/70">Food item not found.</p>
        <Link className="text-brandBlue underline" to="/explore">
          Back to Explore
        </Link>
      </div>
    );
  }

  const toggleSide = (sid) => {
    setSides((prev) => {
      const next = new Set(prev);
      if (next.has(sid)) next.delete(sid);
      else next.add(sid);
      return next;
    });
  };

  const handleAdd = () => {
    const proteinObj = proteinOptions.find((p) => p.id === protein);
    const selectedSides = [...sides].map(
      (sid) => extraSides.find((s) => s.id === sid)?.label
    );

    addItem(food, {
      protein: proteinObj?.label,
      sides: selectedSides.filter(Boolean),
      instructions,
      addOnTotal,
    });

    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-4 py-6">
        <div className="grid gap-0 md:grid-cols-[1fr_1fr]">
          {/* Left - Image Section */}
          <div className="overflow-hidden bg-white">
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-full object-cover min-h-[400px] md:min-h-[600px]"
            />
          </div>

          {/* Right - Details Section */}
          <div className="bg-white p-6 md:p-10 relative flex flex-col max-h-screen overflow-y-auto">
            <button
              onClick={() => navigate(-1)}
              className="absolute right-6 top-6 h-8 w-8 rounded-sm bg-black text-white flex items-center justify-center hover:bg-black/80 transition-colors text-lg"
              aria-label="Close"
            >
              ✕
            </button>

            <div>
              <h1 className="text-3xl font-bold text-textDark pr-10">{food.name}</h1>
              <div className="mt-2">
                <Price value={totalPrice} className="text-brandOrange font-bold text-2xl" />
              </div>

              <p className="mt-4 text-sm text-textDark/70 leading-relaxed">
                {food.description || "Our signature Jollof rice, cooked to perfection with aromatic spices, served with juicy, golden-fried chicken. A classic Nigerian comfort food, rich in flavor and satisfying. Perfect for a quick lunch or a hearty dinner."}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 text-xs text-textDark/70">
                  <span className="text-orange-500">⚠</span> Mildly spicy
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 text-xs text-textDark/70">
                  <span className="text-green-500">🥗</span> Vegetarian option available
                </span>
                <Link to="#" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-xs text-blue-600 hover:underline">
                  View Allergies
                </Link>
                <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-xs text-brandBlue hover:bg-blue-100 transition-colors">
                  <span>ℹ</span> View Allergies
                </button>
              </div>
            </div>

            <div className="mt-6 flex-1 overflow-y-auto">
              <h2 className="font-bold text-lg">Choose Your Protein</h2>
              <div className="mt-3 space-y-2">
                {proteinOptions.map((p) => (
                  <label
                    key={p.id}
                    className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3 cursor-pointer hover:border-brandOrange transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="protein"
                        checked={protein === p.id}
                        onChange={() => setProtein(p.id)}
                        className="w-4 h-4 accent-brandOrange"
                      />
                      <span className="text-sm font-medium">{p.label}</span>
                    </div>
                    <div className="text-sm text-textDark/60">
                      {p.extra === 0 ? "(Default)" : `+${formatNaira(p.extra)}`}
                    </div>
                  </label>
                ))}
              </div>

              <h2 className="mt-6 font-bold text-lg">Extra Sides (Optional)</h2>
              <div className="mt-3 space-y-2">
                {extraSides.map((s) => (
                  <label
                    key={s.id}
                    className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3 cursor-pointer hover:border-brandOrange transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={sides.has(s.id)}
                        onChange={() => toggleSide(s.id)}
                        className="w-4 h-4 accent-brandOrange rounded"
                      />
                      <span className="text-sm font-medium">{s.label}</span>
                    </div>
                    <div className="text-sm text-textDark/60">
                      +{formatNaira(s.extra)}
                    </div>
                  </label>
                ))}
              </div>

              <h2 className="mt-6 font-bold text-lg">Special Instructions</h2>
              <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                className="mt-3 w-full min-h-[100px] border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-brandOrange resize-none"
                placeholder="E.g no onion, food is too spicy, food is too hot..."
              />
            </div>

            <button
              onClick={handleAdd}
              className="mt-6 w-full h-12 rounded-lg bg-brandOrange text-white font-semibold hover:bg-brandOrange/90 transition-colors shadow-md"
            >
              Add to cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

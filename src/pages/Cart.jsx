import { Link } from "react-router-dom";
import Price from "../components/ui/Price";
import { useCartStore } from "../store/useCartStore";

export default function Cart() {
  const items = useCartStore((s) => s.items);
  const setQty = useCartStore((s) => s.setQty);
  const removeItem = useCartStore((s) => s.removeItem);
  const subtotal = useCartStore((s) => s.subtotal);

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Your Cart</h1>

        <div className="bg-white border-2 border-blue-400 rounded-lg p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🛒</div>
              <p className="text-textDark/70 mb-4">Your cart is empty.</p>
              <Link 
                to="/explore" 
                className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-brandOrange text-white font-semibold hover:bg-brandOrange/90 transition-colors"
              >
                Browse Menu
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((i) => (
                <div
                  key={i.lineId}
                  className="flex items-center gap-4 border-b border-dashed border-gray-300 py-4 last:border-0"
                >
                  <img
                    src={i.food.image}
                    alt={i.food.name}
                    className="h-24 w-24 rounded-lg object-cover flex-shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-base md:text-lg">{i.food.name}</div>
                    <div className="text-sm text-textDark/60 mt-1">
                      {i.options?.protein ? `With ${i.options.protein}` : ""}
                      {i.options?.sides?.length
                        ? `, extra ${i.options.sides.join(", ").toLowerCase()}`
                        : ""}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-shrink-0">
                    <button
                      className="h-8 w-8 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-xl"
                      onClick={() => setQty(i.lineId, i.qty - 1)}
                      aria-label="Decrease"
                    >
                      −
                    </button>
                    <div className="w-10 text-center font-bold text-lg">{i.qty}</div>
                    <button
                      className="h-8 w-8 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-xl"
                      onClick={() => setQty(i.lineId, i.qty + 1)}
                      aria-label="Increase"
                    >
                      +
                    </button>
                  </div>

                  <Price
                    value={i.unitPrice * i.qty}
                    className="text-brandOrange font-bold text-lg w-24 text-right flex-shrink-0"
                  />

                  <button
                    className="h-8 w-8 rounded-md bg-brandOrange text-white hover:bg-brandOrange/90 flex items-center justify-center flex-shrink-0"
                    aria-label="Remove"
                    onClick={() => removeItem(i.lineId)}
                  >
                    ×
                  </button>
                </div>
              ))}

              <div className="pt-4 border-t border-dashed border-gray-300 mt-2">
                <Link
                  to="/explore"
                  className="inline-flex items-center gap-1 text-blue-600 text-sm hover:underline"
                >
                  <span>+</span>
                  <span>Add more items from Chuks Kitchen</span>
                </Link>
              </div>
            </div>
          )}

          {items.length > 0 && (
            <div className="mt-6 bg-white border-2 border-blue-400 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-lg font-semibold">Subtotal</div>
                <Price value={subtotal()} className="text-2xl font-bold text-textDark" />
              </div>

              <Link
                to="/order-summary"
                className="flex items-center justify-center w-full h-12 rounded-lg bg-brandOrange text-white font-semibold hover:bg-brandOrange/90 transition-colors"
              >
                Continue to Checkout
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

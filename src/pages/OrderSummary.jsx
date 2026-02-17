import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Price from "../components/ui/Price";
import { useCartStore } from "../store/useCartStore";

export default function OrderSummary() {
  const navigate = useNavigate();
  const subtotal = useCartStore((s) => s.subtotal)();

  const [promo, setPromo] = useState("");
  const [mode, setMode] = useState("delivery");
  const [notes, setNotes] = useState(
    "E.g no onion, food is too spicy, food is too hot hhhhhhhhhh\nfood is tasty"
  );

  const fees = useMemo(() => {
    const deliveryFee = mode === "delivery" ? 500 : 0;
    const serviceFee = 200;
    const tax = 0;
    return { deliveryFee, serviceFee, tax };
  }, [mode]);

  const total = subtotal + fees.deliveryFee + fees.serviceFee + fees.tax;

  const proceed = () => {
    if (mode === "delivery") navigate("/delivery");
    else navigate("/payment");
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="mx-auto max-w-xl px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Order Summary</h1>

        <div className="bg-white p-8">
          <div className="mb-6">
            <h2 className="text-base font-bold text-textDark mb-3">Add a Promo Code</h2>
            <div className="flex gap-3">
              <input
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
                placeholder="Enter Code here"
                className="flex-1 h-11 border border-gray-300 rounded-lg px-4 text-sm focus:outline-none focus:border-brandOrange"
              />
              <button className="h-11 px-8 rounded-lg bg-brandOrange text-white text-sm font-semibold hover:bg-brandOrange/90 transition-colors">
                Login
              </button>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6" />

          <div className="space-y-2 text-sm mb-6">
            <div className="flex justify-between py-1  text-textDark/70">
              <span>Subtotal</span>
              <Price value={subtotal} className="font-semibold text-textDark" />
            </div>
            <div className="flex justify-between py-1 text-textDark/70">
              <span>Delivery Fee</span>
              <Price value={fees.deliveryFee} className="font-semibold text-textDark" />
            </div>
            <div className="flex justify-between py-1 text-textDark/70">
              <span>Service Fee</span>
              <Price value={fees.serviceFee} className="font-semibold text-textDark" />
            </div>
            <div className="flex justify-between py-1 text-textDark/70">
              <span>Tax</span>
              <Price value={fees.tax} className="font-semibold text-textDark" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-6 py-3">
            <div className="text-xl font-bold">Total</div>
            <div className="text-2xl font-bold text-textDark">
              <Price value={total} />
            </div>
          </div>

          <div className="grid grid-cols-2 rounded-lg overflow-hidden mb-6">
            <button
              className={
                mode === "delivery"
                  ? "h-12 bg-brandOrange text-white font-semibold transition-colors"
                  : "h-12 bg-gray-200 text-textDark/70 font-medium hover:bg-gray-300 transition-colors"
              }
              onClick={() => setMode("delivery")}
            >
              Delivery
            </button>
            <button
              className={
                mode === "pickup"
                  ? "h-12 bg-brandOrange text-white font-semibold transition-colors"
                  : "h-12 bg-gray-200 text-textDark/70 font-medium hover:bg-gray-300 transition-colors"
              }
              onClick={() => setMode("pickup")}
            >
              Pick up
            </button>
          </div>

          <div className="mb-6">
            <div className="text-base font-bold mb-3">Special Instructions for Restaurant</div>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full min-h-[80px] border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-brandOrange resize-none"
              placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhh\nfood is tasty"
            />
          </div>

          <button
            onClick={proceed}
            className="w-full h-12 rounded-lg bg-brandOrange text-white font-semibold hover:bg-brandOrange/90 transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

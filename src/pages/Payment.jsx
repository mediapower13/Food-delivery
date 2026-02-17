import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Price, { formatNaira } from "../components/ui/Price";
import { useCartStore } from "../store/useCartStore";

export default function Payment() {
  const navigate = useNavigate();
  const subtotal = useCartStore((s) => s.subtotal)();

  const total = useMemo(() => {
    const deliveryFee = 500;
    const serviceFee = 200;
    const tax = 0;
    return subtotal + deliveryFee + serviceFee + tax;
  }, [subtotal]);

  const [method, setMethod] = useState("card");

  const pay = () => {
    // demo flow
    navigate("/card-loading");
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="mx-auto max-w-xl px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Payment</h1>

        <div className="bg-white p-8">

          <div className="mb-8">
            <div className="text-base font-bold mb-4">Pay With:</div>
            <div className="flex items-center gap-8 text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={method === "card"}
                  onChange={() => setMethod("card")}
                  className="w-4 h-4 accent-brandOrange"
                />
                <span className={method === "card" ? "font-medium text-textDark" : "text-textDark/60"}>Card</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={method === "bank"}
                  onChange={() => setMethod("bank")}
                  className="w-4 h-4 accent-brandOrange"
                />
                <span className={method === "bank" ? "font-medium text-textDark" : "text-textDark/60"}>Bank</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={method === "transfer"}
                  onChange={() => setMethod("transfer")}
                  className="w-4 h-4 accent-brandOrange"
                />
                <span className={method === "transfer" ? "font-medium text-textDark" : "text-textDark/60"}>Transfer</span>
              </label>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <div className="text-base font-bold mb-2">Card Number</div>
              <input
                className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm focus:outline-none focus:border-brandOrange"
                placeholder="1234 5678 9101 1121"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-base font-bold mb-2">Expiration Date</div>
                <input
                  className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm focus:outline-none focus:border-brandOrange"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <div className="text-base font-bold mb-2">CVV</div>
                <input
                  className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm focus:outline-none focus:border-brandOrange"
                  placeholder="123"
                  type="password"
                />
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm text-textDark/70 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-brandOrange rounded" />
              <span>Save card details</span>
            </label>
          </div>

          <button
            onClick={pay}
            className="mt-6 w-full h-12 rounded-lg bg-brandOrange text-white font-semibold hover:bg-brandOrange/90 transition-colors"
          >
            Pay {formatNaira(total)}
          </button>

          <p className="mt-4 text-xs text-textDark/40 text-center leading-relaxed">
            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
}

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";

export default function OrderSuccess() {
  const clear = useCartStore((s) => s.clear);

  useEffect(() => {
    clear();
  }, [clear]);

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="mx-auto max-w-lg px-4">
        <div className="bg-white p-12 text-center">
          {/* Success Icon */}
          <div className="mx-auto h-20 w-20 rounded-full bg-green-500 flex items-center justify-center text-white text-4xl shadow-lg">
            ✓
          </div>
          
          <h1 className="mt-6 text-2xl font-bold text-textDark">
            Order Placed Successfully!
          </h1>
          <p className="mt-2 text-sm text-textDark/60">
            Your delicious Chuks Kitchen meal is on its way!
          </p>

          <div className="mt-6 mb-8">
            <div className="text-xl font-bold text-textDark mb-2">
              Order #123RGR231567Y Confirmed
            </div>
          </div>

          <div className="space-y-3">
            <Link
              to="/"
              className="inline-flex w-full max-w-sm h-12 items-center justify-center rounded-lg bg-brandOrange text-white font-semibold hover:bg-brandOrange/90 transition-colors"
            >
              Track Order
            </Link>

            <button className="block mx-auto text-sm text-textDark/60 hover:text-textDark">
              Generate Receipt
            </button>
          </div>

          <div className="mt-8">
            <Link to="/" className="text-sm text-blue-600 hover:underline">
              Need help with your order?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

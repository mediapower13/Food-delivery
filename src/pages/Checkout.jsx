import Button from "../components/ui/Button";
import { useCartStore } from "../store/useCartStore";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const nav = useNavigate();
  const items = useCartStore((s) => s.items);
  const subtotal = useCartStore((s) => s.subtotal());
  const clear = useCartStore((s) => s.clear);

  const deliveryFee = items.length ? 800 : 0;
  const total = subtotal + deliveryFee;

  const placeOrder = () => {
    // Later: connect backend here
    clear();
    nav("/orders");
  };

  return (
    <div className="px-4 pt-4">
      <div className="text-xl font-bold">Checkout</div>

      <div className="mt-4 space-y-3">
        <div className="rounded-card border p-4">
          <div className="font-semibold">Delivery Address</div>
          <input
            className="mt-2 w-full h-12 rounded-xl border px-3 outline-none focus:border-brandOrange"
            placeholder="Enter address"
          />
        </div>

        <div className="rounded-card border p-4">
          <div className="font-semibold">Payment Method</div>
          <div className="mt-2 space-y-2 text-sm">
            <label className="flex items-center gap-2">
              <input type="radio" name="pay" defaultChecked />
              Pay on Delivery
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="pay" />
              Card Payment
            </label>
          </div>
        </div>

        <div className="rounded-card bg-softGray p-4">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>₦{subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span>Delivery Fee</span>
            <span>₦{deliveryFee.toLocaleString()}</span>
          </div>
          <div className="flex justify-between font-bold mt-2">
            <span>Total</span>
            <span>₦{total.toLocaleString()}</span>
          </div>
        </div>

        <Button disabled={items.length === 0} onClick={placeOrder}>
          Confirm Order
        </Button>
      </div>
    </div>
  );
}

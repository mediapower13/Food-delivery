import { Link, useNavigate } from "react-router-dom";

export default function DeliveryDetails() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile View */}
      <div className="md:hidden px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Delivery Details</h1>

        <div className="mb-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="text-sm text-textDark/80 flex-1">
                <div className="mb-1">
                  <span className="font-semibold text-textDark">Home: </span>
                  <span className="font-normal">123 Main Street, Victoria Island, Lagos</span>
                </div>
                <div>Apt 4B, Opposite Mega Plaza</div>
              </div>
              <button className="text-brandBlue text-sm font-medium hover:underline flex-shrink-0">
                Change Address
              </button>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="text-base font-bold mb-3">Delivery Time</div>
          <input
            className="w-full h-12 border border-gray-300 rounded-lg px-4 text-sm focus:outline-none focus:border-brandOrange"
            defaultValue="ASAP(30-25)"
          />
        </div>

        <div className="mb-6">
          <div className="text-base font-bold mb-3">
            Delivery Instructions <span className="text-textDark/40 font-normal">(Optional)</span>
          </div>
          <textarea
            className="w-full h-24 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brandOrange resize-none"
            placeholder="E.g a at the front of the door, knock twice....................."
          />
        </div>

        <div className="mb-8">
          <div className="text-base font-bold mb-3">Contact Address</div>
          <input
            className="w-full h-12 border border-gray-300 rounded-lg px-4 text-sm focus:outline-none focus:border-brandOrange"
            defaultValue="+234 801 234 5678"
          />
        </div>

        <button
          onClick={() => navigate("/payment")}
          className="w-full h-12 rounded-lg bg-brandOrange text-white font-semibold hover:bg-brandOrange/90 transition-colors"
        >
          Continue to Payment
        </button>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block py-8">
        <div className="mx-auto max-w-xl px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-8">Delivery Details</h1>

          <div className="bg-white p-8">
            <div className="mb-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-start justify-between gap-4">
                <div className="text-sm text-textDark/80">
                  <div className="font-semibold text-textDark mb-1">Home: <span className="font-normal">123 Main Street, Victoria Island, Lagos</span></div>
                  <div className="mt-1">Apt 4B, Opposite Mega Plaza</div>
                </div>
                <button className="text-blue-600 text-sm font-medium hover:underline flex-shrink-0">Change Address</button>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-base font-bold mb-3">Delivery Time</div>
              <input
                className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm focus:outline-none focus:border-brandOrange"
                defaultValue="ASAP(30-25)"
              />
            </div>

            <div className="mb-6">
              <div className="text-base font-bold mb-3">Delivery Instructions <span className="text-textDark/40 font-normal">(Optional)</span></div>
              <input
                className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm focus:outline-none focus:border-brandOrange"
                placeholder="E.g leave at the front of the door, knock twice....................."
              />
            </div>

            <div className="mb-8">
              <div className="text-base font-bold mb-3">Contact Address</div>
              <input
                className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm focus:outline-none focus:border-brandOrange"
                defaultValue="+234 801 234 5678"
              />
            </div>

            <button
              onClick={() => navigate("/payment")}
              className="w-full h-12 rounded-lg bg-brandOrange text-white font-semibold hover:bg-brandOrange/90 transition-colors"
            >
              Continue to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

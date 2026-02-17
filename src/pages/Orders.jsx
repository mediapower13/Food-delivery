export default function Orders() {
  return (
    <div className="px-4 pt-4">
      <div className="text-xl font-bold">Orders</div>
      <div className="mt-6 p-6 rounded-card bg-softGray">
        <div className="font-semibold">No active orders yet</div>
        <div className="text-sm text-gray-600 mt-2">
          When you place an order, tracking will appear here.
        </div>
      </div>
    </div>
  );
}

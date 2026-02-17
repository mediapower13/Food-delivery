export default function Profile() {
  return (
    <div className="px-4 pt-4">
      <div className="text-xl font-bold">Profile</div>

      <div className="mt-4 rounded-card border p-4">
        <div className="font-semibold">Account</div>
        <div className="text-sm text-gray-600 mt-1">Phone login (OTP)</div>
      </div>

      <div className="mt-4 rounded-card border p-4">
        <div className="font-semibold">Settings</div>
        <div className="text-sm text-gray-600 mt-1">Notifications, Address, Help</div>
      </div>
    </div>
  );
}

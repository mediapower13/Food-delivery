import { Link } from "react-router-dom";

export default function Placeholder({ title }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="bg-white rounded-card shadow-soft border border-black/5 p-10 text-center">
        <h1 className="text-2xl font-extrabold">{title}</h1>
        <p className="mt-2 text-textDark/60">
          This screen is a placeholder for now.
        </p>
        <Link
          to="/"
          className="inline-flex mt-6 h-11 px-6 items-center justify-center rounded-btn bg-brandOrange text-white font-semibold"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

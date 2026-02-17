import { Link } from "react-router-dom";

export default function CategoryCard({ title, image, to }) {
  return (
    <Link
      to={to}
      className="group bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
    >
      <div className="h-28 md:h-36 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <div className="p-2 md:p-3 text-center">
        <div className="text-xs md:text-base font-semibold text-textDark">{title}</div>
      </div>
    </Link>
  );
}

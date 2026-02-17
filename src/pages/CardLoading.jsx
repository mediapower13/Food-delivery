import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CardLoading() {
  const navigate = useNavigate();

  useEffect(() => {
    const t = window.setTimeout(() => navigate("/order-success"), 1400);
    return () => window.clearTimeout(t);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="relative h-16 w-16 animate-spin">
        <div className="absolute top-0 left-1/2 h-4 w-1 -ml-0.5 bg-brandOrange rounded-full" style={{ transformOrigin: '50% 32px' }} />
        <div className="absolute top-0 left-1/2 h-4 w-1 -ml-0.5 bg-gray-300 rounded-full" style={{ transform: 'rotate(45deg)', transformOrigin: '50% 32px' }} />
        <div className="absolute top-0 left-1/2 h-4 w-1 -ml-0.5 bg-gray-300 rounded-full" style={{ transform: 'rotate(90deg)', transformOrigin: '50% 32px' }} />
        <div className="absolute top-0 left-1/2 h-4 w-1 -ml-0.5 bg-gray-300 rounded-full" style={{ transform: 'rotate(135deg)', transformOrigin: '50% 32px' }} />
        <div className="absolute top-0 left-1/2 h-4 w-1 -ml-0.5 bg-gray-300 rounded-full" style={{ transform: 'rotate(180deg)', transformOrigin: '50% 32px' }} />
        <div className="absolute top-0 left-1/2 h-4 w-1 -ml-0.5 bg-gray-300 rounded-full" style={{ transform: 'rotate(225deg)', transformOrigin: '50% 32px' }} />
        <div className="absolute top-0 left-1/2 h-4 w-1 -ml-0.5 bg-gray-300 rounded-full" style={{ transform: 'rotate(270deg)', transformOrigin: '50% 32px' }} />
        <div className="absolute top-0 left-1/2 h-4 w-1 -ml-0.5 bg-gray-300 rounded-full" style={{ transform: 'rotate(315deg)', transformOrigin: '50% 32px' }} />
      </div>
    </div>
  );
}

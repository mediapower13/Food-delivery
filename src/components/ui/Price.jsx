export function formatNaira(amount) {
  const num = Number(amount) || 0;
  return `₦${num.toLocaleString("en-NG")}`;
}

export default function Price({ value, className = "" }) {
  return <span className={className}>{formatNaira(value)}</span>;
}

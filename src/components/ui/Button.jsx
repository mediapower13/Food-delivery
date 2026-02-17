export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "w-full h-12 rounded-btn font-medium transition active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed";
  const styles = {
    primary: "bg-brandOrange text-white shadow-soft",
    secondary: "border border-brandBlue text-brandBlue bg-white",
    ghost: "bg-softGray text-textDark",
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

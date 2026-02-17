/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brandOrange: "#FF6B00",
        brandPink: "#FF3C78",
        brandBlue: "#007BFF",
        textDark: "#1F1F1F",
        softGray: "#F4F4F4",
      },
      borderRadius: {
        card: "16px",
        btn: "12px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

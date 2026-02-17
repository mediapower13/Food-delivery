// Images are stored in /public/images as img1.png ... img24.png

export const categories = [
  { id: "popular", name: "Popular" },
  { id: "jollof", name: "Jollof Rice & Entrees" },
  { id: "swallow", name: "Swallow & Soups" },
  { id: "grills", name: "Grills & sides" },
  { id: "beverages", name: "Beverages" },
  { id: "desserts", name: "Desserts" },
];

export const foods = [
  {
    id: "jollof-fried-chicken",
    name: "Jollof Rice & Fried Chicken",
    price: 4159,
    category: "popular",
    tags: ["Mildly spicy", "Vegetarian option available"],
    image: "/images/img11.png",
    description:
      "Our signature Jollof rice, served with crispy fried chicken and plantain.",
  },
  {
    id: "eba-egusi",
    name: "Eba & Egusi Soup (Goat Meat)",
    price: 3505,
    category: "popular",
    image: "/images/img12.png",
    description:
      "Hearty egusi soup with tender goat meat, served with soft Eba",
  },
  {
    id: "pounded-edikaikong",
    name: "Pounded Yam & Edikaikong",
    price: 3800,
    category: "popular",
    image: "/images/img13.png",
    description:
      "Traditional pounded yam with rich, leafy Edikaikong soup.",
  },
  {
    id: "peppered-snail",
    name: "Peppered Snail",
    price: 2500,
    category: "popular",
    image: "/images/img14.png",
    description: "Spicy and savory peppered snail, perfect as a starter.",
  },
  {
    id: "grilled-tilapia",
    name: "Grilled Tilapia Fish",
    price: 4127,
    category: "popular",
    image: "/images/img15.png",
    description: "Whole grilled tilapia fish seasoned with our special spices.",
  },
  {
    id: "jollof-fried-chicken-2",
    name: "Jollof Rice & Fried Chicken",
    price: 4159,
    category: "popular",
    image: "/images/img11.png",
    description: "Our signature Jollof rice served with crispy fried chicken and plantain.",
  },
  {
    id: "suya-beef",
    name: "Suya (Beef Skewers)",
    price: 3000,
    category: "grills",
    image: "/images/img24.png",
    description: "Smoky, spicy beef suya topped with crushed peanuts.",
  },
  {
    id: "peppered-snail-grills",
    name: "Peppered Snail",
    price: 2500,
    category: "grills",
    image: "/images/img14.png",
    description: "Spicy and savory peppered snail, perfect as a starter.",
  },
  {
    id: "grilled-tilapia-grills",
    name: "Grilled Tilapia Fish",
    price: 4127,
    category: "grills",
    image: "/images/img15.png",
    description: "Whole grilled tilapia fish seasoned with our special spices.",
  },
  {
    id: "jollof-smoked-fish",
    name: "Jollof Rice & Smoked Fish",
    price: 3500,
    category: "jollof",
    image: "/images/img16.png",
    description: "Flavorful jollof rice with perfectly smoked fish served on the side.",
  },
  {
    id: "party-jollof-veg",
    name: "Party Jollof Rice (Veg)",
    price: 2897,
    category: "jollof",
    image: "/images/img11.png",
    description: "Vegetarian party jollof full of rich flavors.",
  },
  {
    id: "party-jollof-veg-2",
    name: "Party Jollof Rice (Veg)",
    price: 2197,
    category: "jollof",
    image: "/images/img11.png",
    description: "Vegetarian party jollof full of rich flavors.",
  },
  {
    id: "amala-gbegiri",
    name: "Amala with Gbegiri & Ewedu",
    price: 3100,
    category: "swallow",
    image: "/images/img17.png",
    description:
      "Classic amala served with Gbegiri (beans) and Ewedu soup.",
  },
  {
    id: "fufu-okra-fish",
    name: "Fufu & Okra Soup (Fish)",
    price: 3307,
    category: "swallow",
    image: "/images/img18.png",
    description:
      "Hearty fufu served with fresh okra soup and fish.",
  },
  {
    id: "fufu-okra-fish-2",
    name: "Fufu & Okra Soup (Fish)",
    price: 3307,
    category: "swallow",
    image: "/images/img18.png",
    description:
      "Hearty fufu with fresh okra and fish, who says you can't have seconds!",
  },
  {
    id: "puff-puff",
    name: "Puff Puff",
    price: 1500,
    category: "desserts",
    image: "/images/img22.png",
    description: "Golden, fluffy puff puff served fresh.",
  },
];

export const featured = {
  heroImage: "/images/img19.png",
  promoImage: "/images/img10.png",
};

export function getFood(id) {
  return foods.find((f) => f.id === id);
}

export function foodsByCategory(categoryId) {
  if (!categoryId || categoryId === "all") return foods;
  return foods.filter((f) => f.category === categoryId);
}

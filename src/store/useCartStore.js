import { create } from "zustand";

function buildLineId(foodId, options = {}) {
  const base = foodId;
  const opt = JSON.stringify(options);
  return `${base}::${opt}`;
}

export const useCartStore = create((set, get) => ({
  items: [], // { lineId, food, qty, options, unitPrice }

  addItem: (food, options = {}, qty = 1) =>
    set((state) => {
      const lineId = buildLineId(food.id, options);
      const existing = state.items.find((i) => i.lineId === lineId);
      const unitPrice = Number(food.price || 0) + Number(options.addOnTotal || 0);

      if (existing) {
        return {
          items: state.items.map((i) =>
            i.lineId === lineId ? { ...i, qty: i.qty + qty } : i
          ),
        };
      }
      return {
        items: [...state.items, { lineId, food, qty, options, unitPrice }],
      };
    }),

  removeItem: (lineId) =>
    set((state) => ({ items: state.items.filter((i) => i.lineId !== lineId) })),

  setQty: (lineId, qty) =>
    set((state) => ({
      items: state.items
        .map((i) => (i.lineId === lineId ? { ...i, qty } : i))
        .filter((i) => i.qty > 0),
    })),

  clear: () => set({ items: [] }),

  subtotal: () =>
    get().items.reduce((sum, i) => sum + i.unitPrice * i.qty, 0),
}));

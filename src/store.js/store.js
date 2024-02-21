import   create  from 'zustand';
import { menuItems } from '../componets/menu';// Ensure the path is correct and there are no circular dependencies

const useCartStore = create((set) => ({
  items: [],
  // Removed direct reference of menuItems in state initialization to avoid potential timing issues
  addItem: (product) => set((state) => {
    const existingItemIndex = state.items.findIndex(item => item.id === product.id);
    if (existingItemIndex >= 0) {
      const items = [...state.items];
      items[existingItemIndex] = {
        ...items[existingItemIndex],
        quantity: items[existingItemIndex].quantity + 1
      };
      return { items };
    } else {
      return { items: [...state.items, { ...product, quantity: 1 }] };
    }
  }),
  removeItem: (id) => set((state) => ({
    items: state.items.filter(item => item.id !== id)
  })),
  increaseQuantity: (id) => set((state) => ({
    items: state.items.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
  })),
  decreaseQuantity: (id) => set((state) => ({
    items: state.items.map(item => 
      item.id === id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
    )
  })),
}));

export default useCartStore;

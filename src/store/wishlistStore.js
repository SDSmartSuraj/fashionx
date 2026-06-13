import { create } from "zustand";

const useWishlistStore = create((set, get) => ({
  wishlist: [],

  addToWishlist: (product) => {
    const exists = get().wishlist.find(
      (item) => item.id === product.id
    );

    if (!exists) {
      set((state) => ({
        wishlist: [...state.wishlist, product],
      }));
    }
  },

  removeFromWishlist: (id) =>
    set((state) => ({
      wishlist: state.wishlist.filter(
        (item) => item.id !== id
      ),
    })),
}));

export default useWishlistStore;
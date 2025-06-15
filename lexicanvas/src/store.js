import { create } from "zustand";
import { persist } from "zustand/middleware";

const useImageStore = create(
  persist(
    (set) => ({
      images: [],
      addImage: (url) =>
        set((state) => ({ images: [{ src: url }, ...state.images] })),

      removeImage: (index) =>
        set((state) => ({
          images: state.images.filter((_, i) => i !== index),
        })),
    }),
    {
      name: "generated-images",
    }
  )
);

export default useImageStore;

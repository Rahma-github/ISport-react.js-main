import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch products from JSON file
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await fetch("/data.json");
  const data = await response.json();
  return data.products;
});

const productSlice = createSlice({
  name: "products",
  initialState: { items: [], favorites: [], status: "idle", error: null },
  reducers: {
    toggleFavorite: (state, action) => {
      const product = action.payload;
      const exists = state.favorites.find((fav) => fav.id === product.id);
      state.favorites = exists
        ? state.favorites.filter((fav) => fav.id !== product.id)
        : [...state.favorites, product];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { toggleFavorite } = productSlice.actions;
export default productSlice.reducer;

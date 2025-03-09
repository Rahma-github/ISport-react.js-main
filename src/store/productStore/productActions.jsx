import { fetchProducts } from "./productSlice";

// Async action to fetch products
export const loadProducts = () => async (dispatch) => {
  try {
    dispatch(fetchProducts());
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

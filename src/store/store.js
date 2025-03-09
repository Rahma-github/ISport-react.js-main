import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productStore/productSlice";
import authReducer from "./authSlice"; 
import cartReducer from "./cartStore/cartSclice";
const store = configureStore({
  reducer: {
    products: productReducer,
    auth: authReducer, 
    cart: cartReducer,
  },
});

export default store;
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productStore/productStore.jsx";

import authReducer from "./userSlice/userSlice.jsx";

const store = configureStore({
  reducer: {
    products: productReducer,
    auth: authReducer,
  },
});

export default store;

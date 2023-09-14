import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slice/productSlice";
import cartReducer from "../slice/cartSlice";

//create store
const store = configureStore({
  reducer: { productReducer, cartReducer },
});

export default store;

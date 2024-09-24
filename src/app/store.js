import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../features/CartSlice"; // Ensure the path is correct
import CategoryReducer from "../features/CategorySlice"
import SearchReducer from "../features/SearchSlice"

const store = configureStore({
  reducer: {
    cartData: CartReducer,
    categoryList: CategoryReducer,
    search:SearchReducer
  },
});

export default store; // Make sure this is a default export

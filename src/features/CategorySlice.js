import { createSlice } from "@reduxjs/toolkit";
import FoodData from "../assets/data/FoodData";

const initialState = {
    allFood: FoodData,
    category: "All",
    filteredByCategory:FoodData,
};

const CategorySlice = createSlice({
    name: "Category",
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
            state.filteredByCategory = state.category === "All" ? state.allFood:state.allFood.filter((item) => item.category === state.category);
    },
}});

// Export the reducer
export default CategorySlice.reducer;

// Export the actions
export const { setCategory, inputSearch } = CategorySlice.actions;

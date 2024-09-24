import { createSlice } from "@reduxjs/toolkit";
import FoodData from "../assets/data/FoodData";

const initialState = {
    allFood: FoodData,
    cart: [],
    totalQty:0,
    totalPrice:0
};

export const CartSlice = createSlice({
    name: "food",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cart.find((item)=>item.id === action.payload.id)            
            existingItem?existingItem.quantity = existingItem.quantity+action.payload.quantity:state.cart.push(action.payload)

            //total price and quantity
            state.totalQty = state.cart.reduce((total, item) => total + item.quantity, 0);
            const priceList = state.cart.map((item)=>{
                return(
                    item.price*item.quantity
                )
            })
            state.totalPrice = priceList.reduce((total, item)=>total+item)

        },
        removeFromCart:(state, action)=>{
            const existingItem = state.cart.find((item)=>item.id===action.payload.id);
            state.cart = existingItem?state.cart.filter((item)=>item.id!==existingItem.id):state.cart

            //total price and quantity
            state.totalQty = state.cart.reduce((total, item) => total + item.quantity, 0);
            const priceList = state.cart.map((item)=>item.price*item.quantity)
            state.totalPrice = priceList.reduce((total, item)=>total+(item), 0)
        },
        decreaseQuantity:(state, action)=>{
            const existingItem = state.cart.find((item)=>item.id===action.payload.id)
            existingItem.quantity>1?existingItem.quantity = existingItem.quantity-1:state.cart = state.cart.filter((item)=>item.id!==existingItem.id)

            //total price and quantity
            state.totalQty = state.cart.reduce((total, item) => total + item.quantity, 0);
            const priceList = state.cart.map((item)=>item.price*item.quantity)
            state.totalPrice = priceList.reduce((total, item)=>total+(item), 0)
        },

    }
});

export default CartSlice.reducer;
export const { filterByCategory, addToCart, removeFromCart, decreaseQuantity } = CartSlice.actions;

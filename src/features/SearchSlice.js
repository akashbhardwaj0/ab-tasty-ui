import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inputSearchValue:"",

}

const SearchSlice = createSlice({
    name: "Search",
    initialState,
    reducers:{
        inputSearch:(state, action)=>{
            state.inputSearchValue = action.payload
        }

    }
})
export default SearchSlice.reducer
export const {inputSearch} = SearchSlice.actions
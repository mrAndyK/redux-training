import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Product {
    name: string;
    description: string;
    price: number;
}

export interface ProductsState {
    items: Product[];
}

const initialState: ProductsState = {
    items: [],
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        initProducts: (state: ProductsState, action:PayloadAction<Product[]>) => {
            state.items = action.payload;
        },
    },
});

export const selectProducts = (state: RootState) => state.products.items;

export const { initProducts } = productsSlice.actions;

export default productsSlice.reducer;
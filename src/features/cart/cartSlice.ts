import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

export interface CartItem {
    name: string;
    price: number;
    quantity: number;
}

export interface ICartSlice {
    items: CartItem[];
}

const initialState: ICartSlice = {
    items: [],
}
const findItem = (items: CartItem[], name: string): CartItem | undefined => {
    return items.find((i) => i.name === name);
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (
            state: ICartSlice,
            action: PayloadAction<{ name: string; price: number }>
        ) => {
            const { name, price } = action.payload;
            const item = findItem(state.items, name);

            if (item) {
                item.quantity += 1;
            } else {
                const newItem: CartItem = {
                    name: name,
                    price: price,
                    quantity: 1,
                };
                state.items.push(newItem);
            }
        },
        removeFromCart: (state: ICartSlice, action: PayloadAction<string>) => {
            const item = findItem(state.items, action.payload);
            if (item) {
                    state.items = state.items.filter(
                        (i) => i.name !== action.payload);
            }
        },
        incrementQuantity: (state: ICartSlice, action: PayloadAction<string>) => {
            const item = findItem(state.items, action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementQuantity: (state: ICartSlice, action: PayloadAction<string>) => {
            const item = findItem(state.items, action.payload);
            if (item) {
                item.quantity -= 1;
            }
        },
        initCart:(state:ICartSlice, action:PayloadAction<CartItem[]>)=>{
            state.items=action.payload
        }


    }
})

export const selectCartItems =(state: RootState) => state.cart.items;

export const selectCartItemsCount = (state: RootState) =>
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0);

export const selectCartTotal = (state: RootState) =>{
    return state.cart.items.reduce(
        (acc, item) => acc + item.price * item.quantity, 0);
}

export const{
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    initCart } = cartSlice.actions;
export default cartSlice.reducer;
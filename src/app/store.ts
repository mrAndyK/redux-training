import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import prodactReducer from '../features/product/productSlice';

import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
       cart: cartReducer,
      products: prodactReducer

  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

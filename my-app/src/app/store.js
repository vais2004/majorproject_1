import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartReducer";
import wishlistReducer from "../features/wishlistReducer";
import searchReducer from '../features/searchSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist:wishlistReducer,
    search:searchReducer,
  },
});

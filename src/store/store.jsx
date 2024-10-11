import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartslice';  

const store = configureStore({
  reducer: {
    cart: cartReducer,  // Corrected spelling here
  },
});

export default store;

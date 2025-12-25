import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/CounterSlice'
const Store = configureStore({
  reducer: {
    co:counterReducer
  },
});

export default Store;

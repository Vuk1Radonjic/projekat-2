import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] , item: null, actionId: null, product: null, saveIndex: null /*, removeObject: null */ };

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts(state) {
      state.items.push(state.item);
    },
    removeProducts(state) {
      state.items.filter(item => item.id === state.actionId);
    },
    showProducts(state) {
      state.saveIndex = state.items.findIndex(item => item.id === state.actionId);
      state.product = state.saveIndex;
      state.items.indexOf(state.product)
    },
  }
});

const store = configureStore({
  reducer: productSlice.reducer
});

export default store;

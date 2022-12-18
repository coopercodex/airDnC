import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../slices/favoriteSlice";

export const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
})
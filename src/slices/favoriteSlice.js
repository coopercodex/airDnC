import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
}

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromWishlist: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id)
      let newWish = [...state.items];
      if (index >= 0) {
        newWish.splice(index, 1)
      }
      state.items = newWish;
     }
  },
})

export const { addToFavorite, removeFromWishlist } = favoriteSlice.actions;
export const selectItems = (state) => state.favorite.items;
export default favoriteSlice.reducer;
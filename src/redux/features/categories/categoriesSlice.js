import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
}

const categoriesSlice = createSlice({
  name: category,
  initialState,
  reducers: {
    checkStatus: (state) => {
      state.categories.length === 0 ? 'Under Construction' : state.categories;
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
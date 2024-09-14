// src/features/itemsSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Redux slice for managing items, search term, current page, and items per page
const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`), // 100 items
    searchTerm: '',
    currentPage: 1,
    itemsPerPage: 10,
  },
  reducers: {
    // Action to update the search term and reset to the first page
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.currentPage = 1; // Reset to first page on search
    },
    // Action to update the current page
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setSearchTerm, setCurrentPage } = itemsSlice.actions;
export default itemsSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import itemsReducer, { setSearchTerm, setCurrentPage } from './itemSlice';

describe('itemsSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({ reducer: { items: itemsReducer } });
  });

  test('should handle initial state', () => {
    const state = store.getState().items;
    expect(state.items.length).toBe(100); // Assuming initial state has 100 items
    expect(state.searchTerm).toBe('');
    expect(state.currentPage).toBe(1);
    expect(state.itemsPerPage).toBe(10);
  });

  test('should handle setSearchTerm action', () => {
    store.dispatch(setSearchTerm('New Term'));
    const state = store.getState().items;
    expect(state.searchTerm).toBe('New Term');
    expect(state.currentPage).toBe(1); // Search resets to page 1
  });

  test('should handle setCurrentPage action', () => {
    store.dispatch(setCurrentPage(5));
    const state = store.getState().items;
    expect(state.currentPage).toBe(5);
  });

  test('should reset currentPage when searchTerm is updated', () => {
    store.dispatch(setCurrentPage(10)); // Set to a page other than 1
    store.dispatch(setSearchTerm('Updated Search'));
    const state = store.getState().items;
    expect(state.currentPage).toBe(1); // Page should reset to 1 on search term change
  });
});

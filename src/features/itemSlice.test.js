import itemsReducer, { setSearchTerm, setCurrentPage } from './itemSlice';

// Initial state as defined in the slice
const initialState = {
  items: Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`), // 100 items
  searchTerm: '',
  currentPage: 1,
  itemsPerPage: 10,
};

describe('itemsSlice reducer', () => {
  it('should return the initial state', () => {
    expect(itemsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle setSearchTerm', () => {
    const searchTerm = 'Item 1';
    const action = setSearchTerm(searchTerm);

    const expectedState = {
      ...initialState,
      searchTerm,
      currentPage: 1, // Reset to first page on search term change
    };

    expect(itemsReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle setCurrentPage', () => {
    const page = 2;
    const action = setCurrentPage(page);

    const expectedState = {
      ...initialState,
      currentPage: page,
    };

    expect(itemsReducer(initialState, action)).toEqual(expectedState);
  });
});

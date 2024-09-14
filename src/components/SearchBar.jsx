import React, {useCallback} from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../features/itemSlice';

// Wrapped with React.memo to prevent unnecessary re-renders
const SearchBar = React.memo(() => {
  const dispatch = useDispatch();
  
  // Used useCallback hook to avoid recreating the handleSearch function on every render
  const handleSearch = useCallback((e) => {
    dispatch(setSearchTerm(e.target.value));
  }, [dispatch]);

  return (
    <input
      type="text"
      onChange={handleSearch}
      placeholder="Search items..."
      className="search-bar"
    />
  );
});

export default SearchBar;

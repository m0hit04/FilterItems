// src/components/Pagination.js
import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../features/itemSlice';

// Component to handle pagination controls
const Pagination = React.memo(() => {
  // Accessing state from Redux store
  const { items, searchTerm, currentPage, itemsPerPage } = useSelector((state) => state.items);
  const dispatch = useDispatch();

  // Memoize the filtered items to avoid recalculating on every render when items or searchTerms doesn't change
  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  
  // Used the useCallback hook to avoid recreating handleClick function on every render
  const handleClick = useCallback((page) => {
    dispatch(setCurrentPage(page));
  }, [dispatch]);

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => handleClick(i + 1)}
          className={currentPage === i + 1 ? 'active' : ''}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
});

export default Pagination;

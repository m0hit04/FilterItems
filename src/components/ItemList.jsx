import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

// React.memo is used to prevent unnecessary re-renders
const ItemList = React.memo(() => {
  // Get the relevant state from Redux
  const { items, searchTerm, currentPage, itemsPerPage } = useSelector((state) => state.items);
  
  // Memoize the filtered items to avoid recalculating on every render
  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [items, searchTerm]);

  // Memoize the paginated items to avoid recalculating on every render
  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredItems.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredItems, currentPage, itemsPerPage]);

  return (
    <ul className="item-list">
      {paginatedItems.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </ul>
  );
});

export default ItemList;

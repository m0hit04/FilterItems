// src/components/Item.js
import React from 'react';

// Component to display an individual item in the list
// React.memo helps to avoid re-rendering this component unless the item prop changes
const Item = React.memo(({ item }) => {
  return <li className="item">{item}</li>;
});

export default Item;

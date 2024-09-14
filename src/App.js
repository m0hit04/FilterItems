import React from 'react';
import SearchBar from './components/SearchBar';
import ItemList from "./components/ItemList";
import Pagination from './components/Pagination';
import './App.css';

function App() {
  return (
    <div className="app">
      <SearchBar />
      <ItemList />
      <Pagination />
    </div>
  );
}

export default App;

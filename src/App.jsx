import { useState } from 'react';

import Header from './components/header/Header';
import ProductsContainer from './components/productsContainer/ProductsContainer';
import { PRODUCTS_INFO } from './constants/products-info';

const App = () => {
  // const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState('default');

  const filteredProducts = filterProducts([...PRODUCTS_INFO], filter);

  return (
    <>
      <Header
        filter={filter}
        setFilter={setFilter}
        filteredProducts={filteredProducts}
      />
      <ProductsContainer filteredProducts={filteredProducts} />
    </>
  );
};

const filterProducts = ([...PRODUCTS_INFO], filter) => {
  if (filter === 'default') {
    return [...PRODUCTS_INFO];
  }
  if (filter === 'name') {
    return [...PRODUCTS_INFO].sort((a, b) => a.title.localeCompare(b.title));
  }
  if (filter === 'price') {
    return [...PRODUCTS_INFO].sort((a, b) => a.price - b.price);
  }
  return [...PRODUCTS_INFO];
};

export default App;

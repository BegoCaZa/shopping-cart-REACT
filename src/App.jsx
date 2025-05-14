import { useState } from 'react';

import Header from './components/header/Header';
import ProductsContainer from './components/productsContainer/ProductsContainer';
import ShoppingCart from './components/shoppingCart/ShoppingCart';
import { PRODUCTS_INFO } from './constants/products-info';

const App = () => {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState('DEFAULT');

  console.log(cart);

  const filteredProducts = filterProducts(filter);

  return (
    <>
      <Header
        filter={filter}
        setFilter={setFilter}
        filteredProducts={filteredProducts}
      />
      <div className='main'>
        <ProductsContainer
          filteredProducts={filteredProducts}
          cart={cart}
          setCart={setCart}
        />
        <ShoppingCart cart={cart} setCart={setCart} />
      </div>
    </>
  );
};

const filterProducts = filter => {
  const productsCopy = [...PRODUCTS_INFO];
  if (filter === 'DEFAULT') {
    return productsCopy;
  }
  if (filter === 'NAME') {
    return productsCopy.sort((a, b) => a.title.localeCompare(b.title));
  }
  if (filter === 'PRICE') {
    return productsCopy.sort((a, b) => a.price - b.price);
  }
  return productsCopy;
};

export default App;

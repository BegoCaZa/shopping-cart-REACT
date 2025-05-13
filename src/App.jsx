// import { useState } from 'react';

import Header from './components/header/Header';
import ProductsContainer from './components/productsContainer/ProductsContainer';

const App = () => {
  // const [cart, setCart] = useState([]);
  // const [filter, setFilter] = useState('default');

  return (
    <>
      <Header />
      <ProductsContainer />
    </>
  );
};

export default App;

import { useState } from 'react';
import { PRODUCTS_INFO } from './constants/products-info';

const App = () => {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState('default');

  return (
    <>
      //header
      <div className='header'>
        <span className='header-title'>Desserts</span>
        <div className='buttons' id='filter-buttons'>
          <button className='button'>Default</button>
          <button className='button'>Name</button>
          <button className='button'>Price</button>
        </div>
      </div>
      //tarjetas de postres
      <div>
        {PRODUCTS_INFO.map(product => (
          <div key={product.id} className='card'>
            <picture>
              <source media='(min-width:1440px)' srcSet={product.imgDesktop} />
              <source media='(min-width:760px)' srcSet={product.imgTablet} />
              <source media='(min-width:360px)' srcSet={product.imgMobile} />
              <img
                className='product-image product-selected'
                src={product.imgMobile}
              />
            </picture>
            //boton
            <button className='button-add-to-cart'>
              <img
                className='icon'
                src='./assets/images/icon-add-to-cart.svg'
              />
              <span>Add to cart</span>
            </button>
            <div className='card-text-container'>
              <span className='product-subtitle'>{product.subtitle}</span>
              <span className='product-title'>{product.name}</span>
              <span className='product-price'>${product.price.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;

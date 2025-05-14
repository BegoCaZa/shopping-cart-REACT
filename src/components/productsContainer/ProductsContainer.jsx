// import { PRODUCTS_INFO } from '../../constants/products-info';
import styles from './ProductsContainer.module.css';

const ProductsContainer = ({ filteredProducts, cart, setCart }) => {
  const productExists = defineIfProductExists(product, cart);
  //positivo si existe en el carrito

  //editar el estado del carrito

  return (
    <>
      <div className={styles.dessertsContainer}>
        {filteredProducts.map(product => (
          <div key={product.id} className={styles.card}>
            <picture>
              <source media='(min-width:1440px)' srcSet={product.imgDesktop} />
              <source media='(min-width:760px)' srcSet={product.imgTablet} />
              <source media='(min-width:360px)' srcSet={product.imgMobile} />
              <img className={styles.productImage} src={product.imgMobile} />
            </picture>
            {/* //boton */}
            {/* condicional del if que NO ENTIENDO */}
            {productExists ? (
              <div>
                <img
                  className='icon-add-reduce'
                  src='/assets/images/icon-decrement-quantity.svg'
                  onClick={() => decrementQuantity(setCart, product, cart)}
                  //   falta definir estas funciones
                />
                <span>1</span>
                <img
                  className='icon-add-reduce'
                  src='/assets/images/icon-increment-quantity.svg'
                  onClick={() => incrementQuantity(setCart, product, cart)}
                  //   falta definir estas funciones
                />
              </div>
            ) : (
              <button
                className={styles.buttonAddToCart}
                onClick={() => addToCart(setCart, product, cart)}
              >
                <img
                  className={styles.icon}
                  src='./assets/images/icon-add-to-cart.svg'
                />
                <span>Add to cart</span>
              </button>
            )}
            {/* <button
              className={styles.buttonAddToCart}
              onClick={() => addToCart(setCart, product)}>
              <img
                className={styles.icon}
                src='./assets/images/icon-add-to-cart.svg'
              />
              <span>Add to cart</span>
            </button> */}
            <div className={styles.cardTextContainer}>
              <span className={styles.productSubtitle}>{product.name}</span>
              <span className={styles.productTitle}>{product.title}</span>
              <span className={styles.productPrice}>
                ${product.price.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

//tengo que verificar si el producto ya existe en el carrito
const addToCart = (setCart, product, cart) => {
  const updatedCart = [...cart, product];
  setCart(updatedCart); //este es el nuevo carrito
};

const defineIfProductExists = (product, cart) => {
  const productExists = cart.some(item => item.id === product.id); // Busca el producto en el carrito, igual que el otro ejercicio
  return productExists;
  //   const defineIfProductExists = (product, cart) => {
  //     return cart.some(item => item.id === product.id);
  //   }; lo tenia asi pero me falta que regrese product exist no?
};

//si existe, devuelve true, si no existe devuelve false

export default ProductsContainer;

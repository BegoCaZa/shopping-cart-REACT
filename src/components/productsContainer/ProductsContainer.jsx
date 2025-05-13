// import { PRODUCTS_INFO } from '../../constants/products-info';
import styles from './ProductsContainer.module.css';

const ProductsContainer = ({ filteredProducts }) => {
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
            <button className={styles.buttonAddToCart}>
              <img
                className={styles.icon}
                src='./assets/images/icon-add-to-cart.svg'
              />
              <span>Add to cart</span>
            </button>
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
export default ProductsContainer;

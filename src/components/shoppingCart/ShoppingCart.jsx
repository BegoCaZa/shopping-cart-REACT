import styles from './ShoppingCart.module.css';

const ShoppingCart = ({ cart, setCart }) => {
  return (
    <>
      <div className={styles.shoppingCart}>
        <span className={styles.cartTitle}>
          Your Cart
          <span>0</span>
        </span>
        <div className={styles.emptyCart}>
          <img
            src='/assets/images/illustration-empty-cart.svg'
            className={styles.emptyCartImage}
          />
          <span>Your added items will appear here</span>
        </div>
        <div className={styles.cartItems}></div>
      </div>
    </>
  );
};
export default ShoppingCart;

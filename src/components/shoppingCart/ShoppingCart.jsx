import styles from './ShoppingCart.module.css';

const ShoppingCart = ({ cart, setCart, removeFromCart }) => {
  //totales para el carrito
  let totalProducts = 0;
  for (let i = 0; i < cart.length; i++) {
    totalProducts += cart[i].quantity;
  }
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    const totalPerProduct = cart[i].quantity * cart[i].price;
    totalPrice += totalPerProduct;
  }
  return (
    <>
      <div className={styles.shoppingCart}>
        <span className={styles.cartTitle}>
          Your Cart <span>{totalProducts}</span>
        </span>

        {/* //condicional para dibujar el carrito */}
        {cart.length === 0 ? (
          <div className={styles.emptyCart}>
            <img
              src='/assets/images/illustration-empty-cart.svg'
              className={styles.emptyCartImage}
            />
            <span>Your added items will appear here</span>
          </div>
        ) : (
          <div className={styles.cartItems}>
            {cart.map(product => (
              <div key={product.id} className={styles.productSummary}>
                <div className={styles.cartSummaryTextContainer}>
                  <span className={styles.productSummaryTitle}>
                    {product.title}
                  </span>
                  <div className={styles.productSummaryPrices}>
                    <span className={styles.productSummaryQuantity}>
                      {product.quantity}x
                    </span>
                    <span className={styles.productSummaryPrice}>
                      ${product.price.toFixed(2)}
                    </span>
                    <span className={styles.productSummaryFinalPrice}>
                      ${(product.quantity * product.price).toFixed(2)}
                    </span>
                  </div>
                </div>
                <button
                  className={styles.removeItem}
                  onClick={() => removeFromCart(setCart, product, cart)}
                >
                  <img src='public/assets/images/icon-remove-item.svg' />
                </button>
              </div>
            ))}
            <div className={styles.orderTotalContainer}>
              <span className={styles.orderTotalText}>Total:</span>
              <span className={styles.orderTotalPrice}>
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default ShoppingCart;

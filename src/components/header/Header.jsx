import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <span className={styles.headerTitle}>Desserts</span>
      <div className={styles.buttons}>
        <button className={styles.button}>Default</button>
        <button className={styles.button}>Name</button>
        <button className={styles.button}>Price</button>
      </div>
    </div>
  );
};
export default Header;

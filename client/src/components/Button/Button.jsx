import styles from './Button.module.css';

export default function Button({ type, children }) {
  return (
    <button className={styles.button} type={type}>
      {children}
    </button>
  );
}

import styles from './Button.module.css';

export default function Button({ type, buttonStyle, children }) {
  return (
    <button className={`${styles.button} ${styles[buttonStyle]}`} type={type}>
      {children}
    </button>
  );
}

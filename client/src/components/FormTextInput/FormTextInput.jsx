import styles from './FormTextInput.module.css';

export default function FormTextInput({
  label,
  state,
  setState,
  error,
  setError,
}) {
  function handleChange(evt) {
    if (error) setError('');
    setState(evt.target.value);
  }
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label} htmlFor={state}>
        {label}
      </label>
      <input
        className={styles.input}
        id={state}
        type='text'
        value={state}
        onChange={handleChange}
      />
      <p className={styles.error}>{error}</p>
    </div>
  );
}

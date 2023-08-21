import styles from './FormTextInput.module.css';

export default function FormTextInput({
  forId,
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

  function clearError() {
    if (error) setError('');
  }
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label} htmlFor={forId}>
        {label}
      </label>
      <input
        onClick={clearError}
        onFocus={clearError}
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        id={forId}
        type='text'
        value={state}
        onChange={handleChange}
      />
      <p className={styles.error}>{error}</p>
    </div>
  );
}

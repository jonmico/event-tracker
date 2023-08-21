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
    <div>
      <label htmlFor={state}>{label}</label>
      <input id={state} type='text' value={state} onChange={handleChange} />
      <p>{error}</p>
    </div>
  );
}

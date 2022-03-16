import styled from 'styled-components';

export default function EntryForm({
  labelText,
  name,
  value,
  required,
  onChange,
  ariaLabel,
  children,
}) {
  return (
    <form aria-label={ariaLabel}>
      <label htmlFor={name}>{labelText}</label>
      <input
        id={name}
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        required={required}
      ></input>
      <button>{children}</button>
    </form>
  );
}

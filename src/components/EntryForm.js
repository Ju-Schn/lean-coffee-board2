import styled from 'styled-components';
import ScreenReaderOnly from './ScreenReaderOnly';

export default function EntryForm({ value, onChange, onSubmit }) {
  return (
    <Form onSubmit={handleSubmit} aria-labelledby="entry-form-name">
      <label htmlFor="text">
        <ScreenReaderOnly>Entry text</ScreenReaderOnly>
      </label>
      <input
        id="text"
        name="text"
        type="text"
        value={value}
        onChange={onChange}
        required
        minLength={3}
        placeholder="Add some text"
        autoComplete="off"
      ></input>
      <PlusButton id="entry-form-name">
        <ScreenReaderOnly>Create new entry</ScreenReaderOnly>
        <svg
          fill="#666"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="28px"
          height="28px"
        >
          <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z" />
        </svg>
      </PlusButton>
    </Form>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputElement = form.elements.text;
    onSubmit(inputElement.value);
    form.reset();
  }
}

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-self: flex-end;

  input {
    width: 100%;
    margin-right: 20px;

    border: none;
    box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
    color: #666;
  }
`;

const PlusButton = styled.button`
  padding: 0;
  border-radius: 50%;
  border: none;
  width: 28px;
  height: 28px;
  background-color: transparent;
  cursor: pointer;
`;

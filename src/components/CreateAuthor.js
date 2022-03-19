import styled from 'styled-components';

export default function CreateAuthor({ onSubmit }) {
  return (
    <CreateForm
      autoComplete="off"
      onSubmit={handleSubmit}
      aria-label="entry-form-name"
    >
      <label htmlFor="name">What is your name?</label>

      <input
        name="name"
        id="name"
        placeholder="... type here"
        type="text"
        required
      />
      <label>Choose a color:</label>
      <input type="color" name="color" defaultValue={'#FF69B4'} />
      <button>Save</button>
    </CreateForm>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputElement = form.elements.name;
    const inputColor = form.elements.color;
    onSubmit(inputElement.value, inputColor.value);
  }
}

const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  padding: 20px;
  width: 280px;

  input {
    border: none;
    box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
    color: #666;
    margin-bottom: 10px;
  }
`;

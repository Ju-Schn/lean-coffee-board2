export default function CreateAuthor({ onSubmit }) {
  return (
    <form
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
    </form>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputElement = form.elements.name;
    const inputColor = form.elements.color;
    onSubmit(inputElement.value, inputColor.value);
  }
}

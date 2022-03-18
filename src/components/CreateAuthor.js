export default function CreateAuthor({ onSubmit }) {
  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      aria-label="entry-form-name"
    >
      <label htmlFor="name">What is your Name</label>

      <input
        name="name"
        id="name"
        placeholder="put in your name ..."
        type="text"
      />
      <input type="color" name="color" />
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

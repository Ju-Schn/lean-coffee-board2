export default function CreateAuthor({ onSubmit }) {
  return (
    <form onSubmit={handleSubmit} aria-label="entry-form-name">
      <label htmlFor="name">What is your Name</label>

      <input
        name="name"
        id="name"
        placeholder="put in your name ..."
        type="text"
      />
      <button>Save</button>
    </form>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputElement = form.elements.name;
    onSubmit(inputElement.value);
  }
}

import { useState } from "react";

export default function AddItem({ onAddItem }) {
  const [title, setTitle] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onAddItem(title);
    setTitle('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Item"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button
          type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
import { useState } from "react";

export default function CommandForm({ onAdd }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Files");

  function handleSubmit(event) {
    event.preventDefault();
    if (name.trim() === "") return;
    onAdd(name.trim(), category);
    setName("");
  }

  return (
    <form className="command-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Command name (e.g. awk)"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="Files">Files</option>
        <option value="Text processing">Text processing</option>
        <option value="Networking">Networking</option>
        <option value="Processes">Processes</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

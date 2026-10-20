import { useState } from "react";
import CommandForm from "./components/commands/CommandForm.jsx";
import CommandList from "./components/commands/CommandList.jsx";

const initialCommands = [
  { id: 1, name: "ls", category: "Files" },
  { id: 2, name: "grep", category: "Text processing" },
  { id: 3, name: "ssh", category: "Networking" },
];

export default function App() {
  const [commands, setCommands] = useState(initialCommands);

  function addCommand(name, category) {
    const newCommand = { id: Date.now(), name, category };
    setCommands((prev) => [...prev, newCommand]);
  }

  return (
    <div className="app">
      <h1>Unix Command Study Tracker</h1>
      <CommandForm onAdd={addCommand} />
      <CommandList commands={commands} />
    </div>
  );
}

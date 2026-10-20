import { useState } from "react";
import Header from "./components/Header.jsx";
import AboutView from "./components/AboutView.jsx";
import CommandForm from "./components/commands/CommandForm.jsx";
import CommandList from "./components/commands/CommandList.jsx";

const initialCommands = [
  { id: 1, name: "ls", category: "Files" },
  { id: 2, name: "grep", category: "Text processing" },
  { id: 3, name: "ssh", category: "Networking" },
];

export default function App() {
  const [commands, setCommands] = useState(initialCommands);
  const [view, setView] = useState("dashboard");

  function addCommand(name, category) {
    const newCommand = { id: Date.now(), name, category };
    setCommands((prev) => [...prev, newCommand]);
  }

  return (
    <div className="app">
      <Header view={view} onChangeView={setView} />
      {view === "dashboard" ? (
        <>
          <CommandForm onAdd={addCommand} />
          <CommandList commands={commands} />
        </>
      ) : (
        <AboutView />
      )}
    </div>
  );
}

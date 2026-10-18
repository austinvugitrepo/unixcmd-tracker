import CommandList from "./components/commands/CommandList.jsx";

const sampleCommands = [
  { id: 1, name: "ls", category: "Files" },
  { id: 2, name: "grep", category: "Text processing" },
  { id: 3, name: "ssh", category: "Networking" },
];

export default function App() {
  return (
    <div className="app">
      <h1>Unix Command Study Tracker</h1>
      <CommandList commands={sampleCommands} />
    </div>
  );
}

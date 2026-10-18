import CommandItem from "./CommandItem.jsx";

export default function CommandList({ commands }) {
  return (
    <ul className="command-list">
      {commands.map((cmd) => (
        <CommandItem key={cmd.id} command={cmd} />
      ))}
    </ul>
  );
}

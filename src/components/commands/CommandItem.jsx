export default function CommandItem({ command }) {
  return (
    <li className="command-item">
      <code>{command.name}</code>
      <span>{command.category}</span>
    </li>
  );
}

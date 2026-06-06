interface OptionButtonProps {
  label: string;
  text: string;
  selected?: boolean;
  onClick: () => void;
}

export default function OptionButton({
  label,
  text,
  selected = false,
  onClick,
}: OptionButtonProps) {
  return (
    <button
      className={`option-button${selected ? " option-button--selected" : ""}`}
      onClick={onClick}
      aria-pressed={selected}
    >
      <span className="option-label">{label}</span>
      <span className="option-text">{text}</span>
      {selected && <span className="option-check">✓</span>}
    </button>
  );
}

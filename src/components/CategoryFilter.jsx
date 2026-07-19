export default function CategoryFilter({ label, options, selected, onSelect, children }) {
  return (
    <div className="filters">
      {label && <span>{label}: </span>}
      {options.map(option => (
        <button
          key={option.value}
          className={option.value === selected ? "active" : ""}
          onClick={() => onSelect(option.value)}
        >
          {option.label}
        </button>
      ))}
      {children}
    </div>
  );
}

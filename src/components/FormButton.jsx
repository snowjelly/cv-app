export default function FormButton({ id, onClick, className, children }) {
  return (
    <button id={id} type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}

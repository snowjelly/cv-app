export default function FormButton({ id, onClick, children }) {
  return (
    <button id={id} type="button" onClick={(e) => onClick}>
      {children}
    </button>
  );
}

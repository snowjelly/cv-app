export default function FormButton({ id, onSubmit }) {
  return <button id={id} type="button" onSubmit={(e) => onSubmit}></button>;
}

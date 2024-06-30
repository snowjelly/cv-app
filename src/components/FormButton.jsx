export default function FormButton({ id, onClick }) {
  return <button id={id} type="button" onClick={(e) => onClick}></button>;
}

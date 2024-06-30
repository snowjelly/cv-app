export default function FormInput({ id, type, value, valueAsStr, setData }) {
  return (
    <input
      className="form-input"
      type={type}
      value={value}
      id={id}
      onChange={(e) =>
        setData((prevData) => ({
          ...prevData,
          [valueAsStr]: e.target.value,
        }))
      }
    />
  );
}

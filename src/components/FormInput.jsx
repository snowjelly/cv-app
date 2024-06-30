export default function FormInput({ id, type, value, valueAsStr, setData }) {
  return (
    <input
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

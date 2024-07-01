export default function FormInput({ id, type, value, setData }) {
  function getDataKeyName() {
    const strArr = id.split("-").map((str, index) => {
      if (index === 0) return str;
      return str.replace(str.charAt(0), str.charAt(0).toUpperCase());
    });
    return strArr.join("");
  }

  const dataKey = getDataKeyName();

  return (
    <input
      className="form-input"
      type={type}
      value={value}
      id={`${id}-input`}
      onChange={(e) =>
        setData((prevData) => ({
          ...prevData,
          [dataKey]: e.target.value,
        }))
      }
    />
  );
}

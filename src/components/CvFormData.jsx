import FormInput from "./FormInput";

export default function CvFormData({
  headerStr,
  id,
  formInputType,
  formInputValue,
  formInputSetData,
  isSubmitted,
}) {
  return isSubmitted ? (
    <div className="form-input-container">
      <h3>{headerStr}</h3>
      <h4>{formInputValue}</h4>
    </div>
  ) : (
    <div className="form-input-container">
      <h3>{headerStr}</h3>
      <FormInput
        id={id}
        type={formInputType}
        value={formInputValue}
        setData={formInputSetData}
      />
    </div>
  );
}

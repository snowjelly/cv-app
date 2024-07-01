import CvFormData from "./CvFormData";

export default function FormDataSection({
  cvFormData,
  setData,
  isSubmitted,
  name,
}) {
  return (
    <section className={`${name}-form-section form-section`}>
      {cvFormData.map((formData) => (
        <CvFormData
          headerStr={formData.headerStr}
          id={formData.id}
          key={formData.id}
          formInputType={formData.type}
          formInputValue={formData.value}
          formInputSetData={setData}
          isSubmitted={isSubmitted}
        />
      ))}
    </section>
  );
}

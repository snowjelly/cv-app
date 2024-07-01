import FormInput from "./FormInput";

export default function EducationalExperienceForm({
  schoolName,
  titleOfStudy,
  dateOfStudy,
  setEducationalExperienceData,
}) {
  return (
    <section className="educational-experience-form-section form-section">
      <div className="form-input-container">
        <h3>School:</h3>
        <FormInput
          type="text"
          value={schoolName}
          valueAsStr="schoolName"
          id="school-name-input"
          setData={setEducationalExperienceData}
        />
      </div>
      <div className="form-input-container">
        <h3>Study:</h3>
        <FormInput
          type="text"
          value={titleOfStudy}
          valueAsStr="titleOfStudy"
          id="title-of-study-input"
          setData={setEducationalExperienceData}
        />
      </div>
      <div className="form-input-container">
        <h3>Study Date:</h3>
        <FormInput
          type="text"
          value={dateOfStudy}
          valueAsStr="dateOfStudy"
          id="date-of-study-input"
          setData={setEducationalExperienceData}
        />
      </div>
    </section>
  );
}

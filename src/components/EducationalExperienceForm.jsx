import FormInput from "./FormInput";

export default function EducationalExperienceForm({
  schoolName,
  titleOfStudy,
  dateOfStudy,
  setEducationalExperienceData,
}) {
  return (
    <section>
      <FormInput
        type="text"
        value={schoolName}
        valueAsStr="schoolName"
        id="school-name-input"
        setData={setEducationalExperienceData}
      />
      <FormInput
        type="text"
        value={titleOfStudy}
        valueAsStr="titleOfStudy"
        id="title-of-study-input"
        setData={setEducationalExperienceData}
      />
      <FormInput
        type="text"
        value={dateOfStudy}
        valueAsStr="dateOfStudy"
        id="date-of-study-input"
        setData={setEducationalExperienceData}
      />
    </section>
  );
}

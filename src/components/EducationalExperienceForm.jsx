import { useState } from "react";
import FormInput from "./FormInput";

export default function EducationalExperienceForm() {
  const [educationalExperienceData, setEducationalExperienceData] = useState({
    schoolName: "",
    titleOfStudy: "",
    dateOfStudy: "",
  });

  const { schoolName, titleOfStudy, dateOfStudy } = educationalExperienceData;

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

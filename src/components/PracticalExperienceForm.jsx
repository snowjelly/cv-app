import FormInput from "./FormInput";
import FormInputContainer from "./FormInputContainer";

export default function PracticalExperienceForm({
  companyName,
  positionTitle,
  mainResponsibilities,
  workedFrom,
  workedUntil,
  setPracticalExperienceData,
}) {
  return (
    <section className="practical-experience-form-section form-section">
      <FormInputContainer>
        <h3>Company Name:</h3>
        <FormInput
          id="company-name-input"
          type="text"
          value={companyName}
          valueAsStr="companyName"
          setData={setPracticalExperienceData}
        />
      </FormInputContainer>
      <FormInputContainer>
        <h3>Position:</h3>
        <FormInput
          id="position-title-input"
          type="text"
          value={positionTitle}
          valueAsStr="positionTitle"
          setData={setPracticalExperienceData}
        />
      </FormInputContainer>
      <FormInputContainer>
        <h3>Main Responsibilities:</h3>
        <FormInput
          id="main-responsibilities-input"
          type="text"
          value={mainResponsibilities}
          valueAsStr="mainResponsibilities"
          setData={setPracticalExperienceData}
        />
      </FormInputContainer>
      <FormInputContainer>
        <h3>Worked From:</h3>
        <FormInput
          id="worked-from-input"
          type="text"
          value={workedFrom}
          valueAsStr="workedFrom"
          setData={setPracticalExperienceData}
        />
      </FormInputContainer>
      <FormInputContainer>
        <h3>Worked Until:</h3>
        <FormInput
          id="worked-until-input"
          type="text"
          value={workedUntil}
          valueAsStr="workedUntil"
          setData={setPracticalExperienceData}
        />
      </FormInputContainer>
    </section>
  );
}

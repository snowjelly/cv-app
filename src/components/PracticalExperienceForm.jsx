import FormInput from "./FormInput";

export default function PracticalExperienceForm({
  companyName,
  positionTitle,
  mainResponsibilities,
  workedFrom,
  workedUntil,
  setPracticalExperienceData,
}) {
  return (
    <section>
      <FormInput
        id="company-name-input"
        type="text"
        value={companyName}
        valueAsStr="companyName"
        setData={setPracticalExperienceData}
      />
      <FormInput
        id="position-title-input"
        type="text"
        value={positionTitle}
        valueAsStr="positionTitle"
        setData={setPracticalExperienceData}
      />
      <FormInput
        id="main-responsibilities-input"
        type="text"
        value={mainResponsibilities}
        valueAsStr="mainResponsibilities"
        setData={setPracticalExperienceData}
      />
      <FormInput
        id="worked-from-input"
        type="text"
        value={workedFrom}
        valueAsStr="workedFrom"
        setData={setPracticalExperienceData}
      />
      <FormInput
        id="worked-until-input"
        type="text"
        value={workedUntil}
        valueAsStr="workedUntil"
        setData={setPracticalExperienceData}
      />
    </section>
  );
}

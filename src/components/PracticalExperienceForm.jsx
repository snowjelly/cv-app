export default function EducationalExperienceForm({
  companyName,
  positionTitle,
  mainResponsibilities,
  workedFrom,
  workedUntil,
  setData,
}) {
  return (
    <section>
      <input
        type="text"
        value={companyName}
        id="company-name-input"
        onChange={(e) =>
          setData((prevData) => ({
            ...prevData,
            companyName: e.target.value,
          }))
        }
      />
      <input
        type="text"
        value={titleOfStudy}
        id="title-of-study-input"
        onChange={(e) =>
          setData((prevData) => ({
            ...prevData,
            titleOfStudy: e.target.value,
          }))
        }
      />
      <input
        type="text"
        value={dateOfStudy}
        id="date-of-study-input"
        onChange={(e) =>
          setData((prevData) => ({
            ...prevData,
            dateOfStudy: e.target.value,
          }))
        }
      />
    </section>
  );
}

export default function EducationalExperienceForm({
  schoolName,
  titleOfStudy,
  dateOfStudy,
  setData,
}) {
  return (
    <section>
      <input
        type="text"
        value={schoolName}
        id="school-name-input"
        onChange={(e) =>
          setData((prevData) => ({
            ...prevData,
            schoolName: e.target.value,
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

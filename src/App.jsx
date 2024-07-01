import "./App.css";
import { useState } from "react";
import EducationalExperienceForm from "./components/EducationalExperienceForm";
import PracticalExperienceForm from "./components/PracticalExperienceForm";
import FormButton from "./components/FormButton";
import FormDataSection from "./components/FormDataSection";

function App() {
  const [generalInfoData, setGeneralInfoData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [educationalExperienceData, setEducationalExperienceData] = useState({
    schoolName: "",
    titleOfStudy: "",
    dateOfStudy: "",
  });

  const [practicalExperienceData, setPracticalExperienceData] = useState({
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    workedFrom: "",
    workedUntil: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const { firstName, lastName, email, phoneNumber } = generalInfoData;
  const { schoolName, titleOfStudy, dateOfStudy } = educationalExperienceData;
  const {
    companyName,
    positionTitle,
    mainResponsibilities,
    workedFrom,
    workedUntil,
  } = practicalExperienceData;

  const generalInfoCvFormData = [
    {
      headerStr: "First Name:",
      id: "first-name",
      type: "text",
      value: firstName,
    },
    {
      headerStr: "Last Name:",
      id: "last-name",
      type: "text",
      value: lastName,
    },
    {
      headerStr: "Email Address:",
      id: "email",
      type: "email",
      value: email,
    },
    {
      headerStr: "Phone Number:",
      id: "phone-number",
      type: "text",
      value: phoneNumber,
    },
  ];

  const handleEdit = (e) => {
    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    setIsSubmitted(true);
  };

  return (
    <form id="cv-form">
      <div className="cv-form-header">
        <div className="cv-form-title">
          <h1>Cv Form</h1>
        </div>
      </div>
      <div className="cv-form-section-container">
        <div className="cv-form-section-content">
          <h2>General Info</h2>
          <FormDataSection
            cvFormData={generalInfoCvFormData}
            setData={setGeneralInfoData}
            isSubmitted={isSubmitted}
            name="general-info"
          />
        </div>
        <div className="cv-form-section-content">
          <h2>Educational Experience</h2>
          <EducationalExperienceForm
            schoolName={schoolName}
            titleOfStudy={titleOfStudy}
            dateOfStudy={dateOfStudy}
            setEducationalExperienceData={setEducationalExperienceData}
          />
        </div>
        <div className="cv-form-section-content">
          <h2>Practical Experience</h2>
          <PracticalExperienceForm
            companyName={companyName}
            positionTitle={positionTitle}
            mainResponsibilities={mainResponsibilities}
            workedFrom={workedFrom}
            workedUntil={workedUntil}
            setPracticalExperienceData={setPracticalExperienceData}
          />
        </div>
      </div>
      <div className="cv-form-btn-container">
        <FormButton
          id="cv-form-edit-btn"
          onClick={handleEdit}
          className="cv-form-btn"
        >
          Edit
        </FormButton>
        <FormButton
          id="cv-form-submit-btn"
          onClick={handleSubmit}
          className="cv-form-btn"
        >
          Submit
        </FormButton>
      </div>
    </form>
  );
}

export default App;

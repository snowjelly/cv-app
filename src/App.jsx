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

  const educationalExperienceCvFormData = [
    {
      headerStr: "School:",
      id: "school-name",
      type: "text",
      value: schoolName,
    },
    {
      headerStr: "Study:",
      id: "title-of-study",
      type: "text",
      value: titleOfStudy,
    },
    {
      headerStr: "Study Date:",
      id: "date-of-study",
      type: "text",
      value: dateOfStudy,
    },
  ];

  const practicalExperienceCvFormData = [
    {
      headerStr: "Company Name:",
      id: "company-name",
      type: "text",
      value: companyName,
    },
    {
      headerStr: "Position:",
      id: "position-title",
      type: "text",
      value: positionTitle,
    },
    {
      headerStr: "Main Responsibilities:",
      id: "main-responsibilities",
      type: "textarea",
      value: mainResponsibilities,
    },
    {
      headerStr: "Worked From:",
      id: "worked-from",
      type: "text",
      value: workedFrom,
    },
    {
      headerStr: "Worked Until:",
      id: "worked-until",
      type: "text",
      value: workedUntil,
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
          <FormDataSection
            cvFormData={educationalExperienceCvFormData}
            setData={setEducationalExperienceData}
            isSubmitted={isSubmitted}
            name="educational-experience"
          />
        </div>
        <div className="cv-form-section-content">
          <h2>Practical Experience</h2>
          <FormDataSection
            cvFormData={practicalExperienceCvFormData}
            setData={setPracticalExperienceData}
            isSubmitted={isSubmitted}
            name="practical-experience"
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

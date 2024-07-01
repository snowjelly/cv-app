import CvFormData from "./CvFormData";

export default function GeneralInfoForm({
  firstName,
  lastName,
  email,
  phoneNumber,
  setGeneralInfoData,
  isSubmitted,
}) {
  return (
    <section className="general-info-form-section form-section">
      <CvFormData
        headerStr="First Name:"
        id="first-name"
        formInputType="text"
        formInputValue={firstName}
        formInputSetData={setGeneralInfoData}
        isSubmitted={isSubmitted}
      />
      <CvFormData
        headerStr="Last Name:"
        id="last-name"
        formInputType="text"
        formInputValue={lastName}
        formInputSetData={setGeneralInfoData}
        isSubmitted={isSubmitted}
      />
      <CvFormData
        headerStr="Email Address:"
        id="email"
        formInputType="email"
        formInputValue={email}
        formInputSetData={setGeneralInfoData}
        isSubmitted={isSubmitted}
      />
      <CvFormData
        headerStr="Phone Number:"
        id="phone-number"
        formInputType="tel"
        formInputValue={phoneNumber}
        formInputSetData={setGeneralInfoData}
        isSubmitted={isSubmitted}
      />
    </section>
  );
}

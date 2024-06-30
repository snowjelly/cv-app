import FormInput from "./FormInput";

export default function GeneralInfoForm({
  firstName,
  lastName,
  email,
  phoneNumber,
  setGeneralInfoData,
}) {
  return (
    <section className="general-info-form-section form-section">
      <h3>First Name:</h3>
      <FormInput
        id="first-name-input"
        type="text"
        value={firstName}
        valueAsStr="firstName"
        setData={setGeneralInfoData}
      />
      <h3>Last Name:</h3>
      <FormInput
        id="last-name-input"
        type="text"
        value={lastName}
        valueAsStr="lastName"
        setData={setGeneralInfoData}
      />
      <h3>Email Address:</h3>
      <FormInput
        id="email-input"
        type="email"
        value={email}
        valueAsStr="email"
        setData={setGeneralInfoData}
      />
      <h3>Phone Number:</h3>
      <FormInput
        id="phone-number-input"
        type="tel"
        value={phoneNumber}
        valueAsStr="phoneNumber"
        setData={setGeneralInfoData}
      />
    </section>
  );
}

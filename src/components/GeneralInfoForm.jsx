export default function GeneralInfoForm({
  firstName,
  lastName,
  email,
  phoneNumber,
  setCvData,
}) {
  return (
    <section>
      <input
        type="text"
        value={firstName}
        id="first-name-input"
        onChange={(e) =>
          setCvData((prevCvData) => ({
            ...prevCvData,
            firstName: e.target.value,
          }))
        }
      />
      <input
        type="text"
        value={lastName}
        id="last-name-input"
        onChange={(e) =>
          setCvData((prevCvData) => ({
            ...prevCvData,
            lastName: e.target.value,
          }))
        }
      />
      <input
        type="email"
        name="email-input"
        id="email-input"
        value={email}
        onChange={(e) =>
          setCvData((prevCvData) => ({
            ...prevCvData,
            email: e.target.value,
          }))
        }
      />
      <input
        type="tel"
        name="phone-number-input"
        id="phone-number-input"
        value={phoneNumber}
        onChange={(e) =>
          setCvData((prevCvData) => ({
            ...prevCvData,
            phoneNumber: e.target.value,
          }))
        }
      />
    </section>
  );
}

import React, { useState } from "react";
import ContactFormItem from "./ContactFormItem";
import styles from "./contactForm.module.css";

const inputs = [
  [
    {
      id: 1,
      flex: 1,
      name: "firstName",
      placeholder: "John",
      type: "text",
      label: "First Name",
      errorMessage: "First name be min 3 letter and start with a Capital. No special characters or numbers",
      required: true,
      pattern: "^[A-Z].{2,}$",
    },
    {
      id: 2,
      flex: 1,
      name: "lastName",
      placeholder: "Doe",
      type: "text",
      label: "Last Name",
      errorMessage: "Last name be min 3 letter and start with a Capital. No special characters or numbers",
      required: true,
      pattern: "^[A-Z].{2,}$",
    },
  ],
  {
    id: 3,
    name: "email",
    placeholder: "example@example.com",
    type: "email",
    label: "Email Address",
    errorMessage: "Please enter a valid email address",
    required: true,
  },
  {
    id: 4,
    name: "address",
    placeholder: "1 Example Road",
    type: "address",
    label: "Address",
    errorMessage: "Address should not be blank",
    required: true,
  },
  [
    {
      id: 5,
      flex: 2,
      name: "city",
      placeholder: "Cape Town",
      type: "text",
      label: "City",
      errorMessage: "City should not be blank",
      required: true,
    },
    {
      id: 6,
      flex: 1,
      name: "postCode",
      placeholder: "7441",
      type: "text",
      label: "Post Code",
      errorMessage: "Post Code should not be blank",
      required: true,
    },
    {
      id: 7,
      flex: 2,
      name: "state",
      placeholder: "Western Cape",
      type: "text",
      label: "Province",
      errorMessage: "Province should not be blank",
      required: true,
    },
  ],
];

const retrieveInputState = (inputsArr) => {
  return inputsArr.reduce((values, input) => {
    if (Array.isArray(input)) {
      return input.reduce((inlineValues, inlineInput) => {
        return { ...inlineValues, [inlineInput.name]: "" };
      }, values);
    }
    return { ...values, [input.name]: "" };
  }, {});
};

const ContactForm = () => {
  const [values, setValues] = useState(retrieveInputState(inputs));

  const inputChangeHandler = (e) => {
    setValues((prevValues) => ({ ...prevValues, [e.target.name]: e.target.value }));
  };

  const inputItems = inputs.map((input, i) => {
    if (Array.isArray(input)) {
      return (
        <div key={input[0].id} className={styles.inlineInput}>
          {input.map((inlineInput) => (
            <ContactFormItem
              key={inlineInput.id}
              {...inlineInput}
              onChange={inputChangeHandler}
              className={inlineInput.className}
            />
          ))}
        </div>
      );
    }
    return <ContactFormItem key={input.id} {...input} value={values[input.name]} onChange={inputChangeHandler} />;
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <h1>Shipping Information</h1>
      {inputItems}
      <button>SUBMIT</button>
    </form>
  );
};

export default ContactForm;

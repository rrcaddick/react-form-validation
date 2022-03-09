import React, { useState } from "react";
import FormInput from "./FormInput";
import styles from "./form.module.css";

const Form = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email ",
      label: "Email ",
    },
    {
      id: 3,
      name: "birthdate",
      type: "date",
      placeholder: "Date of birth",
      label: "Date of birth",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
    },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      {inputs.map((input) => {
        return <FormInput key={input.id} {...input} />;
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

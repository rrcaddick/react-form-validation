import React, { useState } from "react";
import FormInput from "./FormInput";
import styles from "./form.module.css";

const Form = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthdate: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be 3-16 characters and shouldn't contain any special characters",
      label: "Username",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email ",
      errorMessage: "Please enter a valid email address",
      label: "Email ",
      required: true,
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
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, number and special character",
      label: "Password",
      required: true,
      pattern: "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+])[A-Za-z\\d!@#$%^&*()_+]{8,20}$",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match",
      label: "Confirm Password",
      required: true,
      pattern: values.password,
    },
  ];

  const onChangeHandler = (e) => {
    setValues((prevValues) => ({ ...prevValues, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <h1>Register</h1>
      {inputs.map((input) => {
        return <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChangeHandler} />;
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

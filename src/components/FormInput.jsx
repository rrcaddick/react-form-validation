import React, { useState } from "react";
import styles from "./formInput.module.css";

const FormInput = ({ label, id, errorMessage, ...inputProps }) => {
  const [touched, setTouched] = useState(false);

  const inputBlutHandler = () => {
    setTouched(true);
  };

  const inputFocusHandler = () => {
    inputProps.name === "confirmPassword" && setTouched(true);
  };

  return (
    <div className={styles.formInput}>
      <label>{label}</label>
      <input {...inputProps} onFocus={inputFocusHandler} onBlur={inputBlutHandler} touched={String(touched)} />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;

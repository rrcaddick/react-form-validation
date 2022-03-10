import React, { useState } from "react";
import styles from "./contactFormItem.module.css";

const ContactFormItem = ({ label, id, errorMessage, flex, ...inputProps }) => {
  const [touched, setTouched] = useState(false);

  const inputBlurHandler = () => {
    setTouched(true);
  };

  const flexStyle = {
    flex: `${flex} 2 0px`,
  };

  return (
    <div className={`${styles.inputControl}`} style={flexStyle}>
      <label>{label}</label>
      <input {...inputProps} onBlur={inputBlurHandler} touched={String(touched)} />
      <span>{errorMessage}</span>
    </div>
  );
};

export default ContactFormItem;

import React from "react";
import styles from "./formInput.module.css";

const FormInput = (props) => {
  return (
    <div className={styles.formInput}>
      {/* <label>Username</label> */}
      <input type="text" name={props.name} placeholder={props.placeholder} />
    </div>
  );
};

export default FormInput;

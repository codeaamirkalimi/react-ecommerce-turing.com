import React from "react";
import "./FormInput.style.scss";

const FormInputComponent = (props) => {
  const { label, ...otherProps } = props;
  return (
    <div className="group">
      <input {...otherProps} className="form-input" />
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInputComponent;

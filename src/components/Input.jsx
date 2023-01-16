import React from "react";
import "./input.css";

const Input = ({ label, placeholder }) => {
  return (
    <label>
      {label} <span className="required">*</span>
      <input className="input" placeholder={placeholder} />
    </label>
  );
};

export default Input;

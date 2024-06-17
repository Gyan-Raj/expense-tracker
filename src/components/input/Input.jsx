import React from "react";
import style from "./Input.module.css";

const Input = ({ type, placeholder, name, value, onChange }) => {
  return (
    <input
      type={type}
      required
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className={style.input}
    />
  );
};

export default Input;

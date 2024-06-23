import React from "react";
import style from "./Input.module.css";

const Input = ({ type, placeholder, name, value, onChange, styles }) => {
  return (
    <input
      type={type}
      required
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className={style[styles]}
    />
  );
};

export default Input;

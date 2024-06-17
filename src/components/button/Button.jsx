import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, style, onClick, balance }) => {
  return (
    <button onClick={onClick} className={styles[style]}>
      {children}
    </button>
  );
};

export default Button;

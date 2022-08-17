import React from "react";
import style from "../styles/Error.module.css";

const Error = ({ children }) => {
  return (
    <div className={style.alerta}>
      <p>{children}</p>
    </div>
  );
};

export default Error;

import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";

const CardTerminal = ({code}) => {
  return (
    <li>
      <Link to={`${code}`} className={style.container}>
        <p className={style.container__text}>
          <span className={style.text__title}>Berçário: </span>
          <span className={style.text__value}>{code}</span>
        </p>
      </Link>
    </li>
  );
};

export default CardTerminal;

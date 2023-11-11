import React from "react";
import style from "./style.module.css";

const CardPanelDisplay = ({ value, unit, description }) => {
  return (
    <div className={style.card_panel}>
      <p className={style.panel__values}>
        <span className={style.value}>{value}</span>
        <span className={style.unit}>{unit}</span>
      </p>
      <p className={style.description}>{description}</p>
    </div>
  );
};

export default CardPanelDisplay;

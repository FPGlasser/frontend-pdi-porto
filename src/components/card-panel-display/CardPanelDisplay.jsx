import React, { useEffect } from "react";
import style from "./style.module.css";

const CardPanelDisplay = ({ value, unit, description, displayAlert }) => {
  const threshold = 10;
  const shouldApplyCondition = unit === "cm/s";

  useEffect(() => {
    const handleAlert = () => {
      if (shouldApplyCondition && value > threshold) {
        displayAlert();
      }
    };
    handleAlert();
  }, [shouldApplyCondition, value, threshold, description, displayAlert]);

  const valueClass = shouldApplyCondition && value > threshold ? style.valueAboveThreshold : style.value;

  const valueStyle = {
    fontSize: "48px",
    fontWeight: 400,
    color: shouldApplyCondition && value > threshold ? "red" : "var(--font-hack)",
  };

  return (
    <div className={style.card_panel}>
      <p className={style.panel__values}>
        <span className={valueClass} style={valueStyle}>{value}</span>
        <span className={style.unit}>{unit}</span>
      </p>
      <p className={style.description}>{description}</p>
    </div>
  );
};

export default CardPanelDisplay;

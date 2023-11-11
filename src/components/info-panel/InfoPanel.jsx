import React from "react";
import CardPanelDisplay from "../card-panel-display/CardPanelDisplay";

import style from "./style.module.css";

const InfoPanel = ({ date }) => {
  return (
    <div className={style.container}>
      <div className={style.panel__title}>
        <p>Painel de Informações</p>
      </div>

      <div className={style.panel_row}>
        <p className={style.row__title}>Velocidade:</p>
        <div className={style.card__row}>
          <CardPanelDisplay
            value={date.velocityD}
            unit={date.unit_vel}
            description={"Velocidade Lado A"}
          />
          <CardPanelDisplay
            value={date.velocityE}
            unit={date.unit_vel}
            description={"Velocidade Lado B"}
          />
        </div>
      </div>
      <div className={style.panel_row}>
        <p className={style.row__title}>Distância:</p>

        <div className={style.card__row}>
          <CardPanelDisplay
            value={date.distanceD}
            unit={date.unit_dis}
            description={"Distância do labo A"}
          />
          <CardPanelDisplay
            value={date.distanceE}
            unit={date.unit_dis}
            description={"Distância do labo B"}
          />
        </div>
      </div>

      <div className={style.panel_row}>
        <p className={style.row__title}>Ângulo:</p>

        <CardPanelDisplay
          value={date.angle}
          unit={date.unit_ang}
          description={"Angulo do navio"}
        />
      </div>
    </div>
  );
};

export default InfoPanel;

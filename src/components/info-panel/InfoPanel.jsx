import React from "react";
import CardPanelDisplay from "../card-panel-display/CardPanelDisplay";
import { useData } from "../../hooks";

import style from "./style.module.css";

const InfoPanel = ({velocity, distancy, angle}) => {
  
  return (
    <div className={style.container}>
      <div className={style.panel__title}>
        <p>Painel de Informações</p>
      </div>

      <div className={style.panel_row}>
        <p className={style.row__title}>Velocidade:</p>
        <div className={style.card__row}>
          <CardPanelDisplay
            value={velocity.a.value}
            unit={velocity.unit}
            description={"Velocidade Lado A"}
          />
          <CardPanelDisplay
            value={velocity.b.value}
            unit={velocity.unit}
            description={"Velocidade Lado B"}
          />
        </div>
      </div>
      <div className={style.panel_row}>
        <p className={style.row__title}>Distância:</p>

        <div className={style.card__row}>
          <CardPanelDisplay
            value={distancy.a.value}
            unit={distancy.unit}
            description={"Distância do labo A"}
          />
          <CardPanelDisplay
            value={distancy.b.value}
            unit={distancy.unit}
            description={"Distância do labo B"}
          />
        </div>
      </div>

      <div className={style.panel_row}>
        <p className={style.row__title}>Ângulo:</p>

        <CardPanelDisplay
          value={angle.value}
          unit={angle.unit}
          description={"Angulo do navio"}
        />
      </div>
    </div>
  );
};

export default InfoPanel;

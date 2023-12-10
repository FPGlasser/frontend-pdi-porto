import React from "react";
import CardPanelDisplay from "../card-panel-display/CardPanelDisplay";
import { useDataStore } from "../../stores/Stores";
import style from "./style.module.css";

const InfoPanel = ({ displayAlert }) => {
  const data  = useDataStore((state) => state.data);
  const { velocity, distance, angle } = data;

  return (
    <div className={style.container}>
      <div className={style.panel__title}>
        <p>Painel de Informações</p>
      </div>

      <div className={style.panel_row}>
        <p className={style.row__title}>Velocidade:</p>
        <div className={style.card__row}>
          <CardPanelDisplay
            value={velocity.a}
            unit={velocity.unit}
            description={"Velocidade Lado A"}
            displayAlert={displayAlert}
          />
          <CardPanelDisplay
            value={velocity.b}
            unit={velocity.unit}
            description={"Velocidade Lado B"}
            displayAlert={displayAlert}
          />
        </div>
      </div>
      <div className={style.panel_row}>
        <p className={style.row__title}>Distância:</p>

        <div className={style.card__row}>
          <CardPanelDisplay
            value={distance.a}
            unit={distance.unit}
            description={"Distância do labo A"}
          />
          <CardPanelDisplay
            value={distance.b}
            unit={distance.unit}
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

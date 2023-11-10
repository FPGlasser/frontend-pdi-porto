import React from "react";
import style from "./style.module.css";
import { CardTerminal } from "../../components";
import terminals from "../../data/terminais.json";

const Terminal = () => {
  return (
      <div>
        <ul className={style.container__card}>
          {terminals.map((item) => (
            <CardTerminal {...item} key={item.id} />
          ))}
        </ul>
      </div>
  );
};

export default Terminal;

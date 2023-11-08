import React from "react";
import style from "./style.module.css";
import { CardTerminal } from "../../components";
import DataContextProvider from "../../contexts/DataContext";
import terminals from "../../data/terminais.json";

const Terminal = () => {
  // const { id } = useParams();
  return (
    <DataContextProvider>
      <div>
        <ul className={style.container__card}>
          {terminals.map((item) => (
            <CardTerminal {...item} key={item.id} />
          ))}
        </ul>
      </div>
    </DataContextProvider>
  );
};

export default Terminal;

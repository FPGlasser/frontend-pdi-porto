import React, {useEffect, useState} from "react";
import style from "./style.module.css";
import { CardTerminal } from "../../components";
//import terminals from "../../data/terminais.json";

const Terminal = () => {
  const [terminals, setTerminals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/berths");
        const data = await response.json();
        // Verifique se a propriedade "berths" é um array
        if (Array.isArray(data.berths)) {
          setTerminals(data.berths);
        } else {
          console.error("A propriedade 'berths' não está no formato esperado:", data);
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
    fetchData();
  }, []);

  return (
      <div>
        <ul className={style.container__card}>
          {terminals.map((code, index) => (
              <CardTerminal code={code} key={index} />
          ))}
        </ul>
      </div>
  );
};

export default Terminal;

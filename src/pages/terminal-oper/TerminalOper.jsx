import React, { useEffect } from "react";
import { InfoPanel, AnimationDisplay } from "../../components";
//import { useParams } from "react-router-dom";
import { connectWithServer } from "../../service/socket";
import { useDataStore } from "../../stores/Stores";
import initialData from '../../data/mock/initialdata.json'

import style from "./style.module.css";

const serverUrl = "http://localhost:5000";

const TerminalOper = () => {
  //const { code } = useParams();
  const updateData = useDataStore((state)=>state.updateData)
  updateData(initialData)
  const io = connectWithServer(serverUrl);

  useEffect(() => {
    io.on("data", (data) => {
      updateData(data)
    });
    return () => {
      io.off("data");
    };
  }, []);

  return (
    <div className={style.container}>
      <div className={`${style.container__box} ${style.box_1}`}>
        {/* <p>{isConnected}</p> */}
        <AnimationDisplay />
      </div>
      <div className={`${style.container__box} ${style.box_2}`}>
        <InfoPanel />
      </div>
    </div>
  );
};

export default TerminalOper;

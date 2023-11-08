import React, { useEffect } from "react";
import { InfoPanel, AnimationDisplay } from "../../components";
//import { useParams } from "react-router-dom";
import { connectWithServer } from "../../service/socket";

import style from "./style.module.css";
import { useData } from "../../hooks";

const serverUrl = "http://localhost:5000";

const TerminalOper = () => {
  //const { code } = useParams();
  const io = connectWithServer(serverUrl);
  const { updateData } = useData();

  useEffect(() => {
    io.on("data", (data) => {
      updateData(data);
    });
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

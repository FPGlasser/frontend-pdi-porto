import React, { useEffect, useState } from "react";
import { InfoPanel, AnimationDisplay } from "../../components";
import { useParams, NavLink } from "react-router-dom";
import io from 'socket.io-client'
import style from "./style.module.css";
import { useDataStore } from "../../stores/Stores";

const URL = 'http://127.0.0.1:8000';

export const socket = io(URL);

const TerminalOper = () => {

  const updateData = useDataStore((state)=>state.updateData);
  const { code } = useParams();

  const [showAlert, setShowAlert] = useState(false);

 
  const displayAlert = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };

  useEffect(() => {
    socket.emit('join', `${code}`);
    console.log(code);

    socket.on('message', (data) => {
      console.log(data);
      updateData(data);
    });
    return () => {
      socket.emit('leave', `${code}`);
    };
  }, [code]);

  return (
    <div className={style.container__box}>
      <div className={style.alertWrapper}>
        <NavLink to={"/terminal"} className={style.container__voltar}> 
          <p className={style.conteinerVoltar__texto}> Voltar aos berçários </p> 
        </NavLink>
        {showAlert && <div className={style.alert}> Velocidade excedida! </div>}
      </div>
      <div className={style.container}>
        <div className={`${style.container__box} ${style.box_1}`}>
          <AnimationDisplay />
        </div>
        <div className={`${style.container__box} ${style.box_2}`}>
          <InfoPanel displayAlert={displayAlert} />
        </div>
      </div>
    </div>
    
  );
};

export default TerminalOper;

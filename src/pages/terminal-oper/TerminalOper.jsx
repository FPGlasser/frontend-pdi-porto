import React, { useEffect, useState } from "react";
import { InfoPanel, AnimationDisplay } from "../../components";
import { useParams } from "react-router-dom";
import io from 'socket.io-client'
import style from "./style.module.css";
import { useDataStore } from "../../stores/Stores";

const URL = 'http://127.0.0.1:8000';

export const socket = io(URL);

const TerminalOper = () => {

  const updateData = useDataStore((state)=>state.updateData);
  const { code } = useParams();

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
    <div className={style.container}>
      <div className={`${style.container__box} ${style.box_1}`}>
        <AnimationDisplay />
      </div>
      <div className={`${style.container__box} ${style.box_2}`}>
        <InfoPanel/>
      </div>
    </div>
  );
};

export default TerminalOper;

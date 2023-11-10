import React, { useEffect, useState } from "react";
import { InfoPanel, AnimationDisplay } from "../../components";
import { useParams } from "react-router-dom";
import io from 'socket.io-client'
import style from "./style.module.css";

const URL = 'http://127.0.0.1:8000';

export const socket = io(URL);



const TerminalOper = () => {

  const [dados, setDados] = useState({}); // Estado para armazenar os dados recebidos
  const { code } = useParams();

  useEffect(() => {
    // Emita uma mensagem para o servido
    socket.emit('join', `${code}`);
    console.log(code);

    // Ouvinte de eventos para receber mensagens do servidor
    socket.on('message', (data) => {
      // Adicionei este log para depuração
      console.log('Objeto recebido pelo servidor:', data);
      // Quando uma mensagem é recebida, atualize o estado 'messageData'
      // Extrair as informações do objeto 'data'
      var velocityD = data.velocity.a;
      var velocityE = data.velocity.b;
      var unit_vel = data.velocity.unit;
      var distanceD = data.distance.a;
      var distanceE = data.distance.b;
      var unit_dis = data.distance.unit;
      var angle = data.angle.value;
      var unit_ang = data.angle.unit;

      // Atualizar o estado do componente com as informações extraídas
      setDados({
        velocityD,
        velocityE,
        unit_vel,
        distanceD,
        distanceE,
        unit_dis,
        angle,
        unit_ang,
      });
      // Adicionei este log para depuração
      console.log('Estado atualizado para Dados:', dados);
    });
    return () => {
      socket.emit('leave', `${code}`);
    };
  }, [code]);

  return (
    <div className={style.container}>
      <div className={`${style.container__box} ${style.box_1}`}>
        {/* <p>{isConnected}</p> */}
        <AnimationDisplay />
      </div>
      <div className={`${style.container__box} ${style.box_2}`}>
        <InfoPanel date={dados}/>
      </div>
    </div>
  );
};

export default TerminalOper;

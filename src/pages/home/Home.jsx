import React from 'react'
import styles from './Home.module.css'
import io from 'socket.io-client'
import { useState, useEffect } from 'react';

const URL = 'http://127.0.0.1:8000';

export const socket = io(URL);

const Home = () => {

  const [dados, setDados] = useState({}); // Estado para armazenar os dados recebidos

  useEffect(() => {
    // Emita uma mensagem para o servidor
    socket.emit('join', '1');

    // Ouvinte de eventos para receber mensagens do servidor
    socket.on('message', (data) => {
      // Adicionei este log para depuração
      console.log('Objeto recebido pelo servidor:', data);
      // Quando uma mensagem é recebida, atualize o estado 'messageData'
      // Extrair as informações do objeto 'data'
      var velocityD = data.velocity.a;
      var velocityE = data.velocity.b;
      var distanceD = data.distance.a;
      var distanceE = data.distance.b;
      var angle = data.angle.value;

      // Atualizar o estado do componente com as informações extraídas
      setDados({
        velocityD,
        velocityE,
        distanceD,
        distanceE,
        angle,
      });
      // Adicionei este log para depuração
      console.log('Estado atualizado para Dados:', dados);
    });
  }, []);


  return (
      <div className={styles.body}>
        <div className={styles.container_menor}>
          <h1>Ângulo</h1>
          <p>{dados.angle} °</p>
        </div>
        <div className={styles.container_maior}>
          <h2>Velocidade direita</h2>
          <p>{dados.velocityD} cm/s</p>
          <h2>Velocidade esquerda</h2>
          <p>{dados.velocityE} cm/s</p>
        </div>
        <div className={styles.container_maior}>
          <h2>Distância direita</h2>
          <p>{dados.distanceD} m</p>
          <h2>Distância esquerda</h2>
          <p>{dados.distanceE} m</p>
        </div>
      </div>
  )
}

export default Home

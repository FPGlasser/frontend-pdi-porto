import React from 'react'
import styles from './Home.module.css'
import dashboard from '../../data/dashboard.json'

const Home = () => {
  return (
    <div>
    {dashboard.map((item) => (
      <div className={styles.body}>
        <div className={styles.container_menor}>
          <h1>Ângulo</h1>
          <p>{item.angulo} °</p>
        </div>
        <div className={styles.velocidade}>
          <h1>Velocidade</h1>
          <p>{item.velocidade} cm/s</p>
        </div>
        <div className={styles.container_maior}>
          <h2>Distância direita</h2>
          <p>{item.distancia_d} m</p>
          <h2>Distância esquerda</h2>
          <p>{item.distancia_e} m</p>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Home

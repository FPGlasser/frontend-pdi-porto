import React from 'react'
import styles from './Overview.module.css'

const Overview = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h3 className={styles.data}>23/12/2024</h3>
        <div className={styles.line}></div>
        <h3 className={styles.horario}>04:40</h3>
        <div className={styles.line}></div>
        <h3 className={styles.sucesso}>SUCESSO</h3>
      </div>
      <div className={styles.container}>
        <h3 className={styles.data}>05/10/2024</h3>
        <div className={styles.line}></div>
        <h3 className={styles.horario}>14:34</h3>
        <div className={styles.line}></div>
        <h3 className={styles.fracasso}>FRACASSO</h3>
      </div>
      <div className={styles.container}>
        <h3 className={styles.data}>02/05/2024</h3>
        <div className={styles.line}></div>
        <h3 className={styles.horario}>03:49</h3>
        <div className={styles.line}></div>
        <h3 className={styles.sucesso}>SUCESSO</h3>
      </div>
    </div>
  )
}

export default Overview

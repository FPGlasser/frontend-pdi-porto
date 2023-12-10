import React from 'react'
import { Outlet} from 'react-router-dom'
import { Topbar} from '../../components'
import style from './style.module.css'

const RootLayout = () => {
  return (
    <div className={style['container']}>

      <div className={style.container__box}>
        
        <header className={style['box--header']}>
          <Topbar />
        </header>

        <main className={style['box--main']}>
          <Outlet />
        </main>

      </div>
    </div>
  )
}

export default RootLayout
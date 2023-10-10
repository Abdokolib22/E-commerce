import React from 'react'
import style from './Notfound.module.css'
import { PacmanLoader } from 'react-spinners'
export default function Nonfound() {
  return <>
  
  <div className={style.NOT}>
  <PacmanLoader color="#36d7b7" />

<h2>NOTFOUND</h2>
  </div>
  
  </>
}

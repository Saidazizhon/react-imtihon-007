import React from 'react'
import photo from "../../assets/1f937-2642.png"
import { color } from 'framer-motion'

function Empty() {
  return (
    <div style={{textAlign:"center"}}>
        <img src={photo} width={250} alt="" />
        <h2>Empty</h2>
    </div>
  )
}

export default Empty
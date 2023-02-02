import React from 'react'
import imag from "../../images/loader.gif"

const Loader = () => {
  return (
    <div style={{display: 'flex', width: "100%", height: "100%", justifyContent: "center", alignItems: "center"}}>
        <img src={imag} alt="loader"/>
    </div>
  )
}

export default Loader
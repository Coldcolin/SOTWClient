import React from 'react'
import imag from "../../images/loader.gif"
import "./StudentOTW.css"

const Loader = () => {
  return (
    <div className="sotw-sotw">
        <img src={imag} alt="loader" className="sotw-image"/>
    </div>
  )
}

export default Loader
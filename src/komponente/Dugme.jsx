import React from 'react'
import "../style/Dugme.css"


const Dugme = ({handle, btnName}) => {


  return (
    <button type="submit" className="btn btn-dark btn-sm" onClick={handle}>{btnName}</button>
  )
}

export default Dugme;
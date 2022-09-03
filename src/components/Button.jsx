import React from 'react'

function Button({text, color, onClick}) {
  return ( <button className={`btn ${color}`}
             onClick={onClick}>{text}</button>)
}

export default Button

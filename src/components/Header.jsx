import React from 'react'
import Button from './Button'

function Header({handleShow, changes}) {

  
  return (
    <div className='header'>
      <h1>TASK <span>MANAGER</span></h1>
      <Button onClick = {handleShow} text={changes ? 'Close-T' : 'Add-T'} color={changes ? 'btn-close' : 'btn-add'}/>
    </div>
  )
}

export default Header
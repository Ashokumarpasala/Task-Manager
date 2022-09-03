import React from 'react'

function InfoBox({tasks}) {
  return (
    <div className='form-crtl info'>
      <h1>Total Tasks : {
        tasks.length
      } </h1>
    </div>
  )
}

export default InfoBox

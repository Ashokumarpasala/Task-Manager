import React from 'react'

function Task({value, handleDelete, toogleReminder}) {
  return (

    <div className = {` task ${ value.reminder ? 'reminder' : '' }`} onDoubleClick={() => toogleReminder(value.id)}>
        <div>
            <div className='close'>
             <h3>{value.text}</h3>
             <h2 onClick={() => handleDelete(value.id)}
             style={{
                color: 'red',
                fontSize: '35px'
             }}>x</h2>
            </div>
          <p>{value.day}</p>
        </div>
    </div>

  )
}

export default Task

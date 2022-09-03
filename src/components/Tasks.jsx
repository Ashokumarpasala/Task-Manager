import React from 'react'
import Task from './Task'

function Tasks({tasks, handleDelete, toogleReminder}) {
   

 
  return (
    <div className='container2'>
     {
        tasks.map((value) => (<Task value={value} key={value.id} handleDelete= {handleDelete} toogleReminder={toogleReminder} />))
     } 
    </div>
  )}
export default Tasks

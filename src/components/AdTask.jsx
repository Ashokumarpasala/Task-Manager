import React from 'react'
import { useState } from 'react'

function AdTask({onAdd}) {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onsubmit = (e) => {
        e.preventDefault()

        if (!text && !day) {
            alert('please Add Task & Day')
        } else {
            onAdd({text, day, reminder})
            setText('')
            setDay('')
            setReminder(false)  
        } 
    }


  return (
    <form className='form-crtl' onSubmit={onsubmit}>
      <div className='form-grp'>
       <label htmlFor="">Task</label><br />
       <input type="text" placeholder='Add Task' 
        value={text} onChange={(e) => setText( e.target.value)} />
      </div>
      <div className='form-grp'>
       <label htmlFor="">Day</label><br />
       <input type="date" placeholder='Add Task' 
        value={day} onChange={(e) => setDay( e.target.value)} />
    
      </div>
      <div className='set-reminder form-grp '>
       <label htmlFor="" >Set Reminder</label>
       <input type="checkbox" className='form-grp-lop' checked={reminder}
               value={reminder} onChange={(e) => setReminder( e.currentTarget.checked)} />
               
      </div>
      <input type="submit" className='btn btn-save'  value={'save Task'} 
    
       />
    </form>
  )
}

export default AdTask

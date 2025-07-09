import React, { useState } from 'react'

const AddTask = ({save}) => {

    let [value, setValue] = useState("")
    let handleSubmit = (event) => { 
        event.preventDefault()
        if (value.trim()) {
            save(value);
        }
        setValue("")
    }

  return (
      <>
          <form action="">
              <div className='input-container'>
                  <input
                      className='input-box'
                      type="text"
                      placeholder='Enter a Task'
                      autoFocus
                      value={value}
                      onChange={(e)=> setValue(e.target.value)}
                  />
                  <button type='submit' className='add-btn' onClick={handleSubmit}>Add</button>
              </div>
          </form>
      </>
  )
}

export default AddTask
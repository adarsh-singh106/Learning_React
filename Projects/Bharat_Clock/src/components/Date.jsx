import React from 'react'

// React only knows how to render strings, numbers, 
// arrays of JSX elements, or React elements — not raw objects.
const Datet = () => {
    const my_date = new Date()
  return (
    <div className='ash'>This is current time : {my_date.toLocaleString()}</div>
  )
}

export default Datet;
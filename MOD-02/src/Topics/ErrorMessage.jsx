import React from 'react'

const ErrorMessage = (props) => {
  return (
    <>{props.fitems.length === 0 ? (<h2>I am Still Hungry ! Givme Food</h2>):null}</>
  )
}

export default ErrorMessage
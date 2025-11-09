// Items.jsx
import React from 'react'

const Items = ({ value }) => {
  function ClickButtonHandling() {
    return console.log(value);
  }
  return <><span>{value}</span> <button type="button" onClick={ClickButtonHandling} className="btn btn-info">Buy</button>  </>// NOT <li>

}

export default Items;

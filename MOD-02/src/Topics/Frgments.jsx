import React, { useState } from 'react'
import Items from './Items'
import Cot from './Cot';

// fitems should be passed as a prop from parent (array of strings or objects)

const Frgments = (props) => {

  let [someText,setSomeText] = useState("Zehahahhhaa")
  function onClickFunction(event) {
        console.log(event.target.value);
        setSomeText(event.target.value)
        // console.log(event);
    }
  return (
    <>
      <h2>Topic - Fragments</h2>
      <hr />
<Cot><input type="text" name="ip" id="ip" placeholder='Enter Sommthing' onChange={onClickFunction}/></Cot>
<Cot>{someText} <button onClick={()=>props.handleAddItem(someText)}>Add</button></Cot>
      <ul className="list-group">
  {props.fitems.map((item, index) => (
    <li key={index} className="list-group-item">
      <Items value={item} />
    </li>
  ))}
</ul>


    </>
  )
}

export default Frgments;

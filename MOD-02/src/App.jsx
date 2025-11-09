import React, { useState } from 'react';
import Frgments from './Topics/Frgments';
import ErrorMessage from './Topics/ErrorMessage';
import Container from './Topics/Container';

const App = () => {
  // const list_items = ['Dal', "Green vegetables", "roti", "Apples", "seeds"];
  const [list_items , set_list_item] = useState([])
  
  
  const handleAddItem = (data) => {
    console.log(data);
  set_list_item([...list_items, data]);
};

  
  

  return (
    <Container>
      <h1>Healthy Food List</h1>
      <hr />
      <Frgments fitems={list_items} handleAddItem={handleAddItem}/>
      <ErrorMessage fitems={list_items} />
    </Container>
  );
};

export default App;

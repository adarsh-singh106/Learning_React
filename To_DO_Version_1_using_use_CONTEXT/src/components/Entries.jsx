import React, { useContext } from 'react'
import { TodoItemsStore } from '../store/ToDo-App-Store';

const Entries = ({ TN, DD, dletefn, id }) => {
  const FXS = useContext(TodoItemsStore);

  return (
    <div className="row ash">
      <div className="col-6">
        {TN}
      </div>
      <div className="col-4">
        {DD}
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-danger ashbutt" onClick={() => dletefn(id)}>Delete</button>
      </div>
    </div>
  )
}

export default Entries
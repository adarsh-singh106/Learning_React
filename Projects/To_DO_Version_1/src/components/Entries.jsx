import React from 'react'

const Entries = ({TaskName , DueDate , dletefn,id}) => {
    const TN = TaskName
    const DD = DueDate
  return (
    <div className="row ash">
    <div className="col-6">
        {TN}
    </div>
    <div className="col-4">
        {DD}
    </div>
    <div className="col-2">
        <button type="button" className="btn btn-danger ashbutt" onClick={()=>dletefn(id)}>Delete</button>
    </div>
  </div>
  )
}

export default Entries
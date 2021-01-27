import React from 'react';

const Desks = (props) => (
  <div className="workspace" id="desks" style={props.data[0].office_cap ? 
      {backgroundColor: "lightgreen"} : {backgroundColor: "lightgray"}}>
    <div>Private Offices</div>
    <div>Available Count Image Here</div>
    <div>Lockable office space for teams of all sizes</div>
    <div>View Inventory</div>
  </div>
)

export default Desks;
import React from 'react';

const Desks = (props) => {
  let desks_cap = props.data.length > 0 ? props.data[0].desks_cap : "";
  return (
  <div className="workspace desks" id="desks">
    <div>IMG</div>
    <div>
      <div>Dedicated Desks</div>
      <div>Lockable office space for teams of all sizes</div>
    </div>
    <div>View Inventory {desks_cap}</div>
  </div>
)};

export default Desks;
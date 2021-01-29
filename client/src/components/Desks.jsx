import React from 'react';

const Desks = (props) => {
  let desks_cap = props.data.length > 0 ? props.data[0].desks_cap : "";
  return (
  <div className="container" id="desks">
    <div className="image">IMG</div>
    <div className="description">
      <div>Dedicated Desks</div>
      <div>Lockable office space for teams of all sizes</div>
    </div>
    <div className="rate">{desks_cap > 0 ? "View Inventory" : ""}</div>
  </div>
)};

export default Desks;
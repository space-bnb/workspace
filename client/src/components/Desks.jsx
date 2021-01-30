import React from 'react';
import image from '../images/DedicatedDesk.png'

const Desks = (props) => {
  let desks_cap = props.data.length > 0 ? props.data[0].desks_cap : "";
  return (
  <div className="container" id="desks">
    <img src={image} alt="Image" width="100" height="100" />
    <div className="description">
      <div>Dedicated Desks</div>
      <div>Lockable office space for teams of all sizes</div>
    </div>
    <div className="rate">{desks_cap > 0 ? "View Inventory" : "None"}</div>
  </div>
)};

export default Desks;
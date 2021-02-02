import React from 'react';
import image from '../images/DedicatedDesk.png'

const Desks = (props) => {
  let desks_cap = props.data.desks_cap || 0;
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
import React from 'react';

const Offices = (props) => {
  let office_cap = props.data.length > 0 ? props.data[0].office_cap : 0;
  return (
  <div class="container" id="offices">
    <div class="image">IMG</div>
    <div class="description">
      <p><b>Private Offices</b></p>
      <p>Lockable office space for teams of all sizes</p>
    </div>
    <div class="rate">{office_cap > 0 ? "View Inventory" : ""}</div>
  </div>
)};

export default Offices;
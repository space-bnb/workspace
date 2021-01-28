import React from 'react';

const Offices = (props) => {
  let office_cap = props.data.length > 0 ? props.data[0].office_cap : 0;
  return (
  <div className="workspace offices" id="offices">
    <div>IMG</div>
    <div>
      <div>Private Offices</div>
      <div>Lockable office space for teams of all sizes</div>
    </div>
    <div>View Inventory {office_cap}</div>
  </div>
)};

export default Offices;
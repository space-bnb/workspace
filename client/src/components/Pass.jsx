import React from 'react';

const Pass = (props) => {
  let pass_rate = props.data.length > 0 ? props.data[0].pass_rate : 0;
  return (
  <div className="workspace pass" id="pass">
    <div>IMG</div>
    <div>
      <div>Day Pass</div>
      <div>Book a day pass for a seat in our coworking spaces with access to amenities</div>
    </div>
    <div>{pass_rate > 0 ? `Only $${pass_rate}/day` : "None"}</div>
  </div>
)};

export default Pass;
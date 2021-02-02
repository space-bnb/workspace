import React from 'react';
import image from '../images/DayPass.png'

const Pass = (props) => {
  let pass_rate = props.data.pass_rate || 0;
  return (
  <div className="container" id="pass">
    <img src={image} alt="Image" width="100" height="100" />
    <div className="description">
      <div>Day Pass</div>
      <div>Book a day pass for a seat in our coworking spaces with access to amenities</div>
    </div>
    <div className="rate">{pass_rate > 0 ? `Only $${pass_rate}/day` : "None"}</div>
  </div>
)};

export default Pass;
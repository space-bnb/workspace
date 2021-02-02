import React from 'react';
import image from '../images/HotDesk.png'

const Membership = (props) => {
  let membership_rate = props.data.membership_rate || 0;
  return (
  <div className="container" id="membership">
    <img src={image} alt="Image" width="100" height="100" />
    <div className="description">
      <div>Hot Desk Membership</div>
      <div>On-demand access to shared workspaces and common areas</div>
    </div>
    <div className="rate">{membership_rate > 0 ? `Sign up for $${membership_rate}/mo` : "None"}</div>
  </div>
)};

export default Membership;
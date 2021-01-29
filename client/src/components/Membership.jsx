import React from 'react';

const Membership = (props) => {
  let membership_rate = props.data.length > 0 ? props.data[0].membership_rate : 0;
  return (
  <div class="container" id="membership">
    <div class="image">IMG</div>
    <div class="description">
      <div>Hot Desk Membership</div>
      <div>On-demand access to shared workspaces and common areas</div>
    </div>
    <div class="rate">{membership_rate > 0 ? `Sign up for $${membership_rate}/mo` : "None"}</div>
  </div>
)};

export default Membership;
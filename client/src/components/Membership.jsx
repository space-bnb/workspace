import React from 'react';

const Membership = (props) => (
  <div className="workspace" id="membership" style={props.data[0].membership_rate ? 
      {backgroundColor: "lightblue"} : {backgroundColor: "lightgray"}}>
    <div>Hot Desk Membership</div>
    <div>On-demand access to shared workspaces and common areas</div>
    <div>{props.membership_rate ? `Sign up for ${props.data[0].membership_rate}/mo` : ""}</div>
  </div>
)

export default Membership;
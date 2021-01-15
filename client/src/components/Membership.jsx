import React from 'react';

const Membership = (props) => (
  <div>Membership: {props.data.length > 0 ? props.data[0].membership_rate : 'NaN'}</div>
)

export default Membership;
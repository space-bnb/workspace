import React from 'react';

const Offices = (props) => (
  <div>Offices: {props.data.length > 0 ? props.data[0].office_cap : 'NaN'}</div>
)

export default Offices;
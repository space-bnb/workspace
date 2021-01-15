import React from 'react';

const Desks = (props) => (
  <div>Desks: {props.data.length > 0 ? props.data[0].desks_cap : 'NaN'}</div>
)

export default Desks;
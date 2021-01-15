import React from 'react';

const Pass = (props) => (
  <div>Pass: {props.data.length > 0 ? props.data[0].pass_rate : 'NaN'}</div>
)

export default Pass;
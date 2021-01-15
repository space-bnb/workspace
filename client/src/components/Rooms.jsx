import React from 'react';

const Rooms = (props) => (
  <div>Rooms: {props.data.length > 0 ? props.data[0].room_rate : 'NaN'}</div>
)

export default Rooms;
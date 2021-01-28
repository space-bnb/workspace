import React from 'react';

const Rooms = (props) => {
  let room_rate = props.data.length > 0 ? props.data[0].room_rate : 0;
  return (
  <div className="workspace room" id="room">
    <div>IMG</div>
    <div>
      <div>Conference Rooms</div>
      <div>Book a room by the hour for meeting clients and co-workers</div>
    </div>
    <div>{room_rate > 0 ? `From $${room_rate}/hour` : "None"}</div>
  </div>
)};

export default Rooms;
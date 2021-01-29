import React from 'react';

const Rooms = (props) => {
  let room_rate = props.data.length > 0 ? props.data[0].room_rate : 0;
  return (
  <div class="container" id="room">
    <div class="image">IMG</div>
    <div class="description">
      <div>Conference Rooms</div>
      <div>Book a room by the hour for meeting clients and co-workers</div>
    </div>
    <div class="rate">{room_rate > 0 ? `From $${room_rate}/hour` : "None"}</div>
  </div>
)};

export default Rooms;
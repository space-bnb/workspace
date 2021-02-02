import React from 'react';
import image from '../images/ConferenceRoom.png'

const Rooms = (props) => {
  let room_rate = props.data.room_rate || 0;
  return (
  <div className="container" id="room">
    <img src={image} alt="Image" width="100" height="100" />
    <div className="description">
      <div>Conference Rooms</div>
      <div>Book a room by the hour for meeting clients and co-workers</div>
    </div>
    <div className="rate">{room_rate > 0 ? `From $${room_rate}/hour` : "None"}</div>
  </div>
)};

export default Rooms;
import React from 'react';

const PersonsContent = (props) => {
  const chosen = props.personsCount;
  const show = props.show;
  const setPersons = props.setPersons;
  const clear = props.clear;
  return (
    <div 
      className="persons-modal" 
      style={show ? {display: "block"} : {display: "none"}}
      >
        <h5>How many people need space?</h5>
        <div>COntains: {chosen} people</div>
        <div className="persons-modal-info">
          <span>Keep in mind: To <a href="#">professional distance</a>, we 
            encourage you to look for space that fits 
            twice the amount of people you’re trying to seat.
          </span>
        </div>
        <a href="#" onClick={clear}>Clear</a>
      </div>
  )
};

export default PersonsContent
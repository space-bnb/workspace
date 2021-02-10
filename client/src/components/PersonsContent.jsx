import React from 'react';

const PersonsContent = (props) => {
  const setPersons = props.setPersons;
  const buttonVals = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", 
  "13", "14", "15", "16", "17", "18", "19", "20", "21-50", "51-500", "500+"]
  const setter = props.setPersons;

  const personsModal = (
    <div className="persons-modal">
        <h5>How many people need space?</h5>
        <div className="persons-modal-content">
          {buttonVals.map(val => <button key={val} onClick={() => setter(val)}>{val}</button>)}
        </div>
        <div className="persons-modal-info">
          <span>Keep in mind: To <a href="#">professional distance</a>, we 
            encourage you to look for space that fits 
            twice the amount of people you’re trying to seat.
          </span>
        </div>
        <a href="#" onClick={props.clear}>Clear</a>
      </div>
  )

  return personsModal;
};

export default PersonsContent
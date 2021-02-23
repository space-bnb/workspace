import React from 'react';

const generateMonth = (date) => {
  let totalDates = [];
  let month = date.getMonth();
  let current = new Date(date.getFullYear(), month, 1);
  while (current.getMonth() === month) {
    totalDates.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  return totalDates;
}

const MoveInContent = (props) => {
  const date = props.date;
  const month = generateMonth(date);

  const moveInModal = (
    <div className="movein-modal">
        <h5>{date.toLocaleString('default', {month: "long"})}</h5>
        <div className="movein-modal-content">
          {month.map(day => {
            return <button 
              key={day.getTime()} 
              id={"movein-button"}
              onClick={() => props.setDate(day)}
              style={date.toDateString() === day.toDateString() ? 
                { "backgroundColor": "blue", "color": "white"} : {}}
            >
              {day.getDate()}
            </button>
          })
          }
        </div>
        <a href="#" id="clear-movein-modal" onClick={() => props.setDate(new Date())}>Clear</a>
      </div>
  )

  return moveInModal;
};

export default MoveInContent;
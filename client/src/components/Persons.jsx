import React from 'react';
import Modal from 'react-modal';

import PersonsContent from './PersonsContent.jsx';

Modal.setAppElement(document.getElementById('workspaces'));
 
class Persons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      personsCount: 0
    };
  }

  handleOpen() {
    this.setState({ show: true });
  }

  handleClose() {
    this.setState({ show: false });
  }
   
  setPersons(personsCount) {
    this.setState({ personsCount, show: false });
  }

  clearPersons() {
    this.setPersons(0);
  }

  render() {
    let content;
    if (this.state.show) {
      content = (
      <PersonsContent 
        count={this.state.personsCount} 
        setPersons={this.setPersons.bind(this)}
        clear={this.clearPersons.bind(this)}
      />)
    } else {
      content = null;
    }
    return (
      <div className="persons-container">
        <button className="persons-button" onClick={this.handleOpen.bind(this)}>
          {this.state.personsCount > 0 ? this.state.personsCount : "Capacity"}
        </button>
        {content}
      </div>
    )
  }
};

export default Persons;
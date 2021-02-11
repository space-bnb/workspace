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

  handleShowChange() {
    const show = !this.state.show;
    this.setState({ show });
  }

  setPersonCount(personsCount) {
    if (!isNaN(personsCount)) {
      this.setState({ personsCount, show: false });
    }
  }

  render() {
    let content;
    if (this.state.show) {
      content = (
      <PersonsContent 
        count={this.state.personsCount}
        setPersonCount={this.setPersonCount.bind(this)}
      />)
    } else {
      content = null;
    }
    return (
      <div className="persons-container">
        <button 
          className="persons-button" 
          onClick={this.handleShowChange.bind(this)}
          style={this.state.personsCount > 0 ? { "backgroundColor": "blue", "color": "white"} : {}}
        >
          {this.state.personsCount > 0 ? this.state.personsCount : "Capacity"}
        </button>
        {content}
      </div>
    )
  }
};

export default Persons;
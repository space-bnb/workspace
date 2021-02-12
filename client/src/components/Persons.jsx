import React from 'react';
import PersonsContent from './PersonsContent.jsx';
 
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
    let content = null;
    let count = this.state.personsCount;
    if (this.state.show) {
      content = (
      <PersonsContent count={count} setPersonCount={this.setPersonCount.bind(this)} />
      )
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
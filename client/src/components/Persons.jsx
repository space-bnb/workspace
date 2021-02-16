import React from 'react';
import PersonsContent from './PersonsContent.jsx';
 
class Persons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      count: props.count || 0
    };
    this.set = props.set;
  }

  handleShowChange() {
    const show = !this.state.show;
    this.setState({ show });
  }

  setPersonCount(count) {
    if (!isNaN(count)) {
      this.setState({ count, show: false });
      this.set(count);
    }
  }

  render() {
    let content = null;
    let count = this.state.count;
    if (this.state.show) {
      content = (
      <PersonsContent 
        count={count} 
        setPersonCount={this.setPersonCount.bind(this)} 
      />
      )
    }
    return (
      <div className="persons-container">
        <button 
          className="persons-button" 
          onClick={this.handleShowChange.bind(this)}
          style={count ? { "backgroundColor": "blue", "color": "white"} : {}}
        >
          {count ? count : "Capacity"}
        </button>
        {content}
      </div>
    )
  }
};

export default Persons;
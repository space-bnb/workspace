import React from 'react';
import axios from 'axios';

import '../style.scss';

import Offices from './Offices.jsx';
import Desks from './Desks.jsx';
import Membership from './Membership.jsx';
import Pass from './Pass.jsx';
import Rooms from './Rooms.jsx';
import Persons from './Persons.jsx';
import MoveIn from './MoveIn.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      data: {},
      personsCount: 0,
      date: new Date()
    }
  }

  componentDidMount() {
    const id = window.location.pathname.split('/')[2];
    if (!isNaN(id)) { this.get(id) }
  }

  async get(id) {
    let { data } = await axios.get(`/workspace-api/workspace/${id}`);
    if (data.length) { 
      this.setState({ data: data[0] });
    };
  }

  setPersons(personsCount) {
    this.setState({ personsCount });
  }

  setDate(date) {
    this.setState({ date })
  }

  render() {
    const count = this.state.personCount;
    const date = this.state.date;
    return (
      <div className="workspace-body" key='main' id="main">
        <div className="main-title"><b>Available workspace</b></div>
        <div className="modal-container">
          <Persons count={count} set={this.setPersons.bind(this)}/>
          <MoveIn date={date} set={this.setDate.bind(this)}/>
        </div>
        <div className="category">MONTHLY SUBSCRIPTION</div>
        <Offices data={this.state.data}/>
        <Desks data={this.state.data}/>
        <Membership data={this.state.data}/>
        <div className="category">PAY-AS-YOU-GO</div>
        <Pass data={this.state.data}/>
        <Rooms data={this.state.data}/>
      </div>
    )
  }
}

export default App;
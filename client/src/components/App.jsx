import React from 'react';
import axios from 'axios';

import '../style.scss';

import Offices from './Offices.jsx';
import Desks from './Desks.jsx';
import Membership from './Membership.jsx';
import Pass from './Pass.jsx';
import Rooms from './Rooms.jsx';
import Persons from './Persons.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      data: {}
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

  render() {
    return (
      <div className="workspace-body" key='main' id="main">
        <div className="main-title"><b>Available workspace</b></div>
        <Persons show={this.state.showPersons} hide={this.handlePersonsHide}/>
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
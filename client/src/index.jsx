import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './style.scss';

import Offices from './components/Offices.jsx';
import Desks from './components/Desks.jsx';
import Membership from './components/Membership.jsx';
import Pass from './components/Pass.jsx';
import Rooms from './components/Rooms.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: {} }
  }

  componentDidMount() {
    let testId = 1;
    this.get(testId);
  }

  async get(id) {
    let { data } = await axios.get(`/workspace-api/workspace/${id}`);
    this.setState(data.length ? { data: data[0] } : {});
  }

  render() {
    return (
      <div className="workspace-body" key='main'>
        <div className="main-title"><b>Available workspace</b></div>
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

ReactDOM.render(<App />, document.getElementById('app'))
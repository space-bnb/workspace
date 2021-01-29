import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Offices from './components/Offices.jsx';
import Desks from './components/Desks.jsx';
import Membership from './components/Membership.jsx';
import Pass from './components/Pass.jsx';
import Rooms from './components/Rooms.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { repos: [] }
  }

  componentDidMount() {
    this.get()
  }

  get() {
    $.ajax({
      type: 'GET',
      url: '/workspace-api/workspaces'
    }).then(repos => {
      console.log(repos)
      this.setState({ repos });
    });
  }

  getOne(item) {
    $.ajax({
      type: "GET",
      url: `/workspace-api/workspace/${item.id}`,
    }).then(repo => {
      console.log(repo)
      this.setState({ repos: repo })
    });
  }

  render() {
    return (
      <div className="workspace-body" key='main'>
        <h2><b>Available workspace</b></h2>
        <h4>MONTHLY SUBSCRIPTION</h4>
        <Offices data={this.state.repos}/>
        <Desks data={this.state.repos}/>
        <Membership data={this.state.repos}/>
        <h4>PAY-AS-YOU-GO</h4>
        <Pass data={this.state.repos}/>
        <Rooms data={this.state.repos}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
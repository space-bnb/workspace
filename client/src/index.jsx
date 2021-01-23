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

  get() {
    $.ajax({
      type: 'GET',
      url: '/workspace-api/getall'
    }).then(repos => this.setState({ repos }));
  }

  getOne(item) {
    $.ajax({
      type: "GET",
      url: `/workspace-api/get/${item.id}`,
    }).then(repo => {
      console.log(repo)
      this.setState({ repos: repo })
    })
  }

  render() {
    return (
      <div key='main'>
        <div key='repos'>REPOS: {this.state.repos.length}</div>
        <button onClick={this.get.bind(this)}>Press me</button>
        <button onClick={this.getOne.bind(this, { id: 4 })}>Get one item</button>
        <Offices data={this.state.repos}/>
        <Desks data={this.state.repos}/>
        <Membership data={this.state.repos}/>
        <Pass data={this.state.repos}/>
        <Rooms data={this.state.repos}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
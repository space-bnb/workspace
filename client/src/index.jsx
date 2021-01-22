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
      url: '/getall'
    }).then(repos => this.setState({ repos }));
  }

  getOne(item) {
    $.ajax({
      type: "POST",
      url: '/get',
      data: item
    }).then(repo => this.setState({ repos: repo }))
  }

  remove(item) {
    $.ajax({
      type: "POST",
      url: '/remove',
      data: item
    }).then(() => console.log("Removed item"))
  }

  seed() {
    $.ajax({
      type: "GET",
      url: '/seed'
    });
  }

  render() {
    return (
      <div key='main'>
        <div key='repos'>REPOS: {this.state.repos.length}</div>
        <button onClick={this.get.bind(this)}>Press me</button>
        <button onClick={this.getOne.bind(this, { id: 4 })}>Get one item</button>
        <button onClick={this.remove.bind(this, {})}>Clear</button>
        <button onClick={this.seed.bind(this)}>Seed</button>
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
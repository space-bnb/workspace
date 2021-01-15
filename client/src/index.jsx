import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { repos: [] }
  }

  get() {
    $.ajax({
      type: 'GET',
      url: '/show',
      success: (data) => this.setState({ repos: data })
    })
  }

  render() {
    return (
      <div key='main'>
        <div key='repos'>REPOS:</div>
        {this.state.repos.map(repo => <div key={repo.id}>{repo.id}</div>)}
        <button onClick={this.get()}>Press me</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
import React, { Component } from 'react'


async function getTasks(userId) {
  const res = await fetch(`//localhost:3001/api/venues/${userId}`);
  return await res.json();
}

export default class TaskListPage extends Component {
  state = {};

  async componentDidMount() {
    const venues = await getTasks("0"); // TODO: add proper userId!
    this.setState({ venues });
  }

  render() {

    return (<div><h1>
      Hello! Tasks ({}):
      </h1>
      <div>

      </div>
    </div>);
  }
}




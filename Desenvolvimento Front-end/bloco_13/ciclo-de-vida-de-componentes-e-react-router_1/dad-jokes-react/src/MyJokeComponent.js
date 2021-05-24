import React, { Component } from 'react';

class MyJokeComponent extends Component {
  constructor() {
    super();

    this.state = {
      piada: 'minha piada'
    }
  }
    render() {
      return (
        <span>{this.state.piada}</span>
      )
    }
}

export default MyJokeComponent;
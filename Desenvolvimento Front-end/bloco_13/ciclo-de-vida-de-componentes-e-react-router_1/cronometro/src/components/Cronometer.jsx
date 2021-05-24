import React, { Component } from 'react';

class Cronometer extends Component {
  constructor() {
    super();

    this.state = { seconds: 0 }
  }

  componentDidMount() {
    const ONE_SECOND = 1000;  // 1 second in miliseconds
    this.cronometerInterval = setInterval(() => {
      this.setState((state) => ({seconds: state.seconds + 1 }))
    }, ONE_SECOND)
  }

  componentDidUpdate(prevProps, { seconds }) {
    const MAX_SECONDS = 60;
    if (seconds === MAX_SECONDS) {
      this.setState({ seconds: 0 });
    }

  }

  componentWillUnmount() {
    clearInterval(this.cronometerInterval);
  }

  render() {
    const { seconds } = this.state;
    return (
      <h2>
        {seconds}
      </h2>
    )
  }

}

export default Cronometer;
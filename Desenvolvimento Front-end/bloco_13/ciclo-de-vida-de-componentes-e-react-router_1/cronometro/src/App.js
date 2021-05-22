import React from 'react';

import Cronometer from './components/Cronometer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showCronometer: true };

    this.cronometerOnOffSwitch = this.cronometerOnOffSwitch.bind(this);
  }

  cronometerOnOffSwitch() {
    this.setState((prevState) => ({ showCronometer: !prevState.showCronometer }));
  }

  render() {
    const { showCronometer } = this.state;
    return (
      <main className="App">
        <section className="App-header">
          {showCronometer && <Cronometer />}
        </section>

        <button
          type="button"
          onClick={ this.cronometerOnOffSwitch }
        >
          { showCronometer ? 'Desligar cronômetro' : 'Ligar cronômetro' }
        </button>
      </main>
    );
  }
}

export default App;
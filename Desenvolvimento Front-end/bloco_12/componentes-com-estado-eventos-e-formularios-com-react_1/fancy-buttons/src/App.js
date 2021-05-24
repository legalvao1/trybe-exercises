    // src/App.js
import React from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree= this.handleButtonThree.bind(this);

    this.state = {
      buttonOne: 0,
      buttonTwo: 0,
      buttonThree: 0
    }
  }
    
  handleButtonOne() {
    this.setState((estadoAnterior) => ({
      buttonOne: estadoAnterior.buttonOne + 1
    }));
    if (this.state.buttonOne % 2 === 0) console.log('green');
    console.log('Clicou no botão 1!');
  }
  
  handleButtonTwo() {
    this.setState((estadoAnterior) => ({
      buttonTwo: estadoAnterior.buttonTwo + 1
    }));
    console.log('Clicou no botão 2!', this);
  }
  
  handleButtonThree() {
    this.setState(({ buttonThree }) => ({
      buttonThree: buttonThree + 1
    }));
    console.log('Clicou no botão 3!', this);
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleButtonOne }>Botão 1</button>
        <button onClick={ this.handleButtonTwo }>Botão 2</button>
        <button onClick={ this.handleButtonThree }>Botão 3</button>
      </div>
    );
  }
}


export default App;
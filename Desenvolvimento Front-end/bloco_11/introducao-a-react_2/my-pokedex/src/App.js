import React from 'react'
import './App.css';
import Pokedex from './components/Pokedex';
import pokemons from './data'

class App extends React.Component {
  render() {
    return (
      <main className="Main-container">
        <Pokedex pokedex={ pokemons } />
      </main>
    );
  }
}

export default App;

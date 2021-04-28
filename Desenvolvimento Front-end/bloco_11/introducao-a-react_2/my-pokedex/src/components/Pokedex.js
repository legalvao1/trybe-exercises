import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const{ pokedex } = this.props;
    return (
      <section className="pokemon-list">
        { pokedex.map((pokemon) => (<Pokemon key={ pokemon.id } pokemon={ pokemon } />)) }
      </section>
    );
  }
}

export default Pokedex;
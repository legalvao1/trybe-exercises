import React from 'react';
import { connect } from 'react-redux';

class Player extends React.Component {
  render() {
    const { selectedMovie, selectedCategory } = this.props;
    return (
      <div>
        <h1>
          {selectedMovie.title}
        </h1>
        <h3>
          {selectedCategory.name}
          {' '}
          -
          {' '}
          {selectedMovie.released}
        </h3>
        <section>
          <iframe
            title="trailer"
            width="420"
            height="315"
            src={ selectedMovie.link }
          />
        </section>
      </div>
    );
  }
}

// mapeia o estado global da minha aplicação como props para esse componente
const mapStateToProps = (state) => ({ 
  selectedMovie: state.movies.selectedMovie, //pega a chave do reducer que voce quer e a prop q ta dentro dele
  selectedCategory: state.movies.selectedCategory, //pego só o que eu preciso do meu estado;
}) 

export default connect(mapStateToProps)(Player);
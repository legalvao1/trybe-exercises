import React from 'react';
import { connect } from 'react-redux';
import movieActions from '../actions/movieActions'; // importo a action


class Sidebar extends React.Component {
  render() {
    const { categories, selectMovie } = this.props; // de mapStateToProps e mapDispatch
    return (
      <aside>
        {
          categories.map((category) => (
            <div key={ category.id }>
              <h3>{category.name}</h3>
              <ul>
                {
                  category.movies.map((movie) => (
                    <li key={ movie.id }>
                      {movie.title}
                      {' '}
                      was released in
                      {' '}
                      {movie.released}
                      <button
                        type="button"
                        onClick={ () => selectMovie(category, movie) } // action dispatch com os param q ela precisa
                      >
                        Select
                      </button>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </aside>
    );
  }
}

const mapStateToProps = (state) => ({ // ler os dados store/stado
  categories: state.movies.categories, //aqui só preciso do categories
});

// mapeia as actions globais da aplicação para esse componente para que elas se tornem ações locais

const mapDispatchToProps = (dispatch) => ({ // escrever dados / alterar na store
  selectMovie: (category, movie) => dispatch( // retorna um obj com as actios q eu vou precisar usar nesse componente
    movieActions(movie, category), // função q chama o dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
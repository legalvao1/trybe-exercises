import SELECT_MOVIE from './index';

const selectMovie = (selectedMovie, selectedCategory) => {
  return {
    type: SELECT_MOVIE,
    payload: {
      selectedMovie, // chaves do reducer se preferir coloca só o nome da chave e o param outro
      selectedCategory,
    }
  }
}

export default selectMovie;
import categoriasData from '../data'; //ao invés de importar a lista no app importo aqui no estado inicial
import SELECT_MOVIE from '../actions';

const INNITIAL_STATE = {
  selectedMovie: {}, // obj do filme selecionado
  selectedCategory: {}, // obj da categoria selecionada
  categories: categoriasData, //lista de tudo
}

const movieReducer = (state = INNITIAL_STATE, action) => {
  switch(action.type) {
    case SELECT_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload.selectedMovie,
        selectedCategory: action.payload.selectedCategory,
      };
    default:
      return state;
  }
}

export default movieReducer;
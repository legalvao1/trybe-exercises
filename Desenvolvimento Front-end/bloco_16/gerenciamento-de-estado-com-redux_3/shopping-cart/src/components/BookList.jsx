import React from 'react';

// como só vou usar aqui a lista de livros, vou importar ela aqui, só passa pro redux o que vai ser usado em mais compoentes
import books from '../productsList';

import addItemToCart from '../actions';
import { connect } from 'react-redux';

class BookList extends React.Component {
  render() {
    const { addToCart } = this.props;
    return(
      <>
        <h1>Lista de Livros</h1>
        {books.map((book) => (
          <li key={book.name}>
            {book.name}
            {' '}
            -
            {' R$ '}
            {book.price}
            {/* aqui precisto ter uma action para a ação do botão */}
            <button 
            type="button"
            onClick={ () => addToCart(book) }
            > Adicionar </button> 
          </li>
        ))}
      </>
    );
  }
}

// recebe por param o dispatch q da acesso ao dispatch do redux
// a função q eu vou passar para o botao vai ser addToCart e aqui chamo a função q ta na action dentro do dispatch
const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addItemToCart(item)) // action recebe um param entao passo o para da função pra action
});
// addTocart é só o nome da chave q eu crio no dispatch. não precisa ser o mesmo nome da action e esse nome fica disponivel nas props

export default connect(null, mapDispatchToProps)(BookList);
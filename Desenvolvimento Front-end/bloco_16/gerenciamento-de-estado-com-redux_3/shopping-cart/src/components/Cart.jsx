import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    return(
      <>
        <h1>Meu Carrinho</h1>
        {cartItems.map((item, index) =>  <li key={index}> {item.name} </li>)}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItem,
});
// aqui tbm crio uma chave pra esse obj

export default connect(mapStateToProps, null)(Cart);
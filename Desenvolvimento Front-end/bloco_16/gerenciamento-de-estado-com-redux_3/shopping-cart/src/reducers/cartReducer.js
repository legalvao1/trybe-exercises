const INITTIAL_STATE = {
  cartItem: [],
}

const cartReducer = (state = INITTIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_ITEM_TO_CART':
      return {
        ...state, // pego meu estado anterior com tudo que tem
        cartItem: [...state.cartItem, action.payload.item] // e pego a chave com o estado anterior e adiciono o novo item no carrinho
      };
    default:
      return state;
  }
}

export default cartReducer;
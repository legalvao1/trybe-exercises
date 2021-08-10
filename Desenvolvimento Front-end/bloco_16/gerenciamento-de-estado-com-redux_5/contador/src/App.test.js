import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup } from '@testing-library/react';
import App from './App';
//Esses imports servem para termos acesso às ferramentas necessárias pra mockar o store .


import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';
import userEvent from '@testing-library/user-event';

// Um detalhe muito importante: como é utilizado um combineReducers na resolução do exercício, quando formos implementar os testes, temos que criar o store mockado com a mesma estrutura do padrão. Portanto, vamos importar o combineReducers e adaptar a função renderWithRedux para utilizá-lo.

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

    expect(queryByText('5')).toBeInTheDocument();
  });

  test('if reducer starts with 0', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 0 }}});

    expect(queryByText('0')).toBeInTheDocument();
  });

  test('if reducer starts with 10', () => {
    const { queryByText, getByRole } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});

    expect(queryByText('10')).toBeInTheDocument();
    
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    userEvent.click(button);
    expect(queryByText('11')).toBeInTheDocument();
    
  });
});

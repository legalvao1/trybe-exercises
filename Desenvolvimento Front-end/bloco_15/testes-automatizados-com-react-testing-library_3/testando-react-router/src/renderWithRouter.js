import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'; // para criar um histórico de navegação
import { render } from '@testing-library/react';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={history}>{component}</Router>), history,
  });
};

export default renderWithRouter;
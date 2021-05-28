import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';


describe('teste da aplicação toda', () => {
  it('deve renderizar o componente App', () => {
    const { getByText } = renderWithRouter(<App />);
    const home = getByText(/Você está na página Início/);
    expect(home).toBeInTheDocument();
  });
  
  it('deve renderizar o componente Sobre', () => {
    const { history } = renderWithRouter(<App/>);
  
    fireEvent.click(screen.getByText(/Sobre/i));//interagir com os elementos da tela
    const pathName = history.location.pathname;//verificar se estamos na página correta 
    expect(pathName).toBe('/about');
    const aboutAll = screen.getByText(/Você está na página Sobre/);
    expect(aboutAll).toBeInTheDocument();//verificamos se o texto que aparece quando clicamos nesse link no navegador foi encontrado.
  })

  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pagina/que-nao-existe');// passamos como argumento algum link que não existe dentro de nossa aplicação
    const noMatch = screen.getByText(/Página não encontrada/i);
    expect(noMatch).toBeInTheDocument();
  })

  it('deve renderizar o componente About (apenas componente)', () => {
    const { getByText } = renderWithRouter(<About />);
    const aboutOnly = getByText(/Você está na página Sobre/i);
    expect(aboutOnly).toBeInTheDocument();
  });
})
import React from 'react' // pode ser assim ou desestruturar o component de React
// import React, { Component } from 'react' 

//criando um componente
// classe js com código react embutido;
class HelloWorld extends React.Component { // ai aqui fica (class HelloWorld extends Component)
  render() { // tem que ter para o react renderizar na tela
    return <span>Hello, world!</span>
  }
}

export default HelloWorld // para eu conseguir usar em outros lugares preciso exportar

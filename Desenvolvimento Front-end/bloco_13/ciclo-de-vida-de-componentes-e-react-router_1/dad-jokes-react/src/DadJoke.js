import React, { Component } from 'react';

class DadJoke extends Component {
  constructor () {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    };
  }

  async fetchJoke() {
    this.setState( // antes do estado ser disparado mostro q to carregando e não renderize nada
      {loading: true}, //primeiro parametro vai ser uma atualização de estado
     async () => { // segundo param do setstate vai ser uma callback q a lógica só vai acontecer após a atulização acima
        const requestHeaders = { headers: { Accept: "application/json" } }
        const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
        const requestObject = await requestReturn.json()
        this.setState({
          loading: false, //quando a piada estiver dentro do estado meu loading fica falso e renderiza a piada
          jokeObj: requestObject
      })
    })
  }
  
  componentDidMount() {
    this.fetchJoke()
  }

  saveJoke() { /*  é o mesmo que eu pegar o previousState, aqui só estou desconstruindo */
  this.setState(({ storedJokes, jokeObj }) => ({ 
    storedJokes: [...storedJokes, jokeObj] /* pego tudo que tem e espalho com o novo */
  }))
    this.fetchJoke();
  }

  renderJokeElement() {
    return (
      <div>
        <p>{ this.state.jokeObj.joke }</p>
        <button type="button" onClick={ this.saveJoke }> Salvar piada! </button>
      </div>
    )
  }

  render() {
    const { storedJokes, loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={ id }> { joke } </p>))}
        </span>
{/* renderização condicional - baseado no meu estado eu decido o que vou renderizar */}
        <p>{ loading ? loadingElement : this.renderJokeElement() }</p> 
        {/* enquanto eu estiver carregando mostro o loading elem depois de carregado mostro a pida */}
      </div>
    )
  }
}

export default DadJoke;
import React from 'react';
import EstadoFavorito from './components/estadoFavorito';
import Input from './components/Input';

class Form extends React.Component {
  constructor() {
    super() 

    this.handleChange = this.handleChange.bind(this);
    this.fileInput = React.createRef();

    this.state = {
      estadoFavorito: '',
      idade: 0,
      vaiComparecer: false,
      value: '',
    };
  }

  handleChange({target}) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <fieldset>
            <EstadoFavorito value={this.state.estadoFavorito} handleChange={this.handleChange} />
            <Input
              type="number"
              name="idade"
              value={this.state.idade}
              handleChange={this.handleChange}
            />
            <input
              type="checkbox"
              name="vaiComparecer"
              value={this.state.vaiComparecer}
              onChange={this.handleChange}
            />
            <select name="value" value={this.state.value} onChange={this.handleChange}>
              <option value='value1'> value 1</option>
              <option value='value2'> value 2</option>
              <option value='value3'> value 3</option>
            </select>
            <input type="file" name="file" ref={this.fileInput} onChange={this.handleChange}/>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Form;
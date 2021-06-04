import React, { Component } from 'react';

import estadosBrasileiros from '../data';

import formAction from '../actions';

import { connect } from 'react-redux'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      name: '',
      email: '',
      address:'',
      city:'',
      state: '',
      residence:'',
      resumoCurriculo: '',
      cargo: '',
      descricaoCargo:'',
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.value === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value })
    
  }

  render() {
    const { submitFormInfo } = this.props;
    return(
      <> 
        <h1>Formulário de Cadastro</h1>
        <fieldset>
          <label htmlFor="name"> Nome:
          {/* https://pt-br.reactjs.org/docs/dom-elements.html */}
            <input
             type="text"
             name="name"
             maxLength="40"
             style={{textTransform: 'uppercase'}}
             onChange={ (event) => this.handleChange(event)}
             required />
          </label>
          <label htmlFor="email">Email:
            <input
              type="text"
              name="email"
              maxLength="50" 
              onChange={ (event) => this.handleChange(event)}
              required/>
          </label>
          <label htmlFor="address">Endereço:
            <input
             type="text"
             name="address"
             maxLength="200"
             onChange={ (event) => this.handleChange(event)}
             required/>
          </label>
          <label htmlFor="city">Cidade:
            <input 
              type="text"
              name="city"
              maxLength="28" 
              onChange={ (event) => this.handleChange(event)}
              required/>
          </label>
          <select name="state" id="state" onChange={ (event) => this.handleChange(event)} required >Estado
            {Object.entries(estadosBrasileiros[0]).map((estado, index) => (
            <option key={index} value={estado[1]}>{estado[0]}</option>))}
          </select>
          <label>
            <input type="radio" name="residence" value="casa" onChange={ (event) => this.handleChange(event)} required/> Casa
            <input type="radio" name="residence" value="ap" onChange={ (event) => this.handleChange(event)} /> Apartamento
          </label>
        </fieldset>

        <fieldset>
          <label>Resumo do currículo:
              <textarea name="resumoCurriculo" maxLength="1000" onChange={ (event) => this.handleChange(event)} required />
          </label>

          <label>Cargo:
              <textarea name="cargo" maxLength="40" onChange={ (event) => this.handleChange(event)} required />
          </label>

          <label>Descrição do cargo:
              <textarea name="descricaoCargo" maxLength="500" onChange={ (event) => this.handleChange(event)} required />
          </label>
        </fieldset>
        <button type="button" onClick={() => submitFormInfo(this.state)}>Submit Form</button> 
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  submitFormInfo: (state) => dispatch(formAction(state))
})

export default connect(null, mapDispatchToProps)(Form);
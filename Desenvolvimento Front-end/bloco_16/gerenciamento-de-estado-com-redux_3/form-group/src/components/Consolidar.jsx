import React, { Component } from 'react';
import { connect } from 'react-redux';

class Consolidado extends Component {
  render() {
    
    const {showInformation} = this.props
  
    const { name, email, address, city, state, residence, resumoCurriculo, cargo, descricaoCargo } = showInformation;
    return(
      <>
        <h1>Consolidado</h1>
        <p>{ name }</p>
        <p>{ email }</p>
        <p>{ address }</p>
        <p>{ city }</p>
        <p>{ state }</p>
        <p>{ residence }</p>
        <p>{ resumoCurriculo }</p>
        <p>{ cargo }</p>
        <p>{ descricaoCargo }</p>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  showInformation: state.formReducer.form,
});

export default connect(mapStateToProps, null)(Consolidado);
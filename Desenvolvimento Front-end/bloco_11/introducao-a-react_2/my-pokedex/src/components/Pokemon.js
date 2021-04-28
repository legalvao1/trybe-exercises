import React from 'react'

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight:{ value, measurementUnit}, image }  = this.props;
    return (
      <section>
          <h2>{ name }</h2>
          <h3>{ type }</h3>
          <p>{ value }{ measurementUnit }</p>
          <img src={ image } alt={ name } />
      </section>
    );
  }
}

export default Pokemon; 
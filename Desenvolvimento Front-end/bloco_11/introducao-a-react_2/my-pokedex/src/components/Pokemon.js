import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image }  = this.props.pokemon;
    return (
      <section className='pokemon'>
        <div className="image">
          <div>
              <h2>{ name }</h2>
              <p>{ type }</p>
              <p>{`Average weight: ${ averageWeight.value }${ averageWeight.measurementUnit }`}</p>
            </div>
            <div >
              <img src={ image } alt={ name } />
            </div>
          </div>
      </section>
    );
  }
}

export default Pokemon; 
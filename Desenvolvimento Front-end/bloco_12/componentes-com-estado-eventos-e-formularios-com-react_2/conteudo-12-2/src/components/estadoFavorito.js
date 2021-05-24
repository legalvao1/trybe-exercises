import React from 'react'

class EstadoFavorito extends React.Component {
  render() {
    const {value, handleChange } = this.props
    let error = undefined
    if(value.length > 0 && value.length < 10) error = "MINIMO 10 CARACTERES"
    return (
      <label>
      Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
        <textarea name="estadoFavorito" value={value} onChange={handleChange} />
        <span>{error ? error : ''}</span>
    </label>
    )
  }
}

export default EstadoFavorito;
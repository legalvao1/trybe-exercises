import React from 'react'

class Input extends React.Component {
  render() {
    const { name, value, type, handleChange } = this.props
    return (
        <input type={type} name={name} value={value} onChange={handleChange} />
    )
  }
}

export default Input;
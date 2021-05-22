import React from 'react';
import './App.css';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
}

const ValidEmail = (props) => {
  const { email } = props;

  return (
    <div>
      <h2  data-testid="id-email-user">{`Valor: ${email}`}</h2>
      {email ? (verifyEmail(email)? <h3 id="valid">Email Valido </h3> : <h3 id="invalid">Email Inválido</h3>) : null}
    </div>
  )
}

export default ValidEmail;
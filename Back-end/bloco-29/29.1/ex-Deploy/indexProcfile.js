const express = require('express');

const app = express();

// const server_env = process.env.SERVER_ENV || 'Não Foi :/';

const PORT = process.env.PORT || '3000';
const message = process.env.MESSAGE || 'Deu ruim'

app.get('/', (req, res) => {
    res.send(`${message}, Procfile funciona mesmo!`)
});

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
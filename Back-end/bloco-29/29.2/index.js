const express = require('express');

const app = express();

const PORT = process.env.PORT || '3000';

app.get('/', (req, res) => {
  console.log(new Date().toISOString());
  res.send('Obaaaaaaa');
});

app.get('/break', (req, res) => {
  res.send('Quebrando...');

  process.exit(1);
});

app.listen(PORT, () => console.log(`Rodando na porta ${ PORT }`));
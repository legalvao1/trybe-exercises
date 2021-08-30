const express = require('express');
const bodyParser = require('body-parser');
const { getSimpsons, addSimpsons, generateToken } = require('./getSimpsons');
const authMiddleware = require('./authMiddleware');

const app = express();
app.use(bodyParser.json());
// app.use(authMiddleware);

// app.use(function (err, req, res, next) {
//   res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
// });

app.get('/simpsons', async (req, res) => {
  const token = req.headers.authorization;

  if(token != 12345) res.status(401).json({message: 'Invalid Token!'});
  const simpsons = await getSimpsons();

  if (!simpsons) return res.status(500).json({ message: "Internal Server Error"});
  res.status(200).json(simpsons)
});

app.get('/simpsons/:id', async(req, res) => {
  const { id } = req.params;
  const simpsons = await getSimpsons();
  const findSimpson = simpsons.find((sim) => sim.id === id)

  if (!findSimpson) return res.status(404).json({ message: 'simpson not found' })
  res.status(200).json(findSimpson)
});

app.post('/simpsons', async(req, res) => {
  const { id, name } = req.body;
  const simpsons = await getSimpsons();
  const verifyId = simpsons.find((sim) => sim.id === id);
  if(verifyId) return res.status(409).json({ message: 'id already exists' });
  simpsons.push({ id, name });
  addSimpsons(simpsons);
  res.status(204).end();
});


/* ... */
const crypto = require('crypto');
/* ... */

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'missing fields' });
  }

  const token = crypto.randomBytes(8).toString('hex');

  res.status(200).json({ token });
})

/* ... */

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
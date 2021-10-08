const express = require('express');
const bodyParser = require('body-parser');
const plantsController = require('./plantas');

const app = express();

app.use(bodyParser.json());

app.get('/plants', (_req, res) => {
  const plants = plantsController.getPlants();
  res.send(plants);
});

app.get('/plant/:id', (req, res) => {
  const { id } = req.params;
  const plant = plantsController.getPlantById(id);
  res.send(plant);
});

app.delete('/plant/:id', (req, res) => {
  const { id } = req.params;
  const plant = plantsController.removePlantById(id);
  res.send(plant);
});

app.post('/plant/:id', (req, res) => {
  const { id } = req.params;
  const plant = plantsController.editPlant(id, req.body);
  res.send(plant);
});

app.post('/plant', (req, res) => {
  const plant = plantsController.createNewPlant(req.body);
  res.send(plant);
});

app.get("/sunny/:id", (req, res) => {
  const { id } = req.params;
  const plant = plantsController.getPlantsThatNeedsSunWithId(id);
  res.send(plant);
});

const PORT = '3000';

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));


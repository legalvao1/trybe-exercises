const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // 1 Criar uma nova aplicação Express;
app.use(bodyParser.json());

// app.get('/hello', handleHelloWorldRequest); // 2 Dizer ao Express que, quando uma requisição com método GET for recebida no caminho /hello , a função handleHelloWorldRequest deve ser chamada

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// }); // 3Pedir ao Express que crie um servidor HTTP e escute por requisições na porta 3001;

// function handleHelloWorldRequest(req, res) {
//   res.status(200).send('Hello world!'); // 4 Ao tratar uma requisição com método GET no caminho /hello , enviar o status HTTP 200 que significa OK e a mensagem "Hello world!".

// }


const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

//normal
app.get('/recipes', function (req, res) {
  res.json(recipes.sort(function(a, b){
    return a.name.localeCompare(b.name)
  }));
});


//query string
app.get('/recipes/search', function (req, res) {
  const { name } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name));
  res.status(200).json(filteredRecipes);
});

// parametro de rota
app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});



// app.get('/recipes/search', function (req, res) {
//   const { name, maxPrice, minPrice } = req.query;
//   const filteredRecipes = recipes.filter((r) => r.name.includes(name) 
//     && r.price < parseInt(maxPrice) && r.price >= parseInt(minPrice));
//   res.status(200).json(filteredRecipes);
// });


//post
app.post('/recipes', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

// put
app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});


//delete

//...

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

//...

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];


// https://pt.stackoverflow.com/questions/16496/como-ordenar-array-de-strings-desconsiderando-acentos
app.get('/drinks', function(req, res) {
  res.json(drinks.sort(function(a, b){
    return a.name.localeCompare(b.name)
  }));
});

app.get('/drinks/search', function(req, res){
  const { name, minPrice } = req.query;
  const drink = drinks.filter((dr) => dr.name.includes(name) && dr.price <= parseInt(minPrice))

  res.status(200).json(drink)
})

app.get('/drinks/:id', function(req, res){
  const { id } = req.params;
  const drink = drinks.find((bebida) => bebida.id === parseInt(id));

  if(!drink) return res.status(400).json({ message: "Bebida não encontrada" });
  res.status(200).json(drink)
});

app.post('/drinks', function(req, res){
  const { id, name, price, waitTime } = req.body;
  drinks.push({ id, name, price, waitTime });
  res.status(201).json({ message: "Drink created sucessfully!"})
});


app.get('/validateToken', function (req, res) {
  const { id, nome, preco } = req.body;
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  res.status(200).json({message: 'Valid Token!'})
});

app.put('/drinks/:id', function(req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  console.log(req);
  // console.log(res);

  const editDrink = drinks.findIndex((dr) => dr.id === parseInt(id));
  if (editDrink === -1 ) return res.status(400).json({ message: 'Bebida não encontrada' });
  drinks[editDrink] = { ...drinks[editDrink], name, price }
  res.status(204).end();
});

app.delete('/drinks/:id', function(req, res){
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((drink) => drink.id === parseInt(id));

  if (drinkIndex === -1) res.status(400).json({ message: "Bebida não encontrada" });
  drinks.splice(drinkIndex, 1);
  res.status(204).end();
})


// Se acessarmos uma rota que não existe, para deixarmos a mensagem mais amigavel

app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});


app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
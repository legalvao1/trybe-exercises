use conteudo_trybe;
db.fruits.insertOne(
{ _id: 100, name: "Banana", quantity: 100, inStock: true }
);

//altera o nome do campo name para productName no documento em que o valor do campo name seja igual a Banana :
db.fruits.updateOne(
  { name: "Banana" },
  { $rename: {
      "name": "productName"
    }
  }
);

// retorno
{ _id: 100, quantity: 100, inStock: true, productName: 'Banana' }
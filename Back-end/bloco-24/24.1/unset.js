{
  _id: 100,
  productName: "Banana",
  quantity: 100,
  inStock: true
}

// A operação abaixo remove o campo quantity do documento em que o valor do campo productName seja igual a Banana :

db.fruits.updateMany(
  { productName: "Banana" },
  { $unset: { quantity: "" } }
);

// result

{
  _id: 100,
  productName: "Banana",
  inStock: true
}
//1 Retorne o menor número inteiro relativo ao preço de venda de cada produto;

db.products.aggregate([
  { 
    $project: {
      _id: 0,
      name: 1,
      menorInt: { $floor: "$sale_price"}
    }
  }
]);

//2 Retorne o maior número inteiro relativo ao lucro total sobre cada produto.


db.products.aggregate([
  { 
    $project: {
      _id: 0,
      name: 1,
      maiorInt: {
        $ceil: {
          $subtract: [
            "$sale_price",
            { $add: ["$purchase_price", "$taxes"] },
          ]
        }
      }
    }
  }
]);
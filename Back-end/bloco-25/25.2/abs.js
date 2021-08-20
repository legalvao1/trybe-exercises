// Calcule o valor absoluto do lucro total de cada produto.

db.products.aggregate([
  { 
    $project: {
      _id: 0,
      name: 1,
      valor_absoluto: {
        $abs: {
          $subtract: [
            "$sale_price",
            { $add: ["$purchase_price", "$taxes"] },
          ]
        }
      }
    }
  }
]);
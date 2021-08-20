// Calcule qual será o preço de venda de cada produto caso haja uma promoção de 50% de desconto.

db.products.aggregate([
  { 
    $project: {
      _id: 0,
      name: 1,
      preco_com_desconto: {
        $divide: ["$sale_price", 2]
      }
    }
  }
]);

db.products.aggregate([
  { 
    $project: {
      _id: 0,
      name: 1,
      preco_com_desconto: {
        $subtract: [
          "$sale_price", 
          { $multiply: [ { $divide: [50, 100] }, "$sale_price" ] }
        ]
      }
    }
  }
]);
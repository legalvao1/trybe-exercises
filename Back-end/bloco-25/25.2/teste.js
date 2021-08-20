//ex 7
db.clientes.aggregate([
    {
      $addFields: {
        idade: {
          $floor:{
            $divide: [
              { $subtract: ["$$NOW", "$dataNascimento"]},
              { $multiply: [86400000, 365] }
            ]
          }
        }
      }
    },
    {
      $lookup: {
        from: 'vendas',
        localField: 'clienteId',
        foreignField: 'clienteId',
        as: 'compras'
      }
    },
    {
      $unwind: "$compras"
    },
    {
      $unwind: "$compras.itens"
    },
    {
      $match: { "compras.itens.nome": "QUEIJO PRATO"}
    },
    {
        $group: { _id: "$clienteId", total: { $sum: "$compras.itens.quantidade"  } }
    },
    {
        $sort: {"total": -1 }
    },
    {
     $limit: 1
    },
  ]);


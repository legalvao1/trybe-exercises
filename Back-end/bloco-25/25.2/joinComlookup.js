//1 Selecione todos os clientes com as suas respectivas transações feitas;

db.clients.aggregate([
  { 
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "from",
      as: "transacoes_feitas"
    }
  }
]);

db.clients.aggregate([
  { 
    $lookup: {
      from: "transactions",
      let: { cliente: "$name" },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ["$from",  "$$cliente"] }
          }
        }
      ],
      as: "transacoes"
    },
  }
]);

//2 Selecione os quatro primeiros clientes com as suas respectivas transações recebidas ordenados pelo estado em ordem alfabética;

db.clients.aggregate([
  { 
    $lookup: {
      from: "transactions",
      let: { cliente: "$name" },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ["$to",  "$$cliente"] }
          }
        }
      ],
      as: "transacoes_recebidas"
    },
  },
  { $sort: { State: 1 } },
  { $limit: 4 }
]);


//3 Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.

db.clients.aggregate([
  {
    $match: { State: "Florida"}
  },
  { 
    $lookup: {
      from: "transactions",
      let: { cliente: "$name" },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ["$to",  "$$cliente"] }
          }
        }
      ],
      as: "transacoes_recebidas"
    },
  },
]);

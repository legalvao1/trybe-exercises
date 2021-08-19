//1 Selecione todos os bancos, ou seja, valores do campo bank ;
db.transactions.aggregate([
  { $project: {
     bank: 1,
     _id: 0
    } 
  }
])

db.transactions.aggregate([
  { $group: {
    _id: "$bank",
    bank: { $sum: 1 }
  }}
]);

//2 Selecione o valor total das transações em cada banco e quantas são;

db.transactions.aggregate([
  { $group: {
    _id: "$bank",
    total: { $sum: "$value" },
    transactions: { $sum: 1 }
  }}
]);

//3 Selecione o valor total de transações;

db.transactions.aggregate([
  { $group: {
    _id: "$bank",
    total: { $sum: "$value" },
  }}
]);

//4 Selecione os bancos que têm o valor total de transações maior que 1000.

db.transactions.aggregate([
  { $group: {
    _id: "$bank",
    total: { $sum: "$value" },
  }},
  { $match: { total: { $gt: 1000 } } }
]);


// gabarito 
use('agg_example');
db.transactions.aggregate([
  {
$match: {
      value: { $gt: 1000 },
    },
  },
  {
$group: {
      _id: '$bank',
      total: { $sum: '$value' },
    }
  }
]);
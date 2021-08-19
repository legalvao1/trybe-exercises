db.sales.insertMany([
  {
    _id: 1,
    item: "Código Limpo",
    price: NumberDecimal("10"),
    quantity: NumberInt("2"),
    date: ISODate("2014-03-01T08:00:00Z")
  },
  {
    _id: 2,
    item: "O Homem e Seus Símbolos",
    price: NumberDecimal("20"),
    quantity: NumberInt("1"),
    date: ISODate("2014-03-01T09:00:00Z")
  },
  {
    _id: 3,
    item: "Comunicação Não-Violenta",
    price: NumberDecimal("5"),
    quantity: NumberInt( "10"),
    date: ISODate("2014-03-15T09:00:00Z")
  },
  {
    _id: 4,
    item: "Comunicação Não-Violenta",
    price: NumberDecimal("5"),
    quantity:  NumberInt("20"),
    date: ISODate("2014-04-04T11:21:39.736Z")
  },
  {
    _id: 5,
    item: "Código Limpo",
    price: NumberDecimal("10"),
    quantity: NumberInt("10"),
    date: ISODate("2014-04-04T21:23:13.331Z")
  },
  {
    _id: 6,
    item:"A Coragem de Ser Imperfeito",
    price: NumberDecimal("7.5"),
    quantity: NumberInt("5" ),
    date: ISODate("2015-06-04T05:08:13Z")
  },
  {
    _id: 7,
    item: "A Coragem de Ser Imperfeito",
    price: NumberDecimal("7.5"),
    quantity: NumberInt("10"),
    date: ISODate("2015-09-10T08:43:00Z")
  },
  {
    _id: 8,
    item: "Código Limpo",
    price: NumberDecimal("10"),
    quantity: NumberInt("5" ),
    date: ISODate("2016-02-06T20:20:13Z")
  }
]);

// Exemplo 1: Contando o número de documentos
// Você pode utilizar o operador $group para contar o número de documentos da coleção sales :
db.sales.aggregate([
  {
group: {
      _id: null, //Note que o _id está setado como null , porque nesse caso queremos todos os documentos.
      count: { $sum: 1 }
    }
  }
]);
// retorno 
{ "_id" : null, "count" : 8 }

// igual a 
db.sales.count();

// Exemplo 2: Retornando valores distintos

db.sales.aggregate([
  {
group : {
      _id : "$item",
      count: { $sum: 1}
    }
  }
]);

// Exemplo 3: Somando valores

db.sales.aggregate([
  {
group : {
      _id : "$item",
      totalSaleAmount: {
sum: {
multiply: ["$price", "$quantity"]
        }
      }
    }
  }
]);

// Exemplo 4: Having (do Mysql), combinando estágios no aggregate
// filtro depois do agrupamento

db.sales.aggregate([
  // Primeiro Estágio
  {
group: {
      _id : "$item",
      totalSaleAmount: {
sum: {
multiply: ["$price", "$quantity"]
        }
      }
    }
  },
  // Segundo Estágio
  {
match: { "totalSaleAmount": { $gte: 100 } }
  }
]);

// Exemplo 5: Agrupando por null

// Você pode executar operações matemáticas em todos os documentos de uma coleção. Basta passar null no _id e seguir com os operadores de acumulação.

//No exemplo a seguir, a operação de agregação retornará um documento com o valor total da venda, a quantidade média de itens vendidos e o total de vendas:

db.sales.aggregate([
  {
group : {
      _id : null,
      totalSaleAmount: {
        sum: { $multiply: ["$price", "$quantity"] }
      },
        averageQuantity: { $avg: "$quantity" },
        count: { $sum: 1 }
      }
  }
]);

// retorno

{
  "_id" : null,
  "totalSaleAmount" : NumberDecimal("452.5"),
  "averageQuantity" : 7.875,
  "count" : 8
}
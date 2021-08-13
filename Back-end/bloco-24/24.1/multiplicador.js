db.products.insertOne(
  { "_id": 1, "item": "ABC", "price": NumberDecimal("10.99"), "qty": 25 }
);

db.products.update(
  { _id: 1 },
  { $mul: { price: NumberDecimal("1.25"), qty: 2 } }
);

// O resultado dessa operação é o documento abaixo, em que o novo valor do campo price é o valor original 10.99 multiplicado por 1.25 , e o valor do campo qty , que originalmente era 25 , é multiplicado por 2 :


{ "_id": 1, "item": "ABC", "price": NumberDecimal("13.7375"), "qty": 50 }


// inc

db.increment.update(
  { sku: "abc123" },
  { $inc: { quantity: -2, "metrics.orders": 1 } }
);

// max

db.collection.updateMany({}, { $max: { campo: 75 } });
// Atualizando todos os valores do atributo "campo"
// para 75 caso sejam menores

db.collection.find();

// min

db.collection.updateMany({}, { $min: { campo: 42 } });
// Atualizando todos os valores do atributo "campo"
// para 42 caso sejam maiores

db.collection.find();

// datas
use conteudo_trybe;
db.tags.insertOne(
  {
    _id: 1,
    desc: "crafts",
    dateEntered: ISODate("2019-10-01T05:00:00Z"),
    dateExpired: ISODate("2019-10-01T16:38:16Z")
  }
);

db.tags.update(
  { _id: 1 },
  {
min: { dateEntered: new Date("2019-09-25") },
max: { dateExpired: new Date("2019-10-02") }
  }
);

// currentDate

use conteudo_trybe;
db.customers.insertOne(
  { _id: 1, status: "a", lastModified: ISODate("2013-10-02T01:11:18.965Z") }
);

//altera lastmodified/ cria cancelation.date e cancellation.reason e atualiza status

db.customers.updateOne(
  { _id: 1 },
  { $currentDate: {
      lastModified: true, // data corrente
      "cancellation.date": { $type: "timestamp" }
    }, $set: {
      "cancellation.reason": "user request",
      status: "D"
    }
  }
);

// retorno

{
  "_id": 1,
  "status": "D",
  "lastModified": ISODate("2020-01-22T21:21:41.052Z"),
  "cancellation": {
    "date": Timestamp(1579728101, 1),
    "reason": "user request"
  }
}

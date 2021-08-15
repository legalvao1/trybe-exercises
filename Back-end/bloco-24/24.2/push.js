use ("sales");

// Para não precisarmos escrever uma query só para fazer o insert do documento, vamos usar a opção upsert: true para já adicionar o elemento ao mesmo tempo que usamos o operador $push . 

db.supplies.updateOne(
{ _id: 1 },
{
$push: {
    items: {
      "name": "notepad",
      "price":  35.29,
      "quantity": 2,
    },
  },
},
{ upsert: true },
);


// add multiplos valores => necessário adicionar o modificador $each .

db.supplies.updateOne(
  {},
  {
    $push: {
      items: {
        $each: [
          {
            "name": "pens",
            "price": 56.12,
            "quantity": 5,
          },
          {
            "name": "envelopes",
            "price": 19.95,
            "quantity": 8,
          },
        ],
      },
    },
  },
  { upsert: true },
);

// multiplos modificadores

// tenho tres items, mas quero adicionar ao meu array os dois com maiores quantidades em ordem desc

db.supplies.updateOne(
  { _id: 1 },
  {
    $push: {
      items: {
        $each: [
          {
            "name" : "notepad",
            "price" : 35.29,
            "quantity" : 2,
          },
          {
            "name": "envelopes",
            "price": 19.95,
            "quantity": 8,
          },
          {
            "name": "pens",
            "price": 56.12,
            "quantity": 5,
          },
        ],
      $sort: { quantity: -1 },
      $slice: 2,
      },
    },
  },
  { upsert: true },
);
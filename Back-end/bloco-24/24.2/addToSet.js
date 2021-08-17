{
  _id: 1,
  item: "polarizing_filter",
  tags: ["electronics", "camera"],
}

// adicionando

db.inventory.updateOne(
  { _id: 1 },
  { $addToSet: { tags: "accessories" } }, // adiciona caso não exista o acessories
);

// Se o valor existir
// { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 0 }
// MongoDB encontrou um documento com o _id igual a 1 , mas não fez nenhuma alteração:

// $addToSet combinado com o modificador $each . Esse modificador permite que você adicione múltiplos valores a um array .

db.inventory.updateOne(
  { _id: 2 },
  {
    $addToSet: {
      tags: {
        $each: ["camera", "electronics", "accessories"],
      },
    },
  },
);
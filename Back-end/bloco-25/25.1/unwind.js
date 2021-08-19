db.inventory.insertOne({ _id: 7, item: "ABC1", sizes: ["S", "M", "L"] });

//E agora, utilizando o $unwind como um estágio do pipeline 

db.inventory.aggregate([{ $unwind : "$sizes" }]);

// O retorno é o seguinte:

{ "_id" : 7, "item" : "ABC1", "sizes" : "S" }
{ "_id" : 7, "item" : "ABC1", "sizes" : "M" }
{ "_id" : 7, "item" : "ABC1", "sizes" : "L" }

// Note que temos a "expansão" do array sizes , e a saída são três documentos com os valores _id e item preservados.
// Você verá mais exemplos com o operador $unwind quando "juntarmos" tudo em vários estágios!
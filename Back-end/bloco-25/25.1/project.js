db.books.insertOne(
  {
    _id: 1,
    title: "A Fundação",
    isbn: "0001122223334",
    author: { last: "Asimov", first: "Isaac" },
    copies: 5
  }
)

// Exemplo 1: Incluindo campos específicos
db.books.aggregate(
  [
    {
project : {
        title : 1,
        author : 1
      }
    }
  ]
);

// Exemplo 2: Excluindo o campo _id

db.books.aggregate([
  {
project : {
      _id: 0,
      title : 1,
      author : 1
    }
  }
]);

// Exemplo 3: Excluindo outros campos

db.books.aggregate([
  {
project : {
      copies: 0
    }
  }
]);

// Exemplo 4: Excluindo campos em subdocumentos

db.books.aggregate([
  {
project : {
      "author.first": 0,
      copies: 0
    }
  }
]);

// Exemplo 5: Incluindo campos calculados
// Podemos usar uma string iniciada com o caractere $ para indicar que queremos projetar um campo, assim: "$nomeDoCampo".
// A operação a seguir adiciona os novos campos isbn , lastname e copiesSold :

db.books.aggregate([
  {
project: {
      title: 1, //{ $substr: [ <string>, <start>, <length> ] }
      isbn: { // 0001122223334"
        prefix: { $substr: ["$isbn", 0, 3] }, // 000
        group: { $substr: ["$isbn", 3, 2] }, //11
        publisher: { $substr: ["$isbn", 5, 4] }, //2222
        title: { $substr: ["$isbn", 9, 3] }, // 333
        checkDigit: { $substr: ["$isbn", 12, 1] } // 4
      },
      lastName: "$author.last",
      copiesSold: "$copies"
    }
  }
]);

// retorno  apenas adicionados para a visualização final, não serão salvos no banco.

{
  "_id" : 1,
  "title" : "A Fundação",
  "isbn" : {
    "prefix" : "000",
    "group" : "11",
    "publisher" : "2222",
    "title" : "333",
    "checkDigit" : "4"
  },
  "lastName" : "Asimov",
  "copiesSold" : 5
}
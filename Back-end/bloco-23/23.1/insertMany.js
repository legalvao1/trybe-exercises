

db.products.insertMany([
  { "productName": "Lapis", "stock": 10, "price": 20,"status":"A"},
  { "productName": "Tesoura", "price": 5, "status": "B" },
  { "productName": "Borracha", "price": 15, "status": "A" }
])


db.movies.insertOne(
  {
    "title" : "Forrest Gump",
    "category" : [ "drama", "romance" ],
    "imdb_rating" : 8.8,
    "filming_locations" : [
      { "city" : "Savannah", "state" : "GA", "country" : "USA" },
      { "city" : "Monument Valley", "state" : "UT", "country" : "USA" },
      { "city" : "Los Anegeles", "state" : "CA", "country" : "USA" }
    ],
    "box_office" : {
      "gross" : 557, "opening_weekend" : 24, "budget" : 55
    }
  }
)


db.movies.findOne(
  { "title" : "Forrest Gump" },
  { "title" : 1, "imdb_rating" : 1 }
)

// EXERCICIOS

// Exercício 1 : Retorne o documento com o _id igual a 8.
db.bios.findOne({'_id': 8});

//Exercício 2 : Retorne o documento com o _id igual a 8, mas só exiba os atributos: _id e name .
db.bios.find({'_id': 8}, {'name': true});

// Exercício 3 : Retorne apenas os atributos name e birth do documento com o _id igual a 8.
db.bios.find({'_id': 8}, {'name': true, 'birth': true});

//Exercício 4 : Retorne todos os documentos em que o atributo name.first seja igual a John , utilizando o método pretty() .
db.bios.find({'name.first': 'John'}).pretty();

// Exercício 5 : Retorne os 3 primeiros documentos da coleção bios utilizando o método pretty() .
db.bios.find().limit(3).pretty();

// Exercício 6 : Retorne 2 documentos da coleção bios pulando os 5 primeiros documentos.
db.bios.find().limit(2).skip(5);

// Utilizando o mongoimport , importe o arquivo books.json para a sua instância local do MongoDB e utilize a coleção books para construir as seguintes consultas:

// Exercício 7 : Retorne a quantidade de documentos da coleção books .
db.books.count()

// Exercício 8 : Conte quantos livros existem com o status = "PUBLISH" .
db.books.find({'status':'PUBLISH'}).count()

// Exercício 9 : Exiba os atributos title , isbn e pageCount dos 3 primeiros livros. NÃO retorne o atributo _id .
db.books.find({}, {'title': true, 'isbn': true, 'pageCount': true, '_id': 0}).limit(3)

// Exercício 10: Pule 5 documentos e exiba os atributos _id , title , authors e status dos livros com o status = "MEAP" , limitando-se a 10 documentos.

db.books.find({'status': 'MEAP'}, {'title': true, 'authors': 1, 'status': 1}).limit(10)
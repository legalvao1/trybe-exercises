db.movies.updateOne(
  { title: "Home Alone" },
  { $currentDate: { 
    lastUpdate: { $type: "timestamp" } }
  }
);

// Exercício 14 : Remova o campo class dos documentos que possuem esse campo com o valor unknown .

db.xmen.updateMany(
  { class: "unknown"},
  { 
    $currentDate: { lastUpdate: { $type: "timestamp" } },
    $unset: { class: ""},
  }
);

// Exercício 15 : Produza uma query que renomeie os campos de name para hero_name , e de true_name para full_name ; adicione o campo power com valor 100, em todos os documentos.

db.xmen.updateMany(
  {},
  { 
    $currentDate: { lastUpdate: { $type: "timestamp" } },
    $rename: { 
      "name": " hero_name",
      "true_name": "full_name"
    },
    $set: { power: 100 }
  }
);

// Exercício 16 : Produza uma query onde os mutantes class omega ou gama passam a ter seu poder de 500 somente se seu poder for menor que 500 .

// meu
db.xmen.updateMany(
  { $or: [
    { class: "omega"}, { class: "gama" }
    ]
  },
  { 
    $currentDate: { lastUpdate: { $type: "timestamp" } },
    $max: { power: 500 }
  }
);

// gabarito

db.xmen.updateMany(
  { class: { $in: ["omega", "gama"] } },
  {
    currentDate: { lastUpdate: { $type: "timestamp" } },
    max: { power: 500 },
  },
);

// Exercício 17 : Produza uma query onde os mutantes class gama passam a ter seu poder de 300 somente se seu poder for maior que 300 .

db.xmen.updateMany(
  { class: "gama" },
  {
    $currentDate: { lastUpdate: { $type: "timestamp" } },
    $min: { power: 300 },
  },
);

// Exercício 18 : Decremente em 100 o poder dos mutantes que não possuem a propriedade class .

db.xmen.updateMany(
  { class: { $exists: false } },
  {
    $currentDate: { lastUpdate: { $type: "timestamp" } },
    $inc: { power: -100 },
  },
);

// Exercício 19 : Em apenas uma query adicione o campo areas com o seguinte array como valor: ["Students Room"] a todos os mutantes que são Senior Staff que tenham poder acima de 100 e para todos os Junior Staff com poder acima de 200.

// trybe
db.xmen.updateMany(
  { $or: [
    { occupation: "Senior Staff" , power: { $gt: 100 } } ,
    { occupation: "Junior Staff ", power: { $gt: 200 } } ,
  ] },
  {
    $currentDate: { lastUpdate: { $type: "timestamp" } },
    $set: { areas: ["Students Room"] },
  },
);

// meu
db.xmen.updateMany(
  { $or: [
    { $and: [ { occupation: "Senior Staff"} , { power: { $gt: 100 } } ] } ,
    { $and: [ { occupation: "Junior Staff "} , { power: { $gt: 200 } } ] } ,
  ] },
  {
    $currentDate: { lastUpdate: { $type: "timestamp" } },
    $set: { areas: ["Students Room"] },
  },
);


// Exercício 20 : Em apenas uma query, adicione o campo areas com ["Outside"] a todos os Junior Staff que não tenham o campo areas definido.

db.xmen.updateMany(
  { occupation: "Junior Staff", areas: { $exists: false } },
  {
    $currentDate: { lastUpdate: { $type: "timestamp" } },
    $set: { areas: ["Outside"] },
  },
);

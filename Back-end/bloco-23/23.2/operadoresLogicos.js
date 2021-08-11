// Selecione e faça a contagem dos restaurantes que não possuem avaliação menor ou igual a 5 , essa consulta também deve retornar restaurantes que não possuem o campo avaliação.

db.restaurants.find({ $nor : [{'rating': { $lte: 5}}]}).count() // meu

db.restaurants.find({ rating: { $not: { $lte: 5 } }}).count(); // gabarito

// Selecione e faça a contagem dos restaurantes em que a avaliação seja maior ou igual a 6 , ou restaurantes localizados no bairro Brooklyn .

db.restaurants.find({$or: [{ 'rating': { $gte: 6} }, { borough: 'Brooklyn'} ] }).count()

// Selecione e faça a contagem dos restaurantes localizados nos bairros Queens , Staten Island e Broklyn e possuem avaliação maior que 4 .

db.restaurants.find({ $and: [ 
    { 'borough': { $in: ['Queens', 'Staten Island', 'Bronx'] } },
    { 'rating': { $gt: 4 } }
]
}).count()

// Selecione e faça a contagem dos restaurantes onde nem o campo avaliação seja igual a 1 , nem o campo culinária seja do tipo American .

db.restaurants.find({ $nor: [
    {'rating': {$eq: 1 } },
    { cuisine: 'American' }
]
}).count()

// Selecione e faça a contagem dos resturantes em que a avaliação seja maior que 6 ou menor que 10 , E esteja localizado no bairro Brooklyn , OU não possuem culinária do tipo Delicatessen .

db.restaurants.find({
    $and: [
        { $or: [ { rating: { $gte: 6 , $lt: 10 } } ]},
        { $or: [ { borough: 'Brooklyn'}, { cuisine: { $ne: 'Delicatessen' } } ] }
    ]
}).count()
// Ordene alfabeticamente os restaurantes pelo nome (atributo name ).

db.restaurants.find().sort({ name: 1 });

// Ordene os restaurantes de forma descrescente baseado nas avaliações.
db.restaurants.find().sort({ rating: -1 });
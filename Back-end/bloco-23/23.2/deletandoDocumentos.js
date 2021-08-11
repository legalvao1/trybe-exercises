// Remova o primeiro restaurante que possua culinária do tipo Ice Cream, Gelato, Yogurt, Ice
db.restaurants.findOne({ cuisine: 'Ice Cream, Gelato, Yogurt, Ices'})
db.restaurants.deleteOne({ cuisine: 'Ice Cream, Gelato, Yogurt, Ices'})

//
db.restaurants.find({ cuisine: 'American'})
db.restaurants.deleteMany({ cuisine: 'American'})
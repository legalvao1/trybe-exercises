// para remover o primeiro elemento

db.supplies.updateOne({ _id: 1 }, { $pop: { items: -1 } });

// remover o último

db.supplies.updateOne({ _id: 1 }, { $pop: { items: 1 } });


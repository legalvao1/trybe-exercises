db.voos.updateOne(
    { vooId: 7000 },
    { $push: {
        servicoDeBordo: {
            $each: [
                "", ""
            ],
            $sort: { categoria: -1}
        }
    }},
    { collation: { locale: "pt"} } // para portuges, pegar acentos
);
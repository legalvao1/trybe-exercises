//Exercício 1 : Utilize uma combinação das expressões aritméticas e adicione um campo chamado idade à coleção clientes . Algumas dicas:
//- arredonde para baixo o valor da idade;
//- calcule a idade usando a diferença entre a data corrente e a data de nascimento;
// -1 dia é igual a 86400000 milissegundos.

const diaEmMilissegundos = 86400000;
const ano = diaEmMilissegundos * 365; 

// meu
db.clientes.aggregate([
  { 
    $addFields: { 
      idade: {
        $floor: {
          $multiply: [
            3.16887385E-11,
            { $subtract: [new Date(), "$dataNascimento"] }
          ]
        }
      }
    }
  }
]);

// gabarito
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
       $floor:{
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  }
]);
//Exercício 2 : Utilizando o novo campo idade , conte quantos clientes têm entre 18 e 25 anos.

db.clientes.aggregate([
  { 
    $addFields: { 
      idade: {
        $floor: {
          $multiply: [
            3.16887385E-11,
            { $subtract: [new Date(), "$dataNascimento"] }
          ]
        }
      }
    }
  },
  {
    $match: {
      idade: { $gte: 18, $lte: 25 }
    }
  },
  {
    $count: "total_clientes" 
  }
]);


//Exercício 3 : Remova os estágios $count e $match do exercício anterior e adicione um estágio no pipeline que coloque as compras do cliente no campo compras .

// meu
db.clientes.aggregate([
  { 
    $addFields: { 
      idade: {
        $floor: {
          $multiply: [
            3.16887385E-11,
            { $subtract: [new Date(), "$dataNascimento"] }
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: "vendas",
      let: { id_cliente: "$clienteId" },
      pipeline: [
        {
          $match: {
            $expr: {
               $eq: ["$clienteId", "$$id_cliente"] 
            }
          }
        }
      ],
      as: "compras" 
    }
  }
]);

// gabarito

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor:{
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"]},
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras'
    }
  }
]);


//Exercício 4 : Selecione TODOS os clientes que compraram entre Junho de 2019 e Março de 2020 .

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor:{
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"]},
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras'
    }
  },
  {
    $unwind: "$compras"
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate('2019-06-01'),
        $lte: ISODate('2020-03-31')
      }
    }
  }
]);

//Exercício 5 : Confira o número de documentos retornados pelo pipeline com o método itcount() . Até aqui, você deve ter 486 documentos sendo retornados.


// Gabarito Trybe

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor:{
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"]},
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras' // É UM ARRAY
    }
  },
  {
    $match: {
      "compras.dataVenda": { // ARRAY TENTANDO ACESSAR UMA PROPRIEDADE - RETORNA TUDO
        $gte: ISODate('2019-06-01'),
        $lte: ISODate('2020-03-31')
      }
    }
  }
]).itcount();



// MINHA RESOLUÇÃO
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor:{
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"]},
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras'
    }
  },
  {
    $unwind: "$compras"
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate('2019-06-01'),
        $lte: ISODate('2020-03-31')
      }
    }
  },
  {
    $group: {
      _id: "$clienteId"
    }
  }
]).itcount();



//Exercício 6 : Ainda nesse pipeline , descubra os 5 estados com mais compras.
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor:{
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"]},
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras'
    }
  },
  {
    $unwind: "$compras"
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate('2019-06-01'),
        $lte: ISODate('2020-03-31')
      }
    }
  },
  {
    $group: {
      _id: "$endereco.uf",
      total: { $sum: 1 }
    }
  },
  {
    $sort: { total: -1 }
  },
  {
    $limit: 5
  }
]);

//Exercício 7 : Descubra o cliente que mais consumiu QUEIJO PRATO . Retorne um documento com a seguinte estrutura:

// gabarito

db.vendas.aggregate([
  {
    $match: {
      "itens.nome": "QUEIJO PRATO"
    }
  },
  { $unwind: "$itens" },
  {
    $match: {
      "itens.nome": "QUEIJO PRATO"
    }
  },
  {
    $group: {
      _id: "$clienteId",
      totalConsumido: {
        $sum: "$itens.quantidade"
      }
    }
  },
  {
    $sort: { totalConsumido: -1 }
  },
  { $limit: 1 },
  {
    $lookup: { // Seleciona todos os clientes com as suas respectivas transações feitas;
      from: 'clientes',
      localField: '_id',
      foreignField: 'clienteId',
      as: 'cliente'
    }
  },
  { $unwind: "$cliente" },
  {
    $project: {
      nomeCliente: "$cliente.nome",
      uf: "$cliente.endereco.uf",
      totalConsumido: "$totalConsumido",
      _id: 0
    }
  }
]);


// Exercício 8 : Selecione todas as vendas do mês de Março de 2020 , com status EM SEPARACAO . Acrescente um campo chamado dataEntregaPrevista com valor igual a três dias após a data da venda. Retorne apenas os campos clienteId , dataVenda e dataEntregaPrevista .

db.vendas.aggregate([
  { 
    $match: {
      dataVenda: {
        $gte: ISODate("2020-03-01"),
        $lte: ISODate("2020-03-31")
        }
      ,
      status: "EM SEPARACAO" 
    }
  },
  {
    $addFields: {
      dataEntregaPrevista: { $add: ["$dataVenda", 2.592e+8] }
    }
  },
  {
    $project: {
      _id: 0,
      clienteId: 1,
      dataVenda: 1,
      dataEntregaPrevista: 1
    }
  }
]);

//Exercício 9 : Calcule a diferença absoluta em dias entre a data da primeira entrega prevista e a última, considerando o pipeline do exercício 8.


db.vendas.aggregate([
  { 
    $match: {
      dataVenda: {
        $gte: ISODate("2020-03-01"),
        $lte: ISODate("2020-03-31")
        }
      ,
      status: "EM SEPARACAO" 
    }
  },
  {
    $addFields: {
      dataEntregaPrevista: { $add: ["$dataVenda", 2.592e+8] }
    }
  },
  {
    $project: {
      _id: 0,
      clienteId: 1,
      dataVenda: 1,
      "dataEntregaPrevista": 1,
      dataAbs: 1
    }
  },
  {
    $group: {
      _id: null,
      maior_data_entrega: { $max: "$dataEntregaPrevista" },
      menor_data_entrega: { $min: "$dataEntregaPrevista" }
    }
  },
  {
    $project: {
      _id: 0,
      diferencaAbsoluta: {
        $floor: {
          $abs: {
            $divide: [
              { $subtract: ["$maior_data_entrega", "$menor_data_entrega"] },
              86400000
            ]
          }
        }
      }
    }
  }
]);
const order = {
	name: 'Rafael Andrade',
	phoneNumber: '11-98763-1416',
	address: {
		street: 'Rua das Flores',
		number: '389',
		apartment: '701',
	},
	order: {
		pizza: {
			margherita: {
				amount: 1,
				price: 25,
			},
			pepperoni: {
				amount: 1,
				price: 20,
			}
		},
		drinks: {
			coke: {
				type: 'Coca-Cola Zero',
				price: 10,
				amount: 1,
			}
		},
		delivery: {
			deliveryPerson: 'Ana Silveira',
			price: 5,
		}
	},
	payment: {
		total: 60,
	},
};

const customerInfo = (order) => {
	// Adicione abaixo as informações necessárias.
	console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`)
}

customerInfo(order);

const orderModifier = (order) => {
	// Adicione abaixo as informações necessárias.
	const pedido = Object.keys(order);
	const pizzas = Object.keys(order.order.pizza)
	const drinks = Object.values(order.order.drinks.coke)
	pedido.name = 'Luiz Silva'
	drinks[1] = 50
	console.log(`Olá ${pedido.name} o total do seu pedido de ${pizzas}, e ${drinks[0]} é R$ ${drinks[1]},00`)
	
}

orderModifier(order);
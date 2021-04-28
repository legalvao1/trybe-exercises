// original

function hydrate1(string) {
	let regex = /\d+/g;
	let numeros = string.match(regex); // pego apenas os numeros da string em forma de lista
	let soma = 0;
	for (let i = 0; i < numeros.length; i += 1) {
		soma += parseInt(numeros[i], 10); // transforma os numeros(str) da lista em int e soma
	}
	if (soma === 1) {
		return `${soma} copo de água`;
	}
	return `${soma} copos de água`;
}
// console.log(hydrate1('1 cerveja'));
// console.log(hydrate1('1 cachaça, 5 cervejas e 1 copo de vinho'));

const hydrate = (string) => {
	const regex = /\d+/g;
	const numbers =  string.match(regex);
	let total = numbers.reduce((acc, curr) =>  acc + parseInt(curr, 10), 0);
	return total === 1 ? `${total} copo de água` : `${total} copos de água`; 
};

// console.log(hydrate('1 cerveja'));
// console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = hydrate;
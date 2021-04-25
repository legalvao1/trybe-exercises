// original
function techList(array, name) {
	let listaDeTecnologias = [];
	for (let index = 0; index < array.sort().length; index += 1) {
		listaDeTecnologias.push({
			tech: array[index],
			name,
		});
	}
	if (listaDeTecnologias.length === 0) {
		return 'Vazio!';
	}
	return listaDeTecnologias;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

//Refatorada

const techList1 = (array, name) => {
	if (array.length === 0) return 'Vazio!';
	return array.sort().map((tech) => ({ tech, name }));
}

console.log(techList1(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

module.exports = techList1;
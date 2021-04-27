const testingScope = (escopo) => {
	if (escopo === true) {
		let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
		ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
		console.log(ifScope);
	} else {
		const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
		console.log(elseScope);
	}
	// console.log(`${ifScope} o que estou fazendo aqui ? :O'`); // Se necessário esta linha pode ser removida.
}

testingScope(true);

//------------------------------------------------------------------------------------------------
// gabarito
const oddsAndEvens = [13, 3, 4, 10, 7, 2] 

// Seu código aqui.
const ordemCrescente = () => {
	oddsAndEvens[0] = 2;
	oddsAndEvens[1] = 3;
	oddsAndEvens[2] = 4;
	oddsAndEvens[3] = 7;
	oddsAndEvens[4] = 10;
	oddsAndEvens[5] = 13;

	return oddsAndEvens;
}

const arrayEmOrdem = ordemCrescente()
console.log(`${arrayEmOrdem}`);



//------------------------------
// https://www.w3schools.com/jsref/jsref_sort.asp

// Seu código aqui.
const ordemCrescente2 = (array) => {
	const arrayOrdenado = array.sort(function (a, b) {return a -b});
  
	return arrayOrdenado;
}

const arrayEmOrdem1 = ordemCrescente2(oddsAndEvens);
console.log(`${arrayEmOrdem1}`);
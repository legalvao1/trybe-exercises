const algarismos = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
}

const converteRomano = (algarismo) => {
	const algarismoRecebido = algarismo.split('');
	let decimal = 0;
	let numeroAnterior = 0;
	algarismoRecebido.forEach((key) => {
		let numeroAtual = algarismos[key];
		if (numeroAnterior === 0) {
			numeroAnterior = numeroAtual;
			
		} else {
			console.log(numeroAnterior)
			console.log(numeroAtual)
			if (numeroAnterior < numeroAtual) {
				decimal += numeroAtual - numeroAnterior;
                numeroAnterior = numeroAtual;
			} else {
				decimal += numeroAnterior - numeroAtual
                numeroAnterior = numeroAtual;
			}
			
		}
})
	console.log(decimal);
}
converteRomano('xliv'.toUpperCase())
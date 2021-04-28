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
	algarismoRecebido.forEach((key) => {
		let numeroAtual = algarismos[key];
		if (decimal === 0) {
				decimal = numeroAtual;
		} else {

				decimal = decimal < numeroAtual ?  numeroAtual -= decimal : decimal += numeroAtual
		}
})
	console.log(decimal);
}
converteRomano('xlvii'.toUpperCase())
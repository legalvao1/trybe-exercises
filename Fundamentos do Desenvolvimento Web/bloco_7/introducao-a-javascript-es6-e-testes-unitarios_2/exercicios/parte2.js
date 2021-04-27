const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  // Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const adicionaTurno = (objeto, chave, valor) => {
    const turno = {[chave]: valor}
    Object.assign(objeto, turno);

}
adicionaTurno(lesson2, 'turno', 'manhã');

console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listaKeys = (objeto) => Object.keys(objeto);

console.log(listaKeys(lesson3));

// Crie uma função para mostrar o tamanho de um objeto.

const tamanhoDoObjeto = (objeto) =>  Object.entries(objeto).length;

console.log(tamanhoDoObjeto(lesson1));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listaValues = (objeto) => Object.values(objeto);

console.log(listaValues(lesson2));

//Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const allLessons = {}
Object.assign(allLessons, {lesson1,lesson2,lesson3});
console.log(allLessons);

//Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalEstudantesAula = (objeto) => {
	const aulas = Object.keys(objeto);
	let total = 0;
	for (let i = 0; i < aulas.length; i += 1) {
			const propriedadeAula = Object.entries(objeto[aulas[i]]);
			const numeroEstudantes = propriedadeAula[1];
			total += numeroEstudantes[1];
	}
	return `O total de estudantes é ${total}`;
}

console.log(totalEstudantesAula(allLessons))

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
const pegaOValuePeloIndice = (objeto, indice) => {
	const aula = Object.keys(objeto);
	const valor = objeto[aula[indice]];
	console.log(valor);
}

pegaOValuePeloIndice(lesson3, 2);

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const verificaChaveValor = (objeto, chave, valor) => (objeto[chave] === valor);

console.log(verificaChaveValor(lesson3, 'turno', 'noite'));
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

  const allLessons = Object.assign({}, {lesson1,lesson2,lesson3});
// console.log(allLessons);

// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const estudantesMatematica = (objeto) => {
    const aulas = Object.keys(objeto);
    let totalEstudantesMatematica = 0;
    for (let i = 0; i < aulas.length; i += 1) {
        const propriedadeAula = Object.values(objeto[aulas[i]]);
        if (propriedadeAula[0] === 'Matemática'){
            const estudantes = propriedadeAula[1];
            totalEstudantesMatematica += estudantes
        }
        
    }
    console.log(`Total de estudantes na aula de Matemática: ${totalEstudantesMatematica}`);
}

estudantesMatematica(allLessons);

const creatReport = (objeto, nome) => {
  const aulas = Object.values(objeto);
  const report = {
    professor: nome,
    aulas: [],
    estudantes: 0,
  }
  aulas.find((keys) => {
      if (keys.professor === nome) {
        report.aulas.push(keys.materia);
        report.estudantes += keys.numeroEstudantes;
      }
    })
  return report;
}

console.log(creatReport(allLessons, 'Maria Clara'));
console.log(creatReport(allLessons, 'Carlos'));
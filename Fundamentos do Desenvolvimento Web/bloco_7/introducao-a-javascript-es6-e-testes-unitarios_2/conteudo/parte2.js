const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const mostraHabilidade = (objeto) => {
  const arrayDeSkill = Object.keys(objeto);
  for (i in arrayDeSkill) {
    console.log(`${arrayDeSkill[i]} Nivel: ${objeto[arrayDeSkill[i]]}`)
  }
}

console.log(mostraHabilidade(student2))
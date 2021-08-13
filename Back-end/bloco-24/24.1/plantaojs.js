const wrongDataFormat = [
  'preto-PP',
  'preto-M',
  'preto-G',
  'preto-GG',
  'preto-GG',
  'branco-PP',
  'branco-G',
  'vermelho-M',
  'azul-XG',
  'azul-XG',
  'azul-XG',
  'azul-P'
];

const convert = (dataArr) => {
  const separaCorETamanho = dataArr.map((item) => item.split('-'))
  return separaCorETamanho.reduce((acc, [cor, tamanho]) => {
    if(acc[cor]) {
      const tamanhoCor = acc[cor];
      if (tamanhoCor[tamanho]){
        tamanhoCor[tamanho] += 1
        return acc
      } 
      acc[cor] = {...acc[cor], [tamanho]: 1 };
    }
    acc[cor] = {...acc[cor], [tamanho]: 1 }
    return acc;
  }, {})
};

console.log(convert(wrongDataFormat));


const result = {
  preto: { PP: 1, M: 1, G: 1, GG: 2 },
  branco: { PP: 1, G: 1 },
  vermelho: { M: 1 },
  azul: { XG: 3, P: 1 },
}
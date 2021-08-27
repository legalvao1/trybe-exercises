
const verifyNumber = (number) => {
  if(typeof(number) != 'number') {
      return "o valor deve ser um número";
  } else if (number > 0){
      return 'positivo';
  } else if(number < 0) {
      return 'negativo';
  }
  return 'neutro';
}

// console.log(verifyNumber(0))
// console.log(verifyNumber(1))
// console.log(verifyNumber(-1))
// console.log(verifyNumber('-1'))

module.exports = { verifyNumber };
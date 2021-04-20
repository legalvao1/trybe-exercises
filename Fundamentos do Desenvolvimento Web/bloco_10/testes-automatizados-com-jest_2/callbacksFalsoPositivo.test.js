// test("Não deveria passar!", () => {
//     setTimeout(() => {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!')
//     }, 500);
//   }); // O Jest não espera o test acabar, gerando esse resultado falso-positivo.

 // Para o Jest esperar a função assíncrona ser finalizada, é necessário utilizar uma callback própria da biblioteca, chamada done , que precisa ser chamada após os testes assíncronos.

//  test("Não deveria passar!", done => {
//     setTimeout(() => {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!')
//       done();
//     }, 500);
//   });

  const SumNumbers = (a, b, callback) => {
    setTimeout(() => {
      const result = a + b;
      callback(result);
    }, 500)
  }
  
  test('Testando SumNumbers, soma 5 mais 10', done => {
    SumNumbers(5, 10, (result) => {
      expect(result).toBe(15);
      done();
    });
  })
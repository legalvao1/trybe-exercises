// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
)

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n')

// Você também pode adicionar uma expressão dentro das chaves, como ${a + b}
const myName = "Isabella"
console.log(`Welcome ${myName}!`);
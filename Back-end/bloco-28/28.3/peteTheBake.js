function cakes(recipe, available) {
  let cakes = 0;
  let ok = true;
  const ingredientes = Object.entries(recipe);

  while (ok) {
    ingredientes.map(([name, qtd]) => {
      if (available[name] >= qtd) {
        available[name] = available[name] - qtd;
      } else {
        ok = false;
      }
    });
    cakes += 1
  }
  return cakes - 1;
}

// function cakes(recipe, available) {
//   return Math.min(...Object.keys(recipe).map(e => available[e]/recipe[e]>>0));
// }


const recipe = {flour: 500, sugar: 200, eggs: 1};
const available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
console.log(cakes(recipe, available));
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));

console.log(cakes({"cream":200,"flour":300,"sugar":150,"milk":100,"oil":100},{"sugar":1700,"flour":20000,"milk":20000,"oil":30000,"cream":5000}) )


console.log(cakes({"cream":1,"flour":3,"sugar":1,"milk":1,"oil":1,"eggs":1}, {"sugar":1,"eggs":1,"flour":3,"cream":1,"oil":1,"milk":1}))



// function cakes(recipe, available) {
//   let cakes = 0;
//   const ingredientes = Object.entries(recipe);

//   while (available[ingredientes[0][0]] > ingredientes[0][1]) {
//     ingredientes.map(([name, qtd]) => {
//       if (available[name] > qtd) {
//         available[name] = available[name] - qtd;
//       }
//       return 0;
//     });
//     cakes += 1
//   }
//   return cakes
// }

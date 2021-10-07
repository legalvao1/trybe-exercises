function sumIntervals(intervals) {
  let lista = [];
  intervals.forEach(([a, b]) => {
    lista.length = Math.max(lista.length, b);
    for (let i = a; i < b; i++) {
      lista[i] = 1;
    }
  });
  return lista.reduce((a, b) => a + b, 0);
}

console.log(sumIntervals([
  [1,5],
  [10, 20],
  [1, 6],
  [16, 19],
  [5, 11]
]));
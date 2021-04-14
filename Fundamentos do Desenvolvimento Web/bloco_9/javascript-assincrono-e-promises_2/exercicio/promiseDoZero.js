const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
  const array = [];
    for (let i = 10; i > array.length; i) {
      array.push(Math.round((Math.random() * 50) + 1 ));
    }
    const sum = array.map((numero) => numero * numero).reduce((acc, curr) => acc + curr, 0);

    (sum < 8000) ? resolve() : reject();
  })
  promise 
    // .then(() => console.log('Promise resolvida'))
    .then(sum => [2, 3, 5, 10].map((numero) => sum / numero))
    .then(array => array.reduce((acc, curr) => acc + curr, 0))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))
}

fetchPromise();
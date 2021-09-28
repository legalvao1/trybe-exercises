// let arr = ['f', 'f', 'f']

// let set = new Set(arr)


// console.log([...set].length);


var lines = 'Flowers Flourish from grance'
var words = lines.split(' ');
var letters = words.map((word) => word[0].toUpperCase());
let lettersSet = new Set(letters);
const letterArray = [...lettersSet].length;

if (letterArray.lenght > 1) {
console.log('N');
} else {
console.log('Y');
} 
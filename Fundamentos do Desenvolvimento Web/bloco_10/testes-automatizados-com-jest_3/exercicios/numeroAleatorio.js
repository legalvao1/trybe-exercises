const randomNumber = () => {
    return Math.floor(Math.random() * 100);
}

const toUpperCase = (string) => string.toUpperCase();

const firstStringLetter = (string) => string.substr(0);

const concatString = (string1, string2) => `${string1} ${string2}`;

console.log(toUpperCase('bom'));

module.exports = { randomNumber, toUpperCase, firstStringLetter, concatString };
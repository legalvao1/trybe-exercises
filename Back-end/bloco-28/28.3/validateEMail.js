function validate(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d){6,}/.test(password);
}

// function validate(password) {
//   return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
// }

console.log(validate('fjd3IR9'));
console.log(validate('ghdfj32'));
console.log(validate('DSJKHD23'));
console.log(validate('dsF43'));
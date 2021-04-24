const encode = (string) => {
  return string.split('').map((letter) => {
    if (letter === 'a') {
        return 1;
    } else if (letter === 'e') {
      return 2;
    } else if(letter === 'i') {
      return 3;
    } else if (letter === 'o') {
      return 4;
    } else if (letter === 'u') {
      return 5;
    }
    return letter;
  })
}

console.log(encode('hi there!').join(''));

const decode = (string) => {
  return string.split('').map((letter) => {
    if (letter === '1') {
        return 'a';
    } if (letter === '2') {
      return 'e';
    } if(letter === '3') {
      return 'i';
    } if (letter === '4') {
      return 'o';
    } if (letter === '5') {
      return 'u';
    }
    return letter;
  })
}

console.log(decode('h3 th2r2!').join(''));
function generateHashtag (str) {
  if (str) {
    const capitalize = str.split(' ').map((s) => {
      if (s !== ' ') return s.charAt(0).toUpperCase() + s.slice(1);
    })
  
    const newStr =  "#" + capitalize.join('');
    return newStr.length > 140 || newStr.length <= 1 ? false : newStr
  }
  return false;
}

// console.log(generateHashtag(" Hello there thanks for trying my Kata"));
// console.log(generateHashtag("    Hello     World   "     ));
// console.log(generateHashtag(""));


console.log(generateHashtag("")) //false
console.log(generateHashtag(" ".repeat(200))) //f
console.log(generateHashtag("Do We have A Hashtag"))//#DoWeHaveAHashtag
console.log(generateHashtag("Codewars"))// #Codewars
console.log(generateHashtag("Codewars Is Nice"))//#CodewarsIsNice
console.log(generateHashtag("Codewars is nice"))
console.log(generateHashtag("code" + " ".repeat(140) + "wars"))//#CodeWars
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")) //f
console.log(generateHashtag("a".repeat(140))) //f
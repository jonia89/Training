const str1 = "This website is for losers LOL!";

function disemvowel(str) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  for (let char of vowels) {
    str = str.split(char).join("");
  }
  return str;
}

console.log(disemvowel(str1));

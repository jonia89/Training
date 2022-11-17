const str1 = "Pig latin is cool";
const str2 = "This is my string";

function pigIt(str) {
  let pigLatin = [];
  str = str.split(" ").forEach((element) => {
    let pigWords = element.slice(1) + element[0] + "ay";
    
    return pigLatin.push(pigWords);
  });
  return pigLatin.join(" ")
}

console.log(pigIt(str1));
console.log(pigIt(str2));

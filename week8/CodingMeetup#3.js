var list1 = [
  {
    firstName: "Sofia",
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: "Python",
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
];

var list2 = [
  {
    firstName: "Sofia",
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: "Python",
  },
];

function isRubyComing(list) {
  let ruby = 0;
  list.forEach((list) => {
    if (list.language === "Ruby") {
      ruby++;
    }
    return ruby;
  });
  if (ruby > 0) {
    return true;
  } else if ((ruby === 0)) {
    return false;
  }
}
console.log(isRubyComing(list1));
console.log(isRubyComing(list2));

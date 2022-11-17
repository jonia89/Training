const list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "JavaScript",
  },
  {
    firstName: "Maia",
    lastName: "S.",
    country: "Tahiti",
    continent: "Oceania",
    age: 28,
    language: "JavaScript",
  },
  {
    firstName: "Shufen",
    lastName: "L.",
    country: "Taiwan",
    continent: "Asia",
    age: 35,
    language: "HTML",
  },
  {
    firstName: "Sumayah",
    lastName: "M.",
    country: "Tajikistan",
    continent: "Asia",
    age: 30,
    language: "CSS",
  },
];
const list2 = [
  {
    firstName: "Oliver",
    lastName: "Q.",
    country: "Australia",
    continent: "Oceania",
    age: 19,
    language: "HTML",
  },
  {
    firstName: "Lukas",
    lastName: "R.",
    country: "Australia",
    continent: "Oceania",
    age: 89,
    language: "HTML",
  },
];

function countDevelopers(list) {
  let total = 0;
  list.forEach((list) => {
    if (list.continent === "Europe" && list.language === "JavaScript") {
    total++   
    }
  });
  return total;
}
console.log(countDevelopers(list1))
console.log(countDevelopers(list2))


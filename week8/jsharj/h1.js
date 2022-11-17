const myArr = [2, 3, 4, 5, 6]; //=20
let total = 0;
for (let i = 0; i < myArr.length; i++);
total += myArr.reduce((a, b) => a + b);
console.log(total);

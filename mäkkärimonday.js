const orders = [
  { name: "Coca-cola", qty: 3 },
  { name: "Quarter Pounder", qty: 2 },
  { name: "Fries", qty: 4 },
];
function printAllOrders(array) {
  console.log(orders);
}
printAllOrders(orders);
console.log(`Oho! Jollakin on nälkä!`);
if (orders[2].qty > 3)
  orders.sort(function (a, b) {
    return parseFloat(b.qty) - parseFloat(a.qty);
  });
const sortedOrders = orders.sort(function (a, b) {
  return parseFloat(b.qty) - parseFloat(a.qty);
});
console.log(sortedOrders);
console.log(JSON.stringify(orders[0].name), JSON.stringify(orders[0].qty));

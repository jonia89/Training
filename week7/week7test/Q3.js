function checkPhonenumber(phoneNumber) {
  if (
    phoneNumber.startsWith("040" || "050") &&
    phoneNumber.split("-").join("").length >= 7 &&
    phoneNumber.length <= 13
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPhonenumber("0401234567")); // Pitäisi palauttaa true
console.log(checkPhonenumber("040-1234567")); // Pitäisi palauttaa true.
console.log(checkPhonenumber("666-1234567")); // Pitäisi palauttaa false.
console.log(checkPhonenumber("040-70")); // Pitäisi palauttaa false. Liian lyhyt.

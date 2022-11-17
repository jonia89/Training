// return masked string
function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4)
}
console.log(maskify(95645756787687546456))


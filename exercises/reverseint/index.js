// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let mySign = Math.sign(n);
  let strNumber = n.toString();

  return parseInt(strNumber.split("").reverse().join("")) * mySign;
}

module.exports = reverseInt;

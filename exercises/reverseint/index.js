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
  let reversed = "";
  let numberString = n.toString()

  for (let char of numberString) {
    reversed = char + reversed;
  }
  return Math.sign(n) * parseInt(reversed);
}

module.exports = reverseInt;

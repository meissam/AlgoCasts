// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let strObject = {};
  let max = 0;
  let maxChar;

  for (const char of str) {
    strObject[char] = strObject[char] + 1 || 1;
  }

  for (const key in strObject) {
    if (strObject[key] >= max) {
      max = strObject[key];
      maxChar = key;
    }
  }
  return maxChar;
}

module.exports = maxChar;

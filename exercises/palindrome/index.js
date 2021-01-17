// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let myArray = str.split('');
    let isPalindrome = true;

    for (let i = 0; i < myArray.length / 2; i++) {
            if(myArray[i] != myArray[myArray.length - (i+1)]){
            isPalindrome = false;
            break;
            }
            else{
                continue;
            }
        
    }

    return isPalindrome;
}


module.exports = palindrome;

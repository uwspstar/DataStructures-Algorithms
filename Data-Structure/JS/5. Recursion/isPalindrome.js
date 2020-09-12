/*
isPalindrome
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

*/

const isPalindrome = function (str) {
    if (str.length === 1) return true; // base case 1 has odd 
    if (str.length === 2) return str[0] === str[1]; // base case 2 has even
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
    return false;
}

function isPalindrome(str) {
    if (str.length < 2) return true;
    // let str2 = str.split('').reverse().join('');
    return str === str.split('').reverse().join('');
    //if (str !== str2) return false;
    //return true
}

function isPalindrome(str) {
    if (str.length < 2) return true;
    let str2 = str.split('').reverse().join('');
    return str === str2;
    //if (str !== str2) return false;
    //return true
}

const isPalindromeRecursive = function (str) {
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    // str.slice(beginIndex[, endIndex])
    if (str.slice(0, 1) === str.slice(-1)) return isPalindromeRecursive(str.slice(1, -1));
    return false;
}

console.log('isPalindrome', isPalindrome("abccba"));
console.log('isPalindrome', isPalindrome("abcdcba"));
console.log('isPalindrome', isPalindrome("aebccba"));
console.log('isPalindrome', isPalindrome("awesome"));
console.log('isPalindrome', isPalindrome("foobar"));
console.log('isPalindrome', isPalindrome("tacocat"));
console.log('isPalindrome', isPalindrome("amanaplanacanalpanama"));
console.log('isPalindrome', isPalindrome("amanaplanacanalpandemonium"));

console.log('isPalindromeRecursive', isPalindromeRecursive('tacocat')); // true
console.log('isPalindromeRecursive', isPalindromeRecursive('amanaplanacanalpanama'));// true
console.log('isPalindromeRecursive', isPalindromeRecursive('amanaplanacanalpandemonium')); //false

// if it is integer, without using str function, how you do it ? ( see twitter)

// meet in middle : two pointers
const isPalindrome = function (str) {
    if (str.length < 2) return true;
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}

// recursive 
const isPalindromeRecursive = function (str) {
    if (str.length < 2) return true;

    return str[0] === str[str.length - 1] ?
        isPalindromeRecursive(str.slice(1, -1)) : false;

    // cannot use arr.shift().pop() chain, for the chain method need "next"
    // arr.shift() is one item
    // arr.pop() is one item
    // A negative index can be used, indicating an offset from the end of the sequence. 
    // slice(1,-1) extracts the second element through the second-to-last element in the sequence. 
    // slice(1,-1) remove last one and first one
    // string using slice(start[,end]) only
    // arr use arr.slice(), arr.shift(), arr.pop()
}

// covert str to arr, only arr has reverse function
const isPalindromeReverse = function (str) {
    if (str.length < 2) return true;
    return str.split('').reverse().join('') === str;
}

const isPalindromeRecursive = function (str) {
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    if (str.slice(0, 1) === str.slice(-1)) return isPalindromeRecursive(str.slice(1, -1));
    return false;
}

console.log(isPalindromeRecursive('tacocat'));
console.log(isPalindromeRecursive('amanaplanacanalpanama'));
console.log(isPalindromeRecursive('amanaplanacanalpandemonium'));

// meet in middle : regular start, end 
const isPalindromeMeetInMiddle = function (str) {
    if (str.length === 1) return false;
    let mid = parseInt(str.length / 2);
    for (let i = 0; i <= mid; i++) {
        if (str[i] !== str[str.length - 1 - i]) return false;
    }
    return true;
}



console.log(isPalindromeMeetInMiddle('tacocat')); //true
console.log(isPalindromeMeetInMiddle('amanaplanacanalpanama'));//true
console.log(isPalindromeMeetInMiddle('amanaplanacanalpandemonium')); //false

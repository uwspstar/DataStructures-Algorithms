/*
//344. Reverse String
Write a function that reverses a string. The input string is given as an array of characters s.

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/
var reverseString = function (s) {
    //The input string is given as an array of characters s.
    if (s.length < 2) return s;
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        swap(s, left, right);
        left++;
        right--;
    }
    return s;
}
//Substring with Concatenation of All Words
//Ambiguous Coordinates
//Maximum Number of Vowels in a Substring of Given Length
/*
String Compression: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

At first glance, implementing this method seems fairly straightforward, but perhaps a bit tedious. We iterate through the string, copying characters to a new string and counting the repeats. At each iteration, check if the current character is the same as the next character. If not, add its compressed version to the result.

we can initialize StringBuilder to its necessary capacity up-front. Without this, StringBuilder will (behind the scenes) need to double its capacity every time it hits capacity. The capacity could be double what we ultimately need.
*/
// It's slow because string concatenation operates in O(n^2 ) time (see StringBuilder on pg 8 ).
const stringCompression = function (str) {
    if (str.length < 2) return str;

    let result = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            count++;
        } else {
            result = result + str[i] + count;
            count = 1;
        }
    }
    return result;
}
console.log(stringCompression('abc')) //a1blc1
console.log(stringCompression('aabcccccaaa')) //a2blc5a3


// cannot use use a map, because the same letter can repeat later, abbbaaa
const countLetter = function (str) {
    if (str.length < 2) return str;
    let map = new Map();
    for (let i = 0; i < str.length; i++) {
        map.has(str[i]) ?
            map.set(str[i], map.get(str[i]) + 1)
            : map.set(str[i], 1);
    }
    let result = '';
    for (let [key, val] of map.entries()) {
        result += key + val
    }
    return result;
}

console.log(countLetter('abc')) //a1blc1
console.log(countLetter('aabcccccaaa')) //a2blc5a3

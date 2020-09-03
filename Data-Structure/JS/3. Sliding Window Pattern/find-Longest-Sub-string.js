/*
https://medium.com/outco/how-to-solve-sliding-window-problems-28d67601a66

-- fast/Catchup
instead of incrementing the slow pointer up, you simply move it up the fast pointer’s location and then keep moving the fast pointer up. It sort of “jumps” to the index of the fast pointer when a certain condition is met.
// check linked list find kth last node

-- Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with "all distinct characters".

Time Complexity - O(n)

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
arr = arr.slice(start, end)
include start , not include end
*/

const findLongestSubstring = function (str) {
    if (str.length === 0) return null;

    let fast = 0;
    let maxLen = -Infinity;
    let arr = []; // order is matter, use Array is better than Set, can use Map with value index

    while (fast < str.length) {
        //'rithmschool'
        let index = arr.indexOf(str[fast]); // arr
        if (index > -1) { // find on in array 
            arr = arr.slice(index + 1, fast); // slice from the find index, remove the one found and the item before it.
        }

        arr.push(str[fast]); // add the found item
        maxLen = Math.max(maxLen, arr.length);

        fast++;
    }

    return maxLen === -Infinity ? 0 : maxLen;
}
 
function findLongestSubstring1(str) {
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1; // add the char position ,such as {"r" : 1, "h" : 2}
    }
    return longest;
}

console.log('findLongestSubstring', findLongestSubstring('rithmschool')); // 7
console.log('findLongestSubstring', findLongestSubstring('')); // 0
console.log('findLongestSubstring', findLongestSubstring('thisisawesome'));// 6
console.log('findLongestSubstring', findLongestSubstring('thecatinthehat')); // 7
console.log('findLongestSubstring1', findLongestSubstring('bbbbbb')); // 1
console.log('findLongestSubstring1', findLongestSubstring('longestsubstring')); // 8
console.log('findLongestSubstring1', findLongestSubstring('thisishowwedoit')); // 6
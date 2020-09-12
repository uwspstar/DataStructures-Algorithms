
const findLongestSubstring = function (str) {
    if (str.length === 0) return 0

    let fast = 0;
    let maxLen = -Infinity;
    let arr = []; // order is matter, use Array is better than Set

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

console.log('findLongestSubstring', findLongestSubstring('rithmschool')) // 7

console.log('findLongestSubstring', findLongestSubstring('')) // 0
console.log('findLongestSubstring', findLongestSubstring('thisisawesome')) // 6
console.log('findLongestSubstring', findLongestSubstring('thecatinthehat')) // 7
console.log('findLongestSubstring', findLongestSubstring('bbbbbb')) // 1
console.log('findLongestSubstring', findLongestSubstring('longestsubstring')) // 8
console.log('findLongestSubstring', findLongestSubstring('thisishowwedoit')) // 6
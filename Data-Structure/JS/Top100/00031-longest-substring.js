//brute force
//abccabb
//Time : O(N^2)
//Space : O(N)
const lengthOfLongestSubstring = str => {
    if (str.length <= 1) return str.length;
    let longest = 0;
    for (let left = 0; left < str.length; left++) {
        let seenChars = {};
        let currentLength = 0;
        for (let right = left; right < str.length; right++) {
            const currentChar = str[right];
            if (!seenChars[currentChar]) {
                currentLength++;
                seenChars[currentChar] = true;
                longest = Math.max(longest, currentLength);
            } else break;
        }
    }
    return longest;
}

console.log('lengthOfLongestSubstring', lengthOfLongestSubstring('abccabb'));//3
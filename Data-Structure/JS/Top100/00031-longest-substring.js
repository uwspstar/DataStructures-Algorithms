//https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22188568#overview

//optimize
//slide window
//abccabb
//Time : O(N)
//Space : O(N)

const lengthOfLongestSubstring = str => {
    if (str.length <= 1) return str.length;
    let longest = 0;
    let left = 0;
    let right = 0;
    let seenChars = new Map();
    while (right < str.length) {
        const currentChar = str[right];
        const preSeenChar = seenChars.get(currentChar);

        if (preSeenChar >= left) {
            left = preSeenChar + 1; // move the left to the pre seen char position
        }

        seenChars.set(currentChar, right);

        longest = Math.max(longest, right - left + 1);

        right++;
    }
    return longest;
}

console.log('lengthOfLongestSubstring', lengthOfLongestSubstring('abccabb'));//3




//brute force
//two pointers
//abccabb
//Time : O(N^2)
//Space : O(N)
const lengthOfLongestSubstring_b = str => {
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

console.log('lengthOfLongestSubstring_b', lengthOfLongestSubstring_b('abccabb'));//3
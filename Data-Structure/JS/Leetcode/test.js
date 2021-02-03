var longestPalindrome = function(str) {
    if (str.length < 2) return str;
    const isPalindrome = str => {
        if (str.length < 2) return true;
        let left = 0;
        let right = str.length - 1;
        while(left < right) {
            if (str[left]!== str[right]) return false;
            left++;
            right--;
        }
        return true;
    }
    let result = '';
    let max = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = i+1; j < str.length; j++) {
            let sub = str.slice(i, j);
            if (isPalindrome(sub) && sub.length > max) {
                result = str.slice(i, j);
                max = Math.max(max, result.length);
            }
        }
    }
    return result;
};

console.log(longestPalindrome("c")) //c
console.log(longestPalindrome("bb")) //bb
console.log(longestPalindrome("cbbd")) //bb
console.log(longestPalindrome("racecar")) //racecar
console.log(longestPalindrome("babad")) //bab
console.log(longestPalindrome("babab")) //babab
console.log(longestPalindrome("ababbad")) //abba
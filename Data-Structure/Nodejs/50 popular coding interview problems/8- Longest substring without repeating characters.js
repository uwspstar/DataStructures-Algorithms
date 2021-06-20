/*
Given a string str made of alphabetical letters only, create a function that returns the length of the longest substring without repeating characters.

Example 1:
Input: str = "abcdbeghef" Output: 6
Explanation: the longest substring without repeating characters is "cdbegh", its length is 6

Example 2:
Input: str = "aaaaa" Output: 1
Explanation: the longest substring without repeating characters is "a", its length is 1

Example 3: Input: str = "eddy" Output: 2
Explanation: the longest substring without repeating characters is "ed" (or "dy"), its length is 2
*/
// 26 lowercase letters
{
    const longestSubstringWithoutRepeating = str => {
        if (str.length < 2) return str.length;
        
        let maxLen = 0;
        let map = new Map();
        let fast = 0;
        let slow = 0;
        while (fast < str.length) {
            let key = str[fast];
            let val = map.get(key);
            //abcdbeghef
            //  s f
            if (slow <= val) {
                slow = val + 1;
            }  
            map.set(key, fast);
            maxLen = Math.max(maxLen, fast - slow + 1)
            fast++;
        }
        return maxLen;
    }
    console.log(longestSubstringWithoutRepeating('abcdbeghef'))
}
// longestSubString
{
    const longestSubString = str => {
        if (str.length === 0) return 0;
        if (str.length === 1) return 1;
        let maxLen = 0;
        let map = new Map();
        let fast = 0;
        let slow = 0;
        while (fast < str.length) {
            let key = str[fast];
            let value = map.get(key);
            if (value >= slow) {
                slow = value + 1;
            }
            map.set(key, fast);
            maxLen = Math.max(maxLen, fast - slow + 1);
            fast++;
        }
        return maxLen;
    }
    console.log('10-1: longestSubString', JSON.stringify(longestSubString('asdfadsfasavcbdferes'))); // 9
    console.log('10-2: longestSubString', JSON.stringify(longestSubString('asdfads'))); // 4
    console.log('10-3: longestSubString', longestSubString('au'));
}
{
    // By using two pointers technique:

    // Time complexity: O(n)
    // Space complexity: O(1)

    function longestSubstringWithoutRepeating(str) {
        let maxLength = 0;
        let start = 0;
        let indexes = [...Array(128)].map(x => -1);
        for (let i = 0; i < str.length; i++) {
            if (indexes[str.charCodeAt(i)] >= start)
                start = indexes[str.charCodeAt(i)] + 1;
            indexes[str.charCodeAt(i)] = i;
            maxLength = Math.max(maxLength, i - start + 1);
        }
        return maxLength;
    }
}
{
    // Brute force solution:

    // Time complexity: O(n³)
    // Space complexity: O(n)

    function withoutRepeating(str) {
        let visited = [...Array(128)].map(x => false);
        for (let i = 0; i < str.length; i++) {
            if (visited[str.charCodeAt(i)]) return false;
            else visited[str.charCodeAt(i)] = true;
        }
        return true;
    }

    function longestSubstringWithoutRepeating(str) {
        let maxLength = 0;
        for (let i = 0; i < str.length; i++) {
            for (let j = i; j < str.length; j++) {
                let substr = str.substring(i, j + 1);
                if (withoutRepeating(substr) && substr.length > maxLength)
                    maxLength = substr.length;
            }
        }
        return maxLength;
    }
}
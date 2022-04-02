{
    var lengthOfLongestSubstring = function (s) {
        if (s.length < 2) return s.length;
        let maxLen = 0;
        let map = new Map();
        let fast = 0;
        let slow = 0;
        //"a b c a b c b b"
        //   s->
        //   v     f
        while (fast < s.length) {
            let key = s[fast];
            let val = map.get(key);
            if (val >= slow) {
                slow = val + 1;
            }
            maxLen = Math.max(maxLen, fast - slow + 1);
            map.set(key, fast)
            fast++;
        }

        return maxLen;
    };
}
{
    // https://leetcode.com/problems/longest-substring-without-repeating-characters/
    // Array.prototype.slice()
    // The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

    var lengthOfLongestSubstring = function (s) {
        if (s.length < 2) return s.length;
        let window = [];;
        let ans = 0;
        // "sdabcabcbb"
        for (let i = 0; i < s.length; i++) {
            if (!window.includes(s[i])) {
                window.push(s[i]);
                ans = Math.max(ans, window.length);
            } else {
                let idx = window.indexOf(s[i]);
                window = window.slice(idx + 1); // slice is shallow copy , need to reassign back to window
                window.push(s[i]);
            }
        }
        return ans;
    };
    // Subarrays with K Different Integers (H)
    // Maximum Erasure Value (M)
    // Number of Equal Count Substrings (M)
}
{
    // https://leetcode.com/problems/longest-substring-without-repeating-characters/
    var lengthOfLongestSubstring = function (s) {
        if (s.length < 2) return s.length;
        let window = [];
        let ans = 0;
        // "sdabcabcbb"
        //     p 
        //       i
        for (let i = 0; i < s.length; i++) {
            if (!window.includes(s[i])) {
                window.push(s[i]);
                ans = Math.max(ans, window.length);
            } else {
                while (window.includes(s[i])) {
                    window.shift();
                }
                window.push(s[i]);
            }
        }
        return ans;

    };
}
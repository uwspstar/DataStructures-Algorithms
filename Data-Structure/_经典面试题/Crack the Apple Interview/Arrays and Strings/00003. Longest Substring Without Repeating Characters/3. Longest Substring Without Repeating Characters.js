// 滑动窗口, fast slow.

// https://leetcode.com/problems/longest-substring-without-repeating-characters/

{
    var lengthOfLongestSubstring = function (s) {
        let N = s.length;
        if (N < 2) return N; // important , check empty first

        let fast = 0, slow = 0, ans = 0;
        let map = new Map();
        while (fast < N) {
            let val = map.get(s[fast]);
            if (val >= slow) {
                slow = val + 1;
            }
            ans = Math.max(ans, fast - slow + 1);
            map.set(s[fast], fast);
            fast++;
        }
        return ans;
    }
}
{
    var lengthOfLongestSubstring = function (s) {
        let N = s.length;
        if (N < 2) return N; // important , check empty first

        let window = [s[0]];
        let ans = 1;

        for (let i = 1; i < N; i++) {
            console.log('win=', window, 'ans=', ans)
            while (window.indexOf(s[i]) > -1) {
                window.shift();
            }
            window.push(s[i]);
            ans = Math.max(ans, window.length);
        }
        return ans;
    }
}
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
                // enlarge window size
                window.push(s[i]);
                // window could be bigger, so calculate here
                ans = Math.max(ans, window.length);
            } else {
                // shrink window size
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

    // 当 window[c] 值大于 1 时，说明窗口中存在重复字符，不符合条件，就该移动 left 缩小窗口了。 另外，要在收缩窗口完成后更新 res，因为窗口收缩的 while 条件是存在重复元素，换句话说收缩完成后一定保证窗口中没有重复。

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
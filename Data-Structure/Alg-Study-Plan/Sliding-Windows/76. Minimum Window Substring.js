// [Hard] 76. Minimum Window Substring
/*
Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

A substring is a contiguous sequence of characters within the string.

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Input: s = "a", t = "aa" Output: ""

Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.

return the minimum window substring
*/
{
    var minWindow = function (s, t) {
        // s= "ADOBECODEBANC", t = "ABC"  // "BANC"  
        let result = '';
        let map = new Map();
        for (let c of t) {
            map.has(c) ? map.set(c, map.get(c) + 1) : map.set(c, 1);
        }

        let mapSize = map.size;
        let left = 0;
        let right = 0;

        while (right < s.length) {
            let key = s[right];

            if (map.has(key)) {
                map.set(key, map.get(key) - 1);
                if (map.get(key) === 0) {
                    mapSize = mapSize - 1;
                }
            }

            while (mapSize === 0) {
                let key = s[left];

                let tmpStr = s.substring(left, right + 1);
                if (!result || tmpStr.length < result.length) {
                    result = tmpStr;
                }

                if (map.has(key)) {
                    map.set(key, map.get(key) + 1);
                    if (map.get(key) === 1) {
                        mapSize = mapSize + 1;
                    }
                }
                left++;
            }
            right++;
        }
        return result;

    };
}
{
    const isValid = (w, t) => {
        return w.indexOf(t) >= 0;
    }
    const minWindow = (s, t) => {
        let res = '';
        let window = [];
        let t1 = t.split('').sort();
        for (let j = 0; j < s.length; j++) {
            window.push(s[j]);
            w1 = window.sort().join('')
            while (isValid(w1, t1)) {
                res = window.join('');
                window.shift();
            }
        }
        return res;
    }
}
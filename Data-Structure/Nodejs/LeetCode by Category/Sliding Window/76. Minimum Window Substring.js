//76. Minimum Window Substring
/*
Given two strings s and t of lengths m and n respectively, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".

Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.

Example 1: Input: s = "ADOBECODEBANC", t = "ABC" Output: "BANC"
Example 2: Input: s = "a", t = "a" Output: "a"
*/
{
    /**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
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
    //Substring with Concatenation of All Words
    //Smallest Range Covering Elements from K Lists
    //Minimum Window Subsequence
}
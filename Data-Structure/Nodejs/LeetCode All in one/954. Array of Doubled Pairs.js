//954. Array of Doubled Pairs
/*
Given an array of integers arr of even length, return true if and only if it is possible to reorder it such that arr[2 * i + 1] = 2 * arr[2 * i] for every 0 <= i < len(arr) / 2.

Example 1: Input: arr = [3,1,3,6] Output: false
Example 2: Input: arr = [2,1,2,6] Output: false
Example 3: Input: arr = [4,-2,2,-4] Output: true
Explanation: We can take two groups, [-2,-4] and [2,4] to form [-2,-4,2,4] or [2,4,-2,-4].
Example 4: Input: arr = [1,2,4,16,8,4] Output: false
*/

{
    var canReorderDoubled = function (arr) {

        arr.sort((a, b) => {
            if (a < 0 && b < 0) return b - a;
            return a - b;
        })

        let pair = 0;
        let map = new Map();

        for (let i = 0; i < arr.length; i++) {
            let key = arr[i];
            if (!map.has(key)) {
                if (!map.has(key * 2)) {
                    map.set(key * 2, 1);
                }
                else {
                    map.set(key * 2, map.get(key * 2) + 1);
                }
            }
            else {
                map.set(key, map.get(key) - 1);
                if (map.get(key) === 0) {
                    map.delete(key);
                }
                pair++;
            }
        }
        return pair === (arr.length >> 1);
    };

    //Number of Ways Where Square of Number Is Equal to Product of Two Numbers
    //Map of Highest Peak
    //Minimum Space Wasted From Packaging
}
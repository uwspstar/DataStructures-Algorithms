//1346. Check If N and Its Double Exist
/*
Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

More formally check if there exists two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]

Example 1:

Input: arr = [10,2,5,3] Output: true
Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.

Example 2:

Input: arr = [7,1,14,11] Output: true
Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.
Example 3:

Input: arr = [3,1,7,11] Output: false
Explanation: In this case does not exist N and M, such that N = 2 * M.
*/
//先将所有数字存入哈希表，再遍历所有的数字 xx，判断 2x 是否在哈希表中。
//注意数字 0 需要特殊考虑。可以通过计数来解决数字 0 的问题
{
    //[0,0]
    //[-2,0,10,-19,4,6,-8]
    var checkIfExist = function (arr) {
        if (arr.length < 2) return false;
        let map = new Map();
        for (let i = 0; i < arr.length; i++) {
            if (map.has(arr[i])) {
                map.set(arr[i], map.get(arr[i]) + 1);
            }
            else map.set(arr[i], 1);
        }

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 0) {
                let key = arr[i] * 2;
                if (map.has(key)) {
                    return true;
                }
            } else {
                if (map.get(arr[i]) % 2 === 0) {
                    return true;
                }
            }
        } 
        return false;
    };
    console.log(checkIfExist([-2,0,10,-19,4,6,-8]))
    console.log(checkIfExist([0,0]))
}
//Two Sum II - Input array is sorted
//Day of the Week
//Bulb Switcher III
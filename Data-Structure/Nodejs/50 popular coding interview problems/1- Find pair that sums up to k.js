/*
Given an array of integers arr and an integer k, create a boolean function that checks if there exist two elements in arr such that we get k when we add them together.

Input: arr = [4, 5, 1, -3, 6], k = 11 Output: true
Explanation: 5 + 6 is equal to 11

Input: arr = [4, 5, 1, -3, 6], k = -2 Output: true
Explanation: 1 + (-3) is equal to -2

Input: arr = [4, 5, 1, -3, 6], k = 8 Output: false
Explanation: there is no pair that sums up to 8
*/
// two for loops
// hash set
// sort, two pointers
{
    const findPair = (arr, k) => {
        let set = new Set();
        for (let i = 0; i < arr.length; i++) {
            let key  = k - arr[i];
            if (set.has(key)) {
                return true
            } else {
                set.add(arr[i]);
            }
        }
        return false;
    }
    console.log(findPair([4, 5, 1, -3, 6], 8));//false
    console.log(findPair([4, 5, 1, -3, 6], -2))//false
    console.log(findPair([4, 5, 1, -3, 6], 11))//true

}
{

}
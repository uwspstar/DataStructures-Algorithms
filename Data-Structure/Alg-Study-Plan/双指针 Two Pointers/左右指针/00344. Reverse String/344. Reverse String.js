// 344. Reverse String
/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/
{
    var reverseString = function (s) {
        //The input string is given as an array of characters s.
        if (s.length < 2) return s;
        const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
        let left = 0;
        let right = s.length - 1;
        while (left < right) {
            swap(s, left, right);
            left++;
            right--;
        }
        return s;
    }
}
{
    // s = ["h","e","l","l","o"] -> ["o","l","l","e","h"]
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    var reverseString = function (arr) {
        let left = 0, right = arr.length - 1;
        while (left < right) {
            swap(arr, left, right);
            left++;
            right--;
        }
        return arr
    };
    // Swap Adjacent in LR String (M)
    // Alert Using Same Key-Card Three or More Times in a One Hour Period (M)
    // Build Binary Expression Tree From Infix Expression (H)
}
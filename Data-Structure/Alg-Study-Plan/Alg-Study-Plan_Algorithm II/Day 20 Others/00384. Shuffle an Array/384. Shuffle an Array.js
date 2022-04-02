// 384. Shuffle an Array
/*
Given an integer array nums, design an algorithm to randomly shuffle the array. 
All permutations of the array should be equally likely as a result of the shuffling.

Implement the Solution class:

Solution(int[] nums) Initializes the object with the integer array nums.
int[] reset() Resets the array to its original configuration and returns it.
int[] shuffle() Returns a random shuffling of the array.
 

Example 1:

Input
["Solution", "shuffle", "reset", "shuffle"]
[[[1, 2, 3]], [], [], []]
Output
[null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

Explanation
Solution solution = new Solution([1, 2, 3]);
solution.shuffle();    
// Shuffle the array [1,2,3] and return its result.
// Any permutation of [1,2,3] must be equally likely to be returned. 
// Example: return [3, 1, 2]
solution.reset();      // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
solution.shuffle();    // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]
*/
{
    var Solution = function (nums) {
        this.nums = nums || [];
    };

    Solution.prototype.reset = function () {
        return this.nums;
    };

    Solution.prototype.shuffle = function () {
        // var a = this.nums; // this is wrong, looks like JS will pass by reference when inside an object
        var a = [];
        this.nums.forEach((val, key) => a[key] = val); // need to copy key value one by one

        for (var i = 0; i < a.length; i++) {
            var rand = Math.floor(Math.random() * (a.length - i)) + i; // be careful to get the floor of random
            var tmp = a[i];
            a[i] = a[rand];
            a[rand] = tmp;
        }
        return a;
    };
    // Best Meeting Point (H)
    // Keyboard Row (E)
    // Count Ways to Make Array With Product (H)
}
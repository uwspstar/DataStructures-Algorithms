/*
Given an array of integers arr that contains n+1 elements between 1 and n inclusive, create a function that returns the duplicate element (the element that appears more than once). Assume that:
- There is only one duplicate number
- The duplicate number can be repeated more than once

Input: arr = [4, 2, 1, 3, 1] Output: 1
Input: arr = [1, 4, 2, 2, 5, 2] Output: 2
*/

//The duplicate number can be repeated more than once
//sort
//hash set
//Floyd's Cycle detection algorithm : is used to detect cycles in a linked list
{
    // By using Floyd's cycle detection algorithm (tortoise and hare):

    // Time complexity: O(n)
    // Space complexity: O(1)
    //contains n+1 elements
    function findDuplicate(arr) {
        let fast = 0;
        let slow = 0;
        //[4, 2, 1, 3, 1]
        do {
            let index = arr[fast];
            slow = arr[slow];
            fast = arr[index];

            console.log('fast=',fast,'slow=',slow);

        } while (fast !== slow);

        slow = 0;

        while (fast !== slow) {
            slow = arr[slow];
            fast = arr[fast];
        }

        return slow;
    }
    console.log(findDuplicate([4, 2, 1, 3, 1])) //1
    console.log(findDuplicate([1, 4, 2, 2, 5, 2])) //2
}


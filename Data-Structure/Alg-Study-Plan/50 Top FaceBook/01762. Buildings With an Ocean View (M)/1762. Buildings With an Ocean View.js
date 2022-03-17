// 1762. Buildings With an Ocean View (M)

/*
There are n buildings in a line. You are given an integer array heights of size n that represents the heights of the buildings in the line.

The ocean is to the right of the buildings. A building has an ocean view if the building can see the ocean without obstructions. Formally, a building has an ocean view if all the buildings to its right have a smaller height.

Return a list of indices (0-indexed) of buildings that have an ocean view, sorted in increasing order.

Example 1:

Input: heights = [4,2,3,1]
Output: [0,2,3]
Explanation: Building 1 (0-indexed) does not have an ocean view because building 2 is taller.
Example 2:

Input: heights = [4,3,2,1]
Output: [0,1,2,3]
Explanation: All the buildings have an ocean view.
Example 3:

Input: heights = [1,3,2,4]
Output: [3]
Explanation: Only building 3 has an ocean view.
*/
{
    // Monotonic Stack

    // Return a list of indices (0-indexed) of buildings that have an ocean view, sorted in increasing order.

    var findBuildings = function (arr) {
        let N = arr.length;

        let stk = [0]; // save the building idx

        for (let i = 1; i < N; i++) {
            let curr = arr[i];
            // If the current building is taller, or same tall as last one, 
            // it will block the shorter building's ocean view to its left.
            // So we pop all the shorter buildings that have been added before.        
            while (curr >= arr[stk[stk.length - 1]]) {
                stk.pop();
            }
            stk.push(i);
        }

        return stk;
    };

    // Number of Visible People in a Queue
}
{
    var findBuildings = function (arr) {
        let stk = [];
        for (let i = 0; i < arr.length; i++) {
            let curr = arr[i];
            // If the current building is taller or same tall as last one, 
            // it will block the shorter building's ocean view to its left.
            // So we pop all the shorter buildings that have been added before.   
            while (stk.length > 0 && curr >= arr[stk[stk.length - 1]]) {
                stk.pop();
            }
            stk.push(i);
        }
        return stk;
    }
}
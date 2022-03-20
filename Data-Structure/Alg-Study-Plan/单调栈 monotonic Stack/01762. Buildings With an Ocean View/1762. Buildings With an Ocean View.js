// 1762. Buildings With an Ocean View
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
// Monotonic Stacks
{
    //Return a list of indices (0-indexed) of buildings that have an ocean view, sorted in increasing order.
    var findBuildings = function (arr) {
        let N = arr.length;
        let ans = [0]; // same the idx

        for (let i = 1; i < N; i++) {
            // If the current building is taller, 
            // it will block the shorter building's ocean view to its left.
            // So we pop all the shorter buildings that have been added before.
            let curr = arr[i];
            while (arr[i] >= arr[ans[ans.length - 1]]) {
                ans.pop();
            }
            ans.push(i);
        }

        return ans;
    };
}
{
    let findBuildings = function (heights) {
        let n = heights.length;
        let answer = [];

        // Monotonically decreasing stack.
        let stack = [];

        for (let current = n - 1; current >= 0; --current) {

            // If the building to the right is smaller, we can pop it.
            while (stack.length && heights[stack[stack.length - 1]] < heights[current]) {
                stack.pop();
            }

            // If the stack is empty, it means there is no building to the right 
            // that can block the view of the current building.
            if (stack.length == 0) {
                answer.push(current);
            }

            //  Push the current building in the stack.
            stack.push(current);
        }

        answer.reverse();
        return answer;
    };
}
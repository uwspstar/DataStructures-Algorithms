// 47. Permutations II

/*
Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

 

Example 1:

Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]
Example 2:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/
{
    const backtrack = (path, visited, res, nums, N) => {
        if (path.length === N) {
            res.push(path);
        } else {
            for (let i = 0; i < N; i++) {
                if (visited[i]) continue;
                if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) continue;

                visited[i] = true;
                backtrack(path.concat(nums[i]), visited, res, nums, N);
                visited[i] = false;
            }
        }
    }

    var permuteUnique = function (nums) {
        let res = [];
        let path = [];
        let N = nums.length;
        nums.sort((a, b) => a - b);
        let visited = new Array(nums.length).fill(false);
        backtrack(path, visited, res, nums, N);
        return res;
    };
    // Palindrome Permutation II (M)
    // Number of Squareful Arrays (H)
}
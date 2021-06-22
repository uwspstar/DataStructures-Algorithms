//1906. Minimum Absolute Difference Queries
/*
The minimum absolute difference of an array a is defined as the minimum value of |a[i] - a[j]|, where 0 <= i < j < a.length and a[i] != a[j]. If all elements of a are the same, the minimum absolute difference is -1.

For example, the minimum absolute difference of the array [5,2,3,7,2] is |2 - 3| = 1. Note that it is not 0 because a[i] and a[j] must be different.
You are given an integer array nums and the array queries where queries[i] = [li, ri]. For each query i, compute the minimum absolute difference of the subarray nums[li...ri] containing the elements of nums between the 0-based indices li and ri (inclusive).

Return an array ans where ans[i] is the answer to the ith query.

A subarray is a contiguous sequence of elements in an array.

The value of |x| is defined as:

x if x >= 0.
-x if x < 0.
 

Example 1:

Input: nums = [1,3,4,8], queries = [[0,1],[1,2],[2,3],[0,3]]
Output: [2,1,4,1]
Explanation: The queries are processed as follows:
- queries[0] = [0,1]: The subarray is [1,3] and the minimum absolute difference is |1-3| = 2.
- queries[1] = [1,2]: The subarray is [3,4] and the minimum absolute difference is |3-4| = 1.
- queries[2] = [2,3]: The subarray is [4,8] and the minimum absolute difference is |4-8| = 4.
- queries[3] = [0,3]: The subarray is [1,3,4,8] and the minimum absolute difference is |3-4| = 1.
Example 2:

Input: nums = [4,5,2,2,7,10], queries = [[2,3],[0,2],[0,5],[3,5]]
Output: [-1,1,1,3]
Explanation: The queries are processed as follows:
- queries[0] = [2,3]: The subarray is [2,2] and the minimum absolute difference is -1 because all the
  elements are the same.
- queries[1] = [0,2]: The subarray is [4,5,2] and the minimum absolute difference is |4-5| = 1.
- queries[2] = [0,5]: The subarray is [4,5,2,2,7,10] and the minimum absolute difference is |4-5| = 1.
- queries[3] = [3,5]: The subarray is [2,7,10] and the minimum absolute difference is |7-10| = 3.
*/

//Segment Tree
//Pre sum
/*
题目给出的值存在在1到100之间，所以可以使用计数前缀和
顾名思义，就是记录从开始到第i的位置 1到100分别出现了几次
这也意味着，我们可以用一个长为nums.length的二维数组保存每个位置为终点时之前所有数字（包括自身数字）的出现次数，
此时，我们知道了queries[i][0] - queries[i][1]之间所有数字的出现次数，
要得出answer[i] 的结果，我们只需从1-100遍历，记录存在数字之间的差绝对值的最小值即可

作者：FalseBlank
链接：https://leetcode-cn.com/problems/minimum-absolute-difference-queries/solution/java-qian-zhui-he-by-falseblank-oz02/
*/
{
    var minDifference = function (nums, queries) {

    };
}
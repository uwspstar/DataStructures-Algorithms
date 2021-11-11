/*
Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.

Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
 
Input: ratings = [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.

把所有孩子的糖果数初始化为 1; 先从左往右遍历一遍，如果右边孩子的评分比左边的高，则右边孩子的糖果数更新为左边孩子的 糖果数加 1;再从右往左遍历一遍，如果左边孩子的评分比右边的高，且左边孩子当前的糖果数 不大于右边孩子的糖果数，则左边孩子的糖果数更新为右边孩子的糖果数加 1。通过这两次遍历， 分配的糖果就可以满足题目要求了。这里的贪心策略即为，在每次遍历中，只考虑并更新相邻一 侧的大小关系。
在样例中，我们初始化糖果分配为 [1,1,1]，第一次遍历更新后的结果为 [1,1,2]，第二次遍历 更新后的结果为 [2,1,2]。

*/
{
    const candy = ratings => {

        let N = ratings.length;
        if (N < 2) return N;

        let res = [];
        for (let i = 0; i < N; i++) {
            res[i] = 1;
        }

        for (let i = 1; i < N; i++) {
            if (ratings[i - 1] < ratings[i]) {
                res[i] = res[i - 1] + 1;
            }
        }

        for (let i = N - 1; i > 0; i--) {
            if (ratings[i] < ratings[i - 1]) {
                res[i - 1] = Math.max(res[i - 1], res[i] + 1);
            }
        }
        let sum = 0
        for (let r of res) {
            sum += r;
        }
        return sum
    }

    console.log(candy([1, 0, 2])); // 5
    console.log(candy([1, 2, 2])); // 4
}
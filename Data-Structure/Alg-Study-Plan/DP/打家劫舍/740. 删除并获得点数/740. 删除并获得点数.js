// 740. 删除并获得点数
/*
给你一个整数数组 nums ，你可以对它进行一些操作。

每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。之后，你必须删除 所有 等于 nums[i] - 1 和 nums[i] + 1 的元素。

开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。


输入：nums = [3,4,2]
输出：6
解释：
删除 4 获得 4 个点数，因此 3 也被删除。
之后，删除 2 获得 2 个点数。总共获得 6 个点数。
示例 2：

输入：nums = [2,2,3,3,3,4]
输出：9
解释：
删除 3 获得 3 个点数，接着要删除两个 2 和 4 。
之后，再次删除 3 获得 3 个点数，再次删除 3 获得 3 个点数。
总共获得 9 个点数。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/delete-and-earn
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/*
方法一：动态规划
思路

根据题意，在选择了元素 xx 后，该元素以及所有等于 x-1x−1 或 x+1x+1 的元素会从数组中删去。若还有多个值为 xx 的元素，由于所有等于 x-1x−1 或 x+1x+1 的元素已经被删除，我们可以直接删除 xx 并获得其点数。因此若选择了 xx，所有等于 xx 的元素也应一同被选择，以尽可能多地获得点数。

记元素 xx 在数组中出现的次数为 c_xc 
x
​
 ，我们可以用一个数组 sum 记录数组 it{nums}nums 中所有相同元素之和，即 \textit{sum}[x]=x\cdot c_xsum[x]=x⋅c 
x
​
 。若选择了 xx，则可以获取 \textit{sum}[x]sum[x] 的点数，且无法再选择 x-1x−1 和 x+1x+1。这与「198. 打家劫舍」是一样的，在统计出 \textit{sum}sum 数组后，读者可参考「198. 打家劫舍的官方题解」中的动态规划过程计算出答案。

https://leetcode-cn.com/problems/delete-and-earn/solution/shan-chu-bing-huo-de-dian-shu-by-leetcod-x1pu/
*/
{
    var deleteAndEarn = function (nums) {
        let maxVal = 0;
        for (const val of nums) {
            maxVal = Math.max(maxVal, val);
        }
        const sum = new Array(maxVal + 1).fill(0);
        for (const val of nums) {
            sum[val] += val;
        }
        return rob(sum);
    };

    const rob = (nums) => {
        const size = nums.length;
        let first = nums[0], second = Math.max(nums[0], nums[1]);
        for (let i = 2; i < size; i++) {
            let temp = second;
            second = Math.max(first + nums[i], second);
            first = temp;
        }
        return second;
    }

    // https://leetcode-cn.com/problems/delete-and-earn/solution/shan-chu-bing-huo-de-dian-shu-by-leetcod-x1pu/

}
/*
方法二：排序 + 动态规划
注意到若 \textit{nums}nums 中不存在某个元素 xx，则选择任一小于 xx 的元素不会影响到大于 xx 的元素的选择。因此我们可以将 \textit{nums}nums 排序后，将其划分成若干连续子数组，子数组内任意相邻元素之差不超过 11。对每个子数组按照方法一的动态规划过程计算出结果，累加所有结果即为答案

https://leetcode-cn.com/problems/delete-and-earn/solution/shan-chu-bing-huo-de-dian-shu-by-leetcod-x1pu/

*/
{
    var deleteAndEarn = function (nums) {
        const rob = (nums) => {
            const size = nums.length;
            if (size === 1) {
                return nums[0];
            }

            let [first, second] = [nums[0], Math.max(nums[0], nums[1])];
            for (let i = 2; i < size; i++) {
                [first, second] = [second, Math.max(first + nums[i], second)];
            }
            return second;
        }

        const n = nums.length;
        let ans = 0;
        nums.sort((a, b) => a - b);
        total = [nums[0]];

        for (let i = 1; i < n; i++) {
            const val = nums[i];
            if (val === nums[i - 1]) {
                total[total.length - 1] += val;
            } else if (val === nums[i - 1] + 1) {
                total.push(val);
            } else {
                ans += rob(total);
                total = [val];
            }
        }
        ans += rob(total);
        return ans;
    };

    // https://leetcode-cn.com/problems/delete-and-earn/solution/shan-chu-bing-huo-de-dian-shu-by-leetcod-x1pu/

}
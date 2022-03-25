// 1029. Two City Scheduling
/*
A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.

Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.

 

Example 1:

Input: costs = [[10,20],[30,200],[400,50],[30,20]]
Output: 110
Explanation: 
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20.

The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.

因此最优的方案是，选出 price_A - price_B 最小的 NN 个人，让他们飞往 A 市，其余人飞往 B 市。

算法

按照 price_A - price_B 从小到大排序；

将前 NN 个人飞往 A 市，其余人飞往 B 市，并计算出总费用。

假定2N人都去B市，则费用为

for(int i=0; i<n; ++i) 
     sum+=price_B;
现在我们让其中的N个人不去B市，而是直接去A市。那这个费用就变成

sum = sum + price_A - price_B; //对于N个人的其中一个来说
所有的price_B累加是固定值，要让sum最小，我们只要按(price_A - price_B)排序，

这个值小的前N个人去A市，那sum就最小

先所有2n人飞b，总费用为sum；
改变其中n人的行程，那么就需要付出aCost-bCost的代价；
而最终希望的结果是sum尽可能地小，故只要aCost-bCost尽可能小即可；
对aCost-bCost进行排序，选择最小的前n个aCost-bCost，将这n个aCost-bCost加到sum即可。

https://leetcode-cn.com/problems/two-city-scheduling/solution/js-1029-by-gu-du-de-xiao-ma-xia-3om5/


https://leetcode-cn.com/problems/two-city-scheduling/solution/er-cha-shu-de-chui-xu-bian-li-by-leetcode/ 
*/
{
    var twoCitySchedCost = function (costs) {
        let n = costs.length / 2;
        let a = 0, b = 0, total = 0;
        costs.sort((a, b) => Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]));
        for (let cost of costs) {
            if (cost[0] <= cost[1] && a < n) {
                total += cost[0];
                a++;
            } else if (cost[0] >= cost[1] && b < n) {
                total += cost[1];
                b++;
            } else total += a < n ? cost[0] : cost[1];
        }
        return total;
    };

    // Compare Strings by Frequency of the Smallest Character (M)
    // Minimum Time to Type Word Using Special Typewriter (E)
    // Elements in Array After Removing and Replacing Elements (M)
}
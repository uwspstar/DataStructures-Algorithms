//[Medium] 904. Fruit Into Baskets

/*
You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick.

Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees */

/*
最长窗口模板
for(枚举选择)
    右边界
    while(不符合条件)
        左边界
    更新结果
*/
{
    var totalFruit = function (A) {
        let i = 0;
        let ans = 0;
        let window = [];
        let set = new Set();

        for (let j = 0; j < A.length; j++) {

            window.push(A[j]);
            set.add(A[j]);

            while (set.size > 2) {
                let tmp = window.shift();
                set = new Set(window);
            }
            ans = Math.max(ans, window.length);
        }
        return ans;
    }
}
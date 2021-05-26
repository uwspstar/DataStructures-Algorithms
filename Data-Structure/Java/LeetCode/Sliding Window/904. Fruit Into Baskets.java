//904. Fruit Into Baskets
/*
In a row of trees, the i-th tree produces fruit with type tree[i].

You start at any tree of your choice, then repeatedly perform the following steps:

Add one piece of fruit from this tree to your baskets.  If you cannot, stop.
Move to the next tree to the right of the current tree.  If there is no tree to the right, stop.
Note that you do not have any choice after the initial choice of starting tree: you must perform step 1, then step 2, then back to step 1, then step 2, and so on until you stop.

You have two baskets, and each basket can carry any quantity of fruit, but you want each basket to only carry one type of fruit each.

What is the total amount of fruit you can collect with this procedure?

Example 1: Input: [1,2,1] Output: 3
Explanation: We can collect [1,2,1].

Example 2: Input: [0,1,2,2] Output: 3
Explanation: We can collect [1,2,2].
If we started at the first tree, we would only collect [0, 1].

Example 3: Input: [1,2,3,2,2] Output: 4
Explanation: We can collect [2,3,2,2].
If we started at the first tree, we would only collect [1, 2].

Example 4: Input: [3,3,3,1,2,1,1,2,3,3,4] Output: 5
Explanation: We can collect [1,2,1,1,2].
If we started at the first tree or the eighth tree, we would only collect 4 fruits.
*/
//剥掉马甲该题本质就是求最多包含两个（k=2）不同字符的滑窗窗口大小。
//https://leetcode-cn.com/problems/fruit-into-baskets/solution/tao-mo-ban-hua-dong-chuang-kou-qiu-zui-c-pner/
/*
最长窗口模板
for(枚举选择)
    右边界
    while(不符合条件)
        左边界
    更新结果
*/
class Solution {
    public int totalFruit(int[] tree) {
        if (tree.length <= 2)
            return tree.length;
        int n = tree.length;
        Map<Integer, Integer> map = new HashMap<>();
        int maxLen = 0;
        int left = 0;
        for (int i = 0; i < n; i++) {
            map.put(tree[i], map.getOrDefault(tree[i], 0) + 1); // 右边界
            while (map.size() > 2) { // 不符合条件：水果种类大于2
                map.put(tree[left], map.get(tree[left]) - 1);
                if (map.get(tree[left]) == 0)
                    map.remove(tree[left]);
                left++; // 左边界
            }
            maxLen = Math.max(maxLen, i - left + 1); // 更新结果
        }
        return maxLen;
    }
}
// Substring with Concatenation of All Words
// Two Sum II - Input array is sorted
// Push Dominoes
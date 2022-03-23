// 991. Broken Calculator
/*
There is a broken calculator that has the integer startValue on its display initially. In one operation, you can:

multiply the number on display by 2, or
subtract 1 from the number on display.
Given two integers startValue and target, return the minimum number of operations needed to display target on the calculator.

 

Example 1:

Input: startValue = 2, target = 3
Output: 2
Explanation: Use double operation and then decrement operation {2 -> 4 -> 3}.
Example 2:

Input: startValue = 5, target = 8
Output: 2
Explanation: Use decrement and then double {5 -> 4 -> 8}.
Example 3:

Input: startValue = 3, target = 10
Output: 3
Explanation: Use double, decrement and double {3 -> 6 -> 5 -> 10}.
*/

// * 2, or -1
// Greedy
{
    // * 2, or -1
    // Greedy
    /*
    If say Y is even, then if we perform 2 additions and one division, we could instead perform one division and one addition for less operations [(Y+2) / 2 vs Y/2 + 1].
    
    If say Y is odd, then if we perform 3 additions and one division, we could instead perform 1 addition, 1 division, and 1 addition for less operations [(Y+3) / 2 vs (Y+1) / 2 + 1].
    */
    var brokenCalc = function (x, y) {
        let ans = 0;
        while (y > x) {
            ans++;
            if (y % 2 === 1) {
                y++
            } else {
                y = y / 2
            }
        }
        return ans + x - y;
    };
    // 2 Keys Keyboard
    // Time Complexity: O(logY).
    // Space Complexity: O(1).
}
{
    /*
    对于目标值target:
    如果其小于等于startValue，根据题意我们只能每次-1，则操作数为startValue - target；
    如果其大于startValue，我们将startValue转换为target的一半，这样通过一次倍增即可转换为target，
    具体地：
    当target为偶数：最小操作数为等同于将startValue转换为target / 2的最小操作数 加 1；
    当target为奇数：最小操作数为等同于将startValue转换为（target+1） / 2的最小操作数 加 2；
    问题转化为子问题，递归求解即可。单次target至少减半，因此时间复杂度为log_n
    */
    // https://leetcode-cn.com/problems/broken-calculator/solution/js-di-gui-by-marswiz-6yxm/
    var brokenCalc = function (startValue, target) {

        if (target <= startValue) return startValue - target;
        
        if (target % 2 === 0) return brokenCalc(startValue, target / 2) + 1;
        else return brokenCalc(startValue, (target + 1) / 2) + 2;
    };

}
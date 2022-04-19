// 633. Sum of Square Numbers
/*
Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

Example 1: Input: c = 5 Output: true
Explanation: 1 * 1 + 2 * 2 = 5

Example 2: Input: c = 3 Output: false
*/
{
    var judgeSquareSum = function (c) {
        for (let a = 0; a * a <= c; a++) {
            let val = c - (a * a);

            let b = Math.floor(Math.sqrt(val));

            if (a * a + b * b === c) {
                return true;
            }
        }
        return false;
    };
    // Magic Squares In Grid (M)
    // Number of Burgers with No Waste of Ingredients (M)
    // Next Greater Numerically Balanced Number (M)
}
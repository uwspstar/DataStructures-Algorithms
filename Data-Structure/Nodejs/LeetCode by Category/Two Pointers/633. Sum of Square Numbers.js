//633. Sum of Square Numbers
/*
Given a non-negative integer c, decide whether there're two integers a and b such that a^2 + b^2 = c.

Input: c = 5
Output: true
Explanation: 1 * 1 + 2 * 2 = 5
*/
{
    // T: O(N)
    // S: O(1)
    var judgeSquareSum = function (c) {
        for (let a = 0; a * a <= c; a++) {
            const b = Math.sqrt(c - a * a);
            if (b === parseInt(b)) {
                return true;
            }
        }
        return false;
    };
}
{
    // two Pointers
    // T: O(N)
    // S: O(1)
    var judgeSquareSum = function (c) {
        let left = 0;
        let right = Math.floor(Math.sqrt(c));
        while (left <= right) {
            const sum = left * left + right * right;
            if (sum === c) {
                return true;
            } else if (sum > c) {
                right--;
            } else {
                left++;
            }
        }
        return false;
    };
}
{
    const judgeSquareSum = c => {
        for (let a = 0; a * a < c; a++) {
            let b = Math.floor(Math.sqrt(c - a * a));
            if ((b * b + a * a) === c) {
                return true;
            }
        }
        return false;
    }
}
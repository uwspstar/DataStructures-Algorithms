//739. Daily Temperatures
/*
Given a list of daily temperatures temperatures, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures temperatures = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].
*/
{
    var dailyTemperatures = function (t) {
        //stack : previous highest temp index
        let stack = [0];
        let res = Array(t.length).fill(0);
        for (let i = 1; i < t.length; i++) {
            let curr = t[i];
            let last = stack[stack.length - 1];
            while (stack.length > 0 && curr > t[last]) {
                res[last] = i - last;
                stack.pop();
                last = stack[stack.length - 1];
            }
            stack.push(i);
        }
        return res;
    };
    //Fraction to Recurring Decimal
    //Remove Outermost Parentheses
    //Make Sum Divisible by P
}
//1137. N-th Tribonacci Number
/*
The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.

Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
 
Input: n = 25
Output: 1389537
*/
{
    //T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

    //Given n, return the value of Tn.
    // DP way

    var tribonacci = function (n) {

        if (n === 0) return 0;
        if (n === 1) return 1;
        if (n === 2) return 1;

        let res = [0, 1, 1];

        for (let i = 3; i <= n; i++) {
            res[i] = res[i - 3] + res[i - 2] + res[i - 1];
        }

        return res[n];
    };
}
{
    var cache = {
        0: 0,
        1: 1,
        2: 1
    };
    function tribonacci(n) {
        if (cache[n]) {
            return cache[n];
        }
        if (n < 0) {
            cache[n] = 0;
        } else {
            cache[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
        }
        return cache[n];
    };
}
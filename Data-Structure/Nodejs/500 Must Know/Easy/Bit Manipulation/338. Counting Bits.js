//338. Counting Bits
/*
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

Input: n = 2 Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10

Input: n = 5 Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
*/


{
    //It is very easy to come up with a solution with a runtime of O(n log n). 
    //Can you do it in linear time O(n) and possibly in a single pass?

    // DP: P(x) = P(x/2) + (x mod 2)
    var countBits = function (n) {
        let res = Array(n + 1).fill(0);
        for (let i = 1; i <= n; ++i) {
            // x / 2 is x >> 1 and x % 2 is x & 1
            res[i] = res[i >> 1] + (i & 1);
        }
        return res;
    }

    // DP: P(x) = P(x & (x−1)) + 1;
    var countBits = function (n) {
        let res = Array(n + 1).fill(0);
        for (let i = 1; i <= n; ++i) {
            // x / 2 is x >> 1 and x % 2 is x & 1
            res[i] = res[i & (i - 1)] + 1;
        }
        return res;
    }
}
{
    //Time complexity : O(nk). For each integer x, we need O(k) operations where k is the number of bits in x.

    var countBits = function (n) {
        if (n == 0) return [0];
        if (n == 1) return [0, 1];
        if (n == 2) return [0, 1, 1];

        let res = [0, 1, 1];

        const bitOneCount = (x) => {
            let count;
            for (count = 0; x != 0; ++count) {
                x &= x - 1;  //zeroing out the least significant nonzero bit
            }
            return count;
        }

        for (let i = 3; i <= n; i++) {
            res.push(bitOneCount(i));
        }
        return res;
    };
    //Largest 1-Bordered Square
    //Distribute Repeating Integers
    //Decode XORed Array
}
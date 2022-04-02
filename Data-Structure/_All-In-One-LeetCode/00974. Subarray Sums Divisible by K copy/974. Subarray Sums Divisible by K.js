//974. Subarray Sums Divisible by K
/*
Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [4,5,0,-2,-3,1], k = 5
Output: 7
Explanation: There are 7 subarrays with a sum divisible by k = 5:
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
Example 2:

Input: nums = [5], k = 9
Output: 0
*/
// https://leetcode-cn.com/problems/subarray-sums-divisible-by-k/solution/you-jian-qian-zhui-he-na-jiu-zai-ci-dai-ni-da-tong/
const subarraysDivByK = (A, K) => {
    let preSumModK = 0;
    let count = 0;
    const map = { 0: 1 };
    for (let i = 0; i < A.length; i++) {
        preSumModK = (preSumModK + A[i]) % K; // 递推式子
        if (preSumModK < 0) {
            preSumModK += K;
        }
        if (map[preSumModK]) {      // 已经存在于map
            count += map[preSumModK]; // 把对应的次数累加给count
            map[preSumModK]++;        // 并且更新出现次数，次数+1
        } else {
            map[preSumModK] = 1;      // 之前没出现过，初始化值为1
        }
    }
    return count;
};
const subarraysDivByK = (A, K) => {
    let preSumModK = 0;
    let count = 0;
    const map = new Array(K).fill(0);
    map[0] = 1;
    for (let i = 0; i < A.length; i++) {
        preSumModK = (preSumModK + A[i]) % K;
        if (preSumModK < 0) {
            preSumModK += K;
        }
        count += map[preSumModK]; // 索引对应模的结果，值对应出现次数
        map[preSumModK]++;
    }
    return count;
};

//判断子数组的和能否被 k 整除就等价于判断 (P[j] - P[i-1]) mod k == 0，根据 同余定理，只要 P[j] mod k == P[i-1]mod k，就可以保证上面的等式成立. 
//一个变量 preSumModK，将每次求出的「前缀和 mod K」，存入哈希表：
//key：前缀和 mod K
//value：这个值出现的次数
//前缀和 mod K」值恰好是 0,1,2...,K-1，正好和索引对应，所以也可以用数组去存。
//模的分配率： (a + b) mod c = (a mod c + b mod c) mod c
var subarraysDivByK = function (A, K) {
    let map = new Map();
    map.set(0, 1);

    let preSum = 0;
    let res = 0;

    for (let x of A) {
        preSum += x;
        //当前 preSum 与 K的关系，余数是几，当被除数为负数时取模结果为负数，需要纠正
        let key = (preSum % K + K) % K;
        //查询哈希表获取之前key也就是余数的次数
        if (map.has(key)) {
            res += map.get(key);
        }
        //存入哈希表当前key，也就是余数
        map.has(key) ? map.set(key, map.get(key) + 1) : map.set(key, 1);
    }
    return res;
};
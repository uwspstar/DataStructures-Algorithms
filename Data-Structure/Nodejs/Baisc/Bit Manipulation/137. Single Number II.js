//137. Single Number II
//Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.
//https://leetcode-cn.com/problems/single-number-ii/solution/shu-ju-jie-gou-he-suan-fa-kan-wan-ni-nen-v9qp/
{
    var singleNumber = function (nums) {
        let res = 0;
        for (let i = 0; i < 32; i++) {//int类型有32位，统计每一位1的个数
            //统计第i位中1的个数
            let count = 0;
            for (let j = 0; j < nums.length; j++) {
                let b = nums[j] >>> i
                count += b & 1; // ???
            }
            if (count % 3 == 1) {//如果1的个数不是3的倍数，说明那个只出现一次的数字的二进制位中在这一位是1
                res |= 1 << i;
            }
        }
        return res;
    }

}
{
    const preSum = nums => {
        const preSum = []; // 构建前缀和数组

        for (let i = 0; i < nums.length; i++) {
            const a = nums[i];
            const b = preSum[i - 1] === undefined ? 0 : preSum[i - 1];
            preSum[i] = a + b;
        }
        return preSum;
    }


    console.log(preSum([1, 1, 1, 1])) //[ 1, 2, 3, 4 ]
    console.log(preSum([1, 2, 3, 4])) // [ 1, 3, 6, 10 ]
}
{
    // 使用前缀和，可以快速获得区间和
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j <= i; j++) {
            // 计算区间和，查找到满足条件的区间和，count++
            let intervalSum;
            if (j === 0) {
                intervalSum = pre[i]
            } else if (j === i) {
                intervalSum = nums[i]
            } else {
                intervalSum = pre[i] - pre[j - 1]
            }
            if (intervalSum === k) {
                count += 1
            }
        }
    }

    return count

    作者：dyhtps
    链接：https://juejin.cn/post/6944913393627168798。
}

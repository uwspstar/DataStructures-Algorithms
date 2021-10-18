//209. Minimum Size Subarray Sum

var minSubArrayLen = function (target, A) {
    let i = 0; // 初始化慢指针 i = 0;

    let ans = Infinity; //初始化 ans;

    let sum = 0;

    for (let j = 0; j < A.length; j++) {
        // 快指针 j in 可迭代集合;
        sum += A[j]; // 更新窗口内信息;

        while (sum >= target) {
            // while (窗口内符合题意)
            ans = Math.min(ans, j - i + 1); // 更新答案;

            sum -= A[i]; // 收缩窗口;

            i++; //  慢指针移动;
        }
    }

    //返回 ans
    return ans !== Infinity ? ans : 0; // very important
};


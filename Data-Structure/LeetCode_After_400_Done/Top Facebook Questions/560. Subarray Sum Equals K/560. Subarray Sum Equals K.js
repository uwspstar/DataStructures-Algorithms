//560. Subarray Sum Equals K

const subarraySum = (nums, k) => {
    let N = nums.length;
    let map = new Map();
    let res = 0;
    let sum = 0;
    let preSum = [0];

    for (let i = 0; i < N; i++) {
        sum += nums[i]
        preSum.push(sum);
        let sum_k = sum - k;
        if (map.has(sum_k)) {
            res += map.get(sum_k);
        }
        map.has(sum) ? map.set(sum, map.get(sum) + 1) : map.set(sum, 1)

    }
    return res;
}
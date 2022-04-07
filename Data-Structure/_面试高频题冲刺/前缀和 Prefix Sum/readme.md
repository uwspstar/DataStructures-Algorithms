# 前缀和 Prefix Sum

定义 `prefixSum[i]` = 前 i 个数之和 (index from 0 to i-1)

对于 `index from i to j` 这一段 `区间的和 = prefixSum[j + 1] - prefixSum[i]`

```js
const getPrefixSum = (arr) => {
    const prefixSum = [0];
    for (let i = 0; i < arr.length; i++) {
        prefixSum[i + 1] = prefixSum[i] + arr[0];
    }
    return prefixSum;
})
```

- LintCode 265. Maximum Non-Negative `Subarray`
- LintCode 41. 42. 43. 620. 621. 722.Maximum `Subarray` (1~6)
- LintCode 45. Maximum Subarray Difference
- LintCode 1083. Maximum Sum of 3 Non-Overlapping `Subarrays`
- LintCode 1724. Maximum Sum Circular `Subarray`
- LintCode 868. 617. Maximum Average `Subarray` (1~2)
- LintCode 1567. Maximum Can Exchanged `Subarray`
- LintCode 406. Minimum Size `Subarray Sum`
- LintCode 911. Maximum Size `Subarray Sum` Equals k
- LintCode 191. Maximum Product `Subarray`
- LintCode 1073. Maximum Length of Repeated `Subarray`
- LintCode 1712. Binary `Subarrays With Sum`
- LintCode 1258. Beautiful `Subarrays`
- LintCode 1743. Bitwise ORs of `Subarrays`
- LintCode 402. 403. 753. Continuous `Subarray Sum`(1~2)
- LintCode 264. Counting Universal `Subarrays`
- LintCode 1517. Largest `subarray`
- LintCode 1809. Largest Continuous `Subarray`
- LintCode 1631. Interesting Subarray
- LintCode 1529. Triplet Subarray With Absolute Diff Less Than or Equal to Limit
- LintCode 1021. Number of `Subarrays` with Bounded Maximum
- LintCode 1139. the kth `subarray`
- LintCode 838. `subarray sum` equals k
- LintCode 139. `Subarray Sum` Closest
- LintCode 138. 404 `Subarray Sum` (1~2)
- LintCode 1075. `Subarray` Product Less Than K
- LintCode 1779. Shortest Duplicate `Subarray`
- LintCode 1507. Shortest `Subarray` with Sum at Least K
- LintCode 1157. Shortest Unsorted Continuous `Subarray`
- LintCode 1611. 1616. Shortest `subarray`(1~2)
- LintCode 1814. Sum of all `Subarrays`
- LintCode 1734. Sum of `Subarray` Minimums
- LintCode 1457. Search `Subarray`

# subarray O(n^2) subSequence(2^n)
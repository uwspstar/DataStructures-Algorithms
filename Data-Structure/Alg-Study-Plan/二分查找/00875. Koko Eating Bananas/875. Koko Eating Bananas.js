/*
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.

 

Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4
Example 2:

Input: piles = [30,11,23,4,20], h = 5
Output: 30
Example 3:

Input: piles = [30,11,23,4,20], h = 6
Output: 23
*/
{
    var minEatingSpeed = function (piles, h) {
        let l = 1
        let r = Math.max(...piles)
        let mid
        while (l < r) {
            mid = Math.floor(l + (r - l) / 2)
            if (canFinish(mid, h, piles)) {
                r = mid
            } else {
                l = mid + 1
            }
        }
        return l
    }

    // 每小时吃 k, 总数 piles, 时间总长 h
    // 一个约束条件是，当香蕉少于 k 的时候，当成 1 小时算
    function canFinish(k, h, piles) {
        // 循环每堆
        // 假设总时间为 total, 当 total 大于 h 的时候，说明吃不完
        let totalTime = 0
        for (var i = 0; i < piles.length; i++) {
            // console.log(p[i],  k)
            // 当香蕉少于 k 的时候，当成 1 小时算
            if (piles[i] <= k) {
                totalTime += 1
            } else {
                totalTime += Math.ceil(piles[i] / k)
            }
            if (totalTime > h) {
                return false
            }
        }
        return true
    }
}
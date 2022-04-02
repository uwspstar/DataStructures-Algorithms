// 347. Top K Frequent Elements
/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
*/

/*
It is intuitive to map a value to its frequency. Then our problem becomes 'to sort map entries by their values'.
Since frequency is within the range [1, n] for n is the number of elements, we could apply the idea of Bucket Sort:

we divide frequencies into n + 1 buckets, in this way, the list in buckets[i] contains elements with the same frequency i
then we go through the buckets from tail to head until we collect k elements.
*/
{
    /*
    [1,1,1,1,2,3,3, 5]
    2
    buckets= [ [ 2, 5 ], [ 3 ], [], [ 1 ], [], [], [], [] ]
    res= [ 1 ]
    res= [ 1, 3 ]
    */
    //O(n)
    var topKFrequent = function (nums, k) {
        let N = nums.length;
        let res = [];

        let buckets = [...Array(N)].map(x => []); // the frequency is the idx

        let map = new Map();
        for (let n of nums) {
            map.has(n) ? map.set(n, map.get(n) + 1) : map.set(n, 1);
        }
        // bucket idx is the map K frequent
        for (let [k, v] of map.entries()) {
            buckets[v - 1].push(k);
        }

        let i = buckets.length - 1;
        while (res.length < k) {
            if (buckets[i].length == 0) {
                i--;
            } else {
                res.push(buckets[i].pop());
            }
        }
        return res;
    };
}
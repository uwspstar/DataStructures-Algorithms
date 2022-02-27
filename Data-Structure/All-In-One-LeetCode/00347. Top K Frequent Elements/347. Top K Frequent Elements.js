//347. Top K Frequent Elements
/*
Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]

/*
It is intuitive to map a value to its frequency. Then our problem becomes 'to sort map entries by their values'.
Since frequency is within the range [1, n] for n is the number of elements, we could apply the idea of Bucket Sort:

we divide frequencies into n + 1 buckets, in this way, the list in buckets[i] contains elements with the same frequency i
then we go through the buckets from tail to head until we collect k elements.
*/
{
    var topKFrequent = function (nums, k) {
        //O(nlogn) 
        let map = new Map();
        for (let n of nums) {
            map.has(n) ? map.set(n, map.get(n) + 1) : map.set(n, 1);
        }

        let arr = [];
        for (let [key, value] of map.entries()) {
            arr.push([key, value]);
        }

        arr.sort((a, b) => b[1] - a[1]);
        arr.length = k;
        let res = [];
        arr.map(x => res.push(x[0]));



        return res;

    };
}

//Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
{
    /*
[1,1,1,1,2,3,3, 5]
2
buckets= [ [ 2, 5 ], [ 3 ], [], [ 1 ], [], [], [], [] ]
res= [ 1 ]
res= [ 1, 3 ]

*/
    var topKFrequent = function (nums, k) {
        let N = nums.length;
        let res = [];

        let buckets = [...Array(N)].map(x => []);

        let map = new Map();
        for (let n of nums) {
            map.has(n) ? map.set(n, map.get(n) + 1) : map.set(n, 1);
        }

        for (let [k, v] of map.entries()) {
            buckets[v - 1].push(k);
        }
        //console.log('buckets=',buckets); 
        let i = buckets.length - 1;
        while (res.length < k) {
            if (buckets[i].length == 0) {
                i--;
            } else {
                res.push(buckets[i].pop());
                //console.log('res=',res);
            }
        }
        return res;
    };
}
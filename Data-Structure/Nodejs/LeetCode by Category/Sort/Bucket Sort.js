//Bucket sort
/*
1,桶排序是稳定的

2,桶排序是常见排序里最快的一种,比快排还要快…大多数情况下

3,桶排序非常快,但是同时也非常耗空间,基本上是最耗空间的一种排序算法
*/
{
    const bucketSort = (arr, size = 5) => {
        const min = Math.min(...arr);
        const max = Math.max(...arr);
        const buckets = Array.from(
          { length: Math.floor((max - min) / size) + 1 },
          () => []
        );
        arr.forEach(val => {
          buckets[Math.floor((val - min) / size)].push(val);
        });
        return buckets.reduce((acc, b) => [...acc, ...b.sort((a, b) => a - b)], []);
      };
      console.log(bucketSort([6, 3, 4, 1])); // [1, 3, 4, 6] 
      console.log(bucketSort([6, 3, 4, 1,7, 8, 0, -1]));
}
{
    const bucketSort = arr => {
        if (arr.length === 0) return arr;
        let i,
            minValue = arr[0],
            maxValue = arr[0],
            bucketSize = 5;

        arr.forEach(function (currentVal) {
            if (currentVal < minValue) {
                minValue = currentVal;
            } else if (currentVal > maxValue) {
                maxValue = currentVal;
            }
        })
        let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
        let allBuckets = new Array(bucketCount);
        for (i = 0; i < allBuckets.length; i++) {
            allBuckets[i] = [];
        }

        arr.forEach(function (currentVal) {
            allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
        });
        
        arr.length = 0;
        allBuckets.forEach(function (bucket) {
            insertion(bucket);
            bucket.forEach(function (element) {
                arr.push(element)
            });
        });
        return arr;
    }
}
{
    /// <summary>
    /// 桶排序
    /// 1),已知其区间,例如[1..10],学生的分数[0...100]等
    /// 2),如果有重复的数字,则需要 List<int>数组,这里举的例子没有重复的数字
    /// </summary>
    /// <param name="unsorted">待排数组</param>
    /// <param name="maxNumber">待排数组中的最大数,如果可以提供的话</param>
    /// <returns></returns>
    /*
        static int[] bucket_sort(int[] unsorted, int maxNumber = 99)
    {
        int[] sorted = new int[maxNumber + 1];
        for (int i = 0; i < unsorted.Length; i++)
        {
            sorted[unsorted[i]] = unsorted[i];
        }
        return sorted;
    }

        static void Main(string[] args)
    {
        int[] x = { 99, 65, 24, 47, 50, 88, 33, 66, 67, 31, 18 };
        var sorted = bucket_sort(x, 99);
        for (int i = 0; i < sorted.Length; i++)
        {
            if (sorted[i] > 0)
                Console.WriteLine(sorted[i]);
        }
        Console.ReadLine();
    }
    */
}
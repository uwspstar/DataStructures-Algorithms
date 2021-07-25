//4. Median of Two Sorted Arrays
/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Input: nums1 = [1,3], nums2 = [2] Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
 
Input: nums1 = [1,2], nums2 = [3,4] Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
*/
//中位数把数组分割成了左右两部分，并且左右两部分元素个数相等。
/*
我们用 k 来表示(n1 + n2 + 1) /2  。现在的问题就变为了：如何在两个有序数组中找到前 k 个元素？

既然最终目标是求i和j的正确位置，那么只要一直坚持让j = half - i，条件1就自动满足了。

接下来无非是在[0, len1]这个范围上去找i的正确位置，这当然可以用二分查找，逐步缩小i的取值范围，直到将i逼入正确位置。

这里假设nums1的长度不如nums2长，所以在较短的数组上二分会更快些。如果nums1更长，可以在程序开始时把两个数组换一下。

另外，二分查找的停止条件自然是条件2的满足。那条件2什么时候会满足呢——当两个左段的终点均分别小于等于两个右段的起点：

left1 <= right1
left1 <= right2
left2 <= right1
left2 <= right2
第一条和第四条是废话，因为两个数组是有序的，但第二条和第三条就不一定了。

如果第二条不满足，说明left1不够小，nums1的左段不够短，i应该往左走。把i的右边界弄到i左边，就能逼着i往左走了。（与此同时，j也应该往右走了。）

如果第三条不满足，说明left2不够小，nums2的左段不够短，j应该往左走。换句话说，i应该往右走。把i的左边界弄到i右边，就能逼着i往右走了。

如果二三两条同时满足，那此时i和j的位置就是正确的分割位置了。然后再算一下left和right，按len1 + len2的奇偶性就能算出来中位数了。

O(log(min(len1, len2)))，很可以



*/
```java
{
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
    int n = nums1.length;
    int m = nums2.length;
    //因为数组是从索引0开始的，因此我们在这里必须+1，即索引(k+1)的数，才是第k个数。
    int left = (n + m + 1) / 2;
    int right = (n + m + 2) / 2;
    //将偶数和奇数的情况合并，如果是奇数，会求两次同样的 k
    return (getKth(nums1, 0, n - 1, nums2, 0, m - 1, left) + getKth(nums1, 0, n - 1, nums2, 0, m - 1, right)) * 0.5;
}
private int getKth(int[] nums1, int start1, int end1, int[] nums2, int start2, int end2, int k) {
        //因为索引和算数不同6-0=6，但是是有7个数的，因为end初始就是数组长度-1构成的。
        //最后len代表当前数组(也可能是经过递归排除后的数组)，符合当前条件的元素的个数
        int len1 = end1 - start1 + 1;
        int len2 = end2 - start2 + 1;
        //让 len1 的长度小于 len2，这样就能保证如果有数组空了，一定是 len1
        //就是如果len1长度小于len2，把getKth()中参数互换位置，即原来的len2就变成了len1，即len1，永远比len2小
        if (len1 > len2) return getKth(nums2, start2, end2, nums1, start1, end1, k);
        //如果一个数组中没有了元素，那么即从剩余数组nums2的其实start2开始加k再-1.
        //因为k代表个数，而不是索引，那么从nums2后再找k个数，那个就是start2 + k-1索引处就行了。因为还包含nums2[start2]也是一个数。因为它在上次迭代时并没有被排除
        if (len1 == 0) return nums2[start2 + k - 1];

        //如果k=1，表明最接近中位数了，即两个数组中start索引处，谁的值小，中位数就是谁(start索引之前表示经过迭代已经被排出的不合格的元素，即数组没被抛弃的逻辑上的范围是nums[start]--->nums[end])。
        if (k == 1) return Math.min(nums1[start1], nums2[start2]);

        //为了防止数组长度小于 k/2,每次比较都会从当前数组所生长度和k/2作比较，取其中的小的(如果取大的，数组就会越界)
        //然后素组如果len1小于k / 2，表示数组经过下一次遍历就会到末尾，然后后面就会在那个剩余的数组中寻找中位数
        int i = start1 + Math.min(len1, k / 2) - 1;
        int j = start2 + Math.min(len2, k / 2) - 1;

        //如果nums1[i] > nums2[j]，表示nums2数组中包含j索引，之前的元素，逻辑上全部淘汰，即下次从J+1开始。
        //而k则变为k - (j - start2 + 1)，即减去逻辑上排出的元素的个数(要加1，因为索引相减，相对于实际排除的时要少一个的)
        if (nums1[i] > nums2[j]) {
            return getKth(nums1, start1, end1, nums2, j + 1, end2, k - (j - start2 + 1));
        }
        else {
            return getKth(nums1, i + 1, end1, nums2, start2, end2, k - (i - start1 + 1));
        }
    }
}
```
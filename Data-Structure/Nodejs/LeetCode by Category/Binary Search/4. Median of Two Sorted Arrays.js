/*
4. Median of Two Sorted Arrays Hard

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1: Input: nums1 = [1,3], nums2 = [2] Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2: Input: nums1 = [1,2], nums2 = [3,4] Output: 2.50000 
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
Example 3: Input: nums1 = [0,0], nums2 = [0,0] Output: 0.00000
Example 4: Input: nums1 = [], nums2 = [1] Output: 1.00000
Example 5: Input: nums1 = [2], nums2 = [] Output: 2.00000

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

作者：hexiaozhidi
链接：https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/4-xun-zhao-liang-ge-zheng-xu-shu-zu-de-z-ribu/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/s
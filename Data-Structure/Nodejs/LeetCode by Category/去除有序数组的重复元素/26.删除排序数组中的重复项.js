//26.删除排序数组中的重复项

//原地删除，不允许我们 new 新数组，只能在原数组上操作，然后返回一个长度 

//我们知道对于数组来说，在尾部插入、删除元素是比较高效的，时间复杂度是 O(1)，但是如果在中间或者开头插入、删除元素，就会涉及数据的搬移，时间复杂度为 O(N)，效率较低。

/*
arr = [ 1, 1, 2, 2, 3, 3, ]
p = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[p]) {
        p++;
        swap(arr, i, j)
    } 
}
*/
{
    //双指针技巧 中的快慢指针
    const removeDuplicates = nums => {
        if (nums.length <  2) return nums.length;

        let slow = 0, fast = 0;

        while (fast < nums.length) {
            if (nums[fast] !== nums[slow]) {
                slow++;
                // 维护 nums[0..slow] 无重复
                nums[slow] = nums[fast];
            }
            fast++;
        }
        // 数组长度为索引 + 1
        return slow + 1;
    }
}
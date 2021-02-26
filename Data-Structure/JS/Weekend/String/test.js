{ // 删除排序数组中的重复项 : 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。*/
    // 1: ask question : is it sorted array ?
    // 2: The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
    // 3: so we cannot use nums.slice(0, slow + 1) function

    const removeDuplicates = nums => {
        if (nums.length < 2) return nums;
        let fast = 1;
        let slow = 0;
        let len = nums.length;
        nums.sort((a, b) => a - b);
        //console.log('nums', nums);
        while (fast < len) {
            if (nums[fast] !== nums[slow]) {
                slow++;
                nums[slow] = nums[fast]
            }
            fast++;
            //console.log('nums', nums);
        }
        //return nums.slice(0, slow + 1);
        nums.length = slow + 1;
        return nums;
    }

    console.log('removeDuplicates([1,1,2]) : ', JSON.stringify(removeDuplicates([1, 1, 2])))
    console.log('removeDuplicates([0,0,1,1,1,2,2,3,3,4]) : ', JSON.stringify(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])))
}
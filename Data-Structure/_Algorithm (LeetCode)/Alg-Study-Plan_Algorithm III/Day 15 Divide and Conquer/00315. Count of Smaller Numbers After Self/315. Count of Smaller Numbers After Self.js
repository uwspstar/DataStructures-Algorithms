//315. Count of Smaller Numbers After Self
/*
You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

 

Example 1:

Input: nums = [5,2,6,1]
Output: [2,1,1,0]
Explanation:
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.
*/
{
    const countSmaller = (nums) => {
        const counts = new Array(nums.length).fill(0);
        let indexedNums = new Array(nums.length); // indexedNums[i]包含元素的位置信息
        for (let i = 0; i < indexedNums.length; i++) { // 没用JS的map
            indexedNums[i] = {
                value: nums[i],
                index: i
            };
        }
        const mergeSort = (left, right) => {
            if (right - left <= 1) return indexedNums.slice(left, right);// No sort
            const pivot = (left + right) >>> 1;
            const leftPart = mergeSort(left, pivot);
            const rightPart = mergeSort(pivot, right);
            const merged = [];
            let i = 0;
            let j = 0;
            while (i < leftPart.length) { // 遍历左边部分的元素
                while (j < rightPart.length && rightPart[j].value < leftPart[i].value) {
                    // 考察右边部分的元素，遇到小于当前左边元素的，推入merged数组
                    merged.push(rightPart[j]);
                    j++; // 统计当前右边元素中，比当前左边元素小的元素个数
                }
                counts[leftPart[i].index] += j; // 在递归中累加j，统计出右边元素比它小的个数
                merged.push(leftPart[i]); // 较小的进来后，自己也进去了
                i++;                      // 考察下一个左边元素
            }
            // rightPart[j]比左边元素都大，while结束，将它和它后面的元素推入merged数组，继续递归
            merged.push(...rightPart.slice(j));
            return merged;
        };
        mergeSort(0, indexedNums.length);
        return counts;
    };

    // Count of Range Sum (H)
    // Queue Reconstruction by Height (M)
    // Reverse Pairs (H)
    // How Many Numbers Are Smaller Than the Current Number (E)
    // Count Good Triplets in an Array (H)
}
// reverseWords
{
    const reverseWords = str => {
        if (str.length < 2) return str;
        let arr = str.split(/\s+/);
        return arr.reverse().join(' ');
    }
    console.log(`result :`, reverseWords('a good   example'));
}
//removeElement
{
    const removeElement = (nums, val) => {
        if (nums.length === 0) return [];
        let fast = 0;
        let slow = 0;
        while (fast < nums.length) {
            if (nums[fast] !== val) {
                nums[slow++] = nums[fast];
            }
            fast++;
        }
        nums.length = slow;
        return nums;
    }
    console.log('removeElement', removeElement([3, 2, 2, 3], 3)); //[ 2, 2 ]
    console.log('removeElement', removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); //[ 0, 1, 3, 0, 4 ]
}
//searchInsert
{
    const searchInsert = (nums, val) => {
        if (val < nums[0]) return 0;
        if (val > nums[nums.length - 1]) return nums.length;
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            let mid = left + parseInt((right - left) / 2);
            if (val === nums[mid]) return mid;
            val > nums[mid] ? left = mid + 1 : right = mid - 1;
        }
        return right + 1;
    }
    console.log('searchInsert', searchInsert([4, 5], 3)); //0
    console.log('searchInsert', searchInsert([0, 1, 2, 4, 5], 3)); //3 
    console.log('searchInsert', searchInsert([1, 2, 3], 3));//2
    console.log('searchInsert', searchInsert([0, 1, 2, 4], 3));//3
    console.log('searchInsert', searchInsert([0, 1, 2, 4], 5));//4
}
//minSubArrayLen
{
    const minSubArrayLen = (nums, target) => {
        if (nums.length === 0) return 0;
        let minLen = nums.length + 1;
        let fast = 0;
        let slow = 0;
        let sum = 0;
        while (fast < nums.length) {
            sum += nums[fast];
            while (sum >= target) {
                minLen = Math.min(minLen, fast - slow + 1);
                if (minLen === 1) return 1;
                sum -= nums[slow++];
            }
            fast++;
        }
        return minLen > nums.length ? 0 : minLen;
    }
    console.log('minSubArrayLen-1', minSubArrayLen([1], 4)); //0
    console.log('minSubArrayLen', minSubArrayLen([1, 4, 4], 4)); //1
    console.log('minSubArrayLen', minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); //2
    console.log('minSubArrayLen', minSubArrayLen([1, 4, 4], 3)); //1
    console.log('minSubArrayLen', minSubArrayLen([1, 1, 1, 1, 1, 1, 1, 1], 11)); //0
}
// fourSum
{
    const fourSum = (arr1, arr2, arr3, arr4) => {
        let map = new Map();
        let count = 0;
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                let key = arr1[i] + arr2[j];
                let value = map.get(key);
                value ? map.set(key, value + 1) : map.set(key, 1);
            }
        }
        for (let i = 0; i < arr3.length; i++) {
            for (let j = 0; j < arr4.length; j++) {
                let key = arr3[i] + arr4[j];
                let value = map.get(-1 * key);
                value ? count += value : {};
            }
        }
        return count;
    }
    let A = [1, 2]
    let B = [-2, -1]
    let C = [-1, 2]
    let D = [0, 2]
    console.log('fourSum', fourSum(A, B, C, D)) // 2
}
// ransomNote, magazine 
{
    const canConstruct = (ransomNote, magazine) => {
        if (ransomNote.length > magazine.length) return false;
        let arr = Array(26).fill(0);
        for (let i = 0; i < magazine.length; i++) {
            let code = magazine.charCodeAt(i);
            arr[code - 97]++;
        }
        for (let i = 0; i < ransomNote.length; i++) {
            let code = ransomNote.charCodeAt(i);
            arr[code - 97]--;
            if (arr[code - 97] < 0) return false;
        }
        return true;
    }
    console.log('canConstruct', canConstruct('aa', 'ab')); //false
}
//searchInsert
//minSubArrayLen
//ransomNote, magazine
//fourSum
// 面试题11：旋转数组的最小数字
// 题目：把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
// 输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如数组
// {3, 4, 5, 1, 2} 为 {1, 2, 3, 4, 5} 的一个旋转，该数组的最小值为1。
// 思路:利用二分法，找到中间的数，然后和最左边的值进行比较，若大于最左边的数，则最左边从mid开始， 若小于最右边值，则最右边从mid开始。若左中右三值相等，则取mid前后值中较小的数。

{
    const findMin = arr => {
        if (arr.length < 2) return 0;

        let l = 0;
        let r = arr.length - 1;
        let mid = 0;
        //[3, 4, 5, 1, 2]
        while (arr[l] >= arr[r]) {
            if (r - l === 1) {
                arr[mid] = arr[r];
                break;
            }

            mid = (r + l) >> 1;

            // arr = [0, 1, 1, 1, 1] 
            //case [1, 0, 1, 1, 1], case [1, 1, 1 , 0, 1]
            if (arr[l] === arr[mid] && arr[mid] === arr[r]) {
                if (arr[l + 1] !== arr[r - 1]) {
                    mid = arr[l + 1] < arr[r - 1] ? l + 1 : r - 1;
                } else {
                    l++;
                    r--;
                }
            } else if (arr[mid] >= arr[l]) {
                l = mid;
            } else if (arr[mid] <= arr[r]) {
                r = mid;
            }
        }
        return arr[mid];
    }

    console.log('findMin 1 = ', findMin([3, 4, 5, 1, 2]));
    console.log('findMin 1 = ', findMin([2, 3, 4, 5, 1]));
    console.log('findMin 1 = ', findMin([1, 2, 3, 4, 5]));

}
{
    const findMin = (arr) => {
        if (arr.length < 2) return arr[1];
        let left = 0;
        let right = arr.length - 1;
        let mid = 0;

        //[3, 4, 5, 1, 2]
        while (arr[left] >= arr[right]) {
            if (right - left <= 1) {
                mid = right;
                break;
            }
            mid = (left + right) / 2;
            if (arr[left] === arr[mid] && arr[mid] === arr[right]) {
                if (arr[left + 1] !== arr[right - 1]) {
                    mid = arr[left + 1] < arr[right - 1] ? left + 1 : right - 1;
                } else {
                    left++;
                    right--;
                }
            } else {
                if (arr[left] <= arr[mid]) {
                    left = mid;
                } else {
                    right = mid;
                }
            }
        }
        return arr[mid];
    }
    console.log('findMin 2 = ', findMin([3, 4, 5, 1, 2]));
    console.log('findMin 2 = ', findMin([2, 3, 4, 5, 1]));
    console.log('findMin 2 = ', findMin([1, 2, 3, 4, 5]));
}

/*
本文作者:九章算法令狐冲
官方网站:www.jiuzhang.com/?utm_source=lhc-cheatsheet-v4.0
*/

/*
双指针 Two Pointers

使用条件

- 滑动窗口 (90%)
- 时间复杂度要求 O(n) (80%是双指针)
- 要求原地操作，只可以使用交换，不能使用额外空间 (80%) 
- 有子数组 subarray /子字符串 substring 的关键词 (50%) 
- 有回文 Palindrome 关键词(50%)

复杂度

时间复杂度:O(n) 时间复杂度与最内层循环主体的执行次数有关 , 与有多少重循环无关

空间复杂度:O(1) 只需要分配两个指针的额外内存
*/

// 代码模版 :  同向双指针
{
    let j = 0;
    for (let i = 0; i < n; i++) {
        // 不满足则循环到满足搭配为止
        while (j < n && i到j之间不满足条件) {
            j += 1;
        }
        if (i到j之间满足条件) {
            处理i, j这次搭配
        }
    }
}
// 代码模版 : 相向双指针(reverse) 
{
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

    const reverse = (arr, left = 0, right = arr.length - 1) => {
        if (arr.length < 2) return arr;
        while (left < right) {
            swap(arr, left, right);
            left++;
            right--;
        }

    }
}

// 代码模版 : 相向双指针(partition in quicksort)
{
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

    const partition = (arr, start = 0, end = arr.length - 1) => {
        if (start >= end) return;
        let left = start;
        let right = end;

        // key point 1: pivot is the value, not the index
        let pi = start + parseInt((end - start) / 2);
        let pivot = arr[pi];


        // key point 2: every time you compare left & right, it should be
        // left <= right not left < right
        while (left <= right) {
            while (left <= right && arr[left] < pivot) {
                left++;
            }
            while (left <= right && arr[right] > pivot) {
                right--;
            }
            if (left <= right) {
                swap(arr, left, right)
                left++;
                right--;
            }
        }
    }
    let arr = [1, 2, 8, 7, 5, 9, 6, 3, 4]
    partition(arr);
    console.log('arr=', arr);
}

// 代码模版 :  背向双指针
{
    left = position;
    right = position + 1;
    while (left >= 0 && right < length) {
        if (可以停下来了) {
            break;
        }
        left--;
        right++;
    }

}

// 代码模版 : 合并双指针 
{
    //(not js code), list can be array, or linked list, or tree nodes 
    const merge = (list1, list2) => {
        // 需要 new 一个新的 list，而不是在 list1 或者 list2 上直接改动
        let newList = [];
        let i = 0;
        let j = 0;
        while (i < list1.size() && j < list2.size()) {
            if (list1.get(i) < list2.get(j)) {
                newList.add(list1.get(i));
                i++;
            } else {
                newList.add(list2.get(j));
                j++;
            }
        }
        // 合并上下的数到 newList 里
        while (i < list1.size()) {
            newList.add(list1.get(i));
            i++;
        }
        while (i < list2.size()) {
            newList.add(list2.get(j));
            j++;
        }
        return newList;
    }
}
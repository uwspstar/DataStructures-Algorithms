// give n + 1 arr, num between 1 ~ n,  找出数组中重复的数字 : cannot modify the input arr;
// T: O(NlogN) S: O(1)

{
    const countRange = (arr, length, start, end) => {
        if (arr === null) return 0;
        let count = 0;
        for (let i = 0; i < length; i++) {
            if (arr[i] >= start && arr[i] <= end) {
                count++;
            }
        }
        return count;
    }

    const findDuplicate = arr => {
        if (arr.length < 2) return -1;
        let start = 0;
        let end = arr.length - 1;

        while (start <= end) {
            let mid = (end - start) >> 1 + start;
            let count = countRange(arr, length, start, mid);
            if (end === start) {
                if (count > 1) return start;
                else break;
            }
            if (count > (mid - start + 1)) {
                end = mid;
            } else {
                start = mid + 1
            }
        }
        return -1;
    }
}
{
    //利用折半查找，递归寻找重复的元素.
    const findDuplicate = arr => {
        if (arr.length < 2) return false;

        function countRange(arr, start, end) {
            if (start > end) {
                return false;
            } else if (start === end) {
                return start;
            }
            const split = (start + end) >> 1;

            const count = arr.reduce((last, val) => {
                return last + +(val >= start && val <= split);
            }, 0);

            if (count > split - start + 1) {
                countRange(arr, start, split);
            } else {
                countRange(arr, split + 1, end);
            }
        }
        return countRange(arr, 0, arr.length);
    }
}
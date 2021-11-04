/*
// 面试题4：二维数组中的查找
// 题目：在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按
// 照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个
// 整数，判断数组中是否含有该整数。
*/
{
    // T: O(logN) S: O(1)


    const find = (arr, target) => {
        if (arr.length === 0) return false;

        let m = arr.length;
        let n = arr[0].length - 1;
        let i = 0;
        let j = n;

        while (i < m && j >= 0) {
            let val = arr[i][j];
            console.log('m=', i, 'n=', j, 'val=', val);
            if (val > target) {
                j--;
            } else if (val < target) {
                i++;
            } else return true;
        }

        return false;
    }

    let arr = [
        [1, 2, 8, 9],
        [2, 4, 9, 12],
        [4, 7, 10, 13],
        [6, 8, 11, 15]
    ]
    
    console.log(find([], 7)); //true
    console.log(find(arr, 1)); //true
    console.log(find(arr, 15)); //true
    console.log(find(arr, 7)); //true
    console.log(find(arr, 0)); // false
    console.log(find(arr, 16)); // false
    console.log(find(arr, 3)); // false
}

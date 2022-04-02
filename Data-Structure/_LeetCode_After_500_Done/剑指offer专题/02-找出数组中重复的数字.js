//找出数组中重复的数字

//3.在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完 成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

//思路:从右上角或左下角开始找，逐行删除，或者用二分法查找

// T: O(N) S: O(1)
{
    //传统方法，时间复杂度O(n)，空间复杂度O(1)。交换当前元素和当前索引对应的元素，直到两者相等。（请参考原书中的前提，数字都在0~n-1之间）

    const findDuplicate = arr => {
        if (arr.length < 2) return false;
        for (let i = 0; i < arr.length; i++) {
            while (arr[i] !== i) {
                if (arr[arr[i]] === arr[i]) return arr[i];
                let tmp = arr[arr[i]];
                arr[arr[i]] = arr[i];
                arr[i] = tmp;
            }
        }
    }
}
{
    function findDuplicate(arr) {

        if (!arr || arr.length === 0) return false;

        for (let i = 0, N = arr.length; i < N; i++) {

            while (arr[i] != i) {
                if (arr[i] === arr[arr[i]]) return arr[i];
                // swap
                [arr[i], arr[arr[i]]] = [arr[arr[i]], arr[i]];
            }
        }
    }
}
{
    // T: O(N) S: O(N)
    const findDuplicate = arr => {
        if (arr.length < 2) return false;
        const set = new Set();
        for (a of arr) {
            if (set.has(a)) {
                return a;
            } else set.add(a);
        }
    }
}

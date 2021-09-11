{
    // m : target sum
    // n : length of arr
    // t : O(n * m)
    // s : O(m)
    const canSum = (arr, target, memo = {}) => {
        if (target in memo) return memo[target];
        if (target === 0) return true;
        if (target < 0) return false;

        for (let num of arr) {
            const remainder = target - num;
            console.log(num, target, remainder);
            if (canSum(arr, remainder, memo) === true) {
                memo[target] = true;
                return true;
            };
        }
        return false;
    }
    //console.log(canSum([5, 3, 4, 7], 7)); //[ [ 3, 4 ], [ 7 ] ]
    //console.log(canSum([7, 14], 300)); //[ [ 3, 4 ], [ 7 ] ]
}
{
    const canSum = (arr, target) => {
        let path = [];
        let res = false;
        const backTracking = (remain) => {
            if (remain === 0) {
                res = true;
                return;
            } else if (remain < 0) {
                return;
            } else {
                for (let i = 0; i < arr.length; i++) {
                    path.push(arr[i]);
                    backTracking(remain - arr[i]);
                    path.pop();
                }
            }
        }
        backTracking(target);
        return res;
    }

    console.log(canSum([4, 3], 700));
    console.log(canSum([2, 3], 7));
    console.log(canSum([5, 3, 4, 7], 7));
}
{
    const canSum = (arr, target) => {
        let res = [];
        let path = [];
        const backTracking = (remain) => {
            if (remain === 0) {
                res.push([...path]);
                return;
            } else if (remain < 0) {
                return;
            } else {
                for (let i = 0; i < arr.length; i++) {
                    path.push(arr[i]);
                    backTracking(remain - arr[i]);
                    path.pop()
                }
            }
        }
        backTracking(target);
        return res;
    }
    //console.log(canSum([2, 3], 7));
    //console.log(canSum([5, 3, 4, 7], 7));
}
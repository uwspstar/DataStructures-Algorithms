// think about two sum, three sum, any element sum

{
    const canSum = (arr, target) => {
        let res = [];
        let path = [];
        const backTracking = (startIndex, remain) => {
            if (remain === 0) {
                res.push([...path]);
                return;
            } else if (remain < 0) {
                return;
            } else {
                for (let i = startIndex; i <= arr.length; i++) {
                    path.push(arr[i]);
                    backTracking(i + 1, remain - arr[i]);
                    path.pop()
                }
            }
        }
        backTracking(0, target);
        return res;
    }
    console.log(canSum([5, 3, 4, 7], 7)); //[ [ 3, 4 ], [ 7 ] ]
}
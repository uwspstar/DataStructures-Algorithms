{
    const howSum = (arr, target) => {
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
    console.log(howSum([5, 3, 4, 7], 7));
}
{
    const howSum = (arr, target) => {
        let path = [];
        let res = false;
        const backTracking = (startIndex, remain) => {
            if (remain === 0) {
                res = true;
                return;
            } else if (remain < 0) {
                return;
            } else {
                for (let i = startIndex; i <= arr.length; i++) {
                    path.push(arr[i]);
                    backTracking(i + 1, remain - arr[i]);
                    path.pop();
                }
            }
        }
        backTracking(0, target);
        return res;
    }

    //console.log(canSum([4, 3], 700));
    console.log(howSum([2, 3], 7));
    console.log(howSum([5, 3, 4, 7], 7));
}
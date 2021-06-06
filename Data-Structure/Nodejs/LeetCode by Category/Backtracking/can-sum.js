// think about two sum, three sum, any element sum
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
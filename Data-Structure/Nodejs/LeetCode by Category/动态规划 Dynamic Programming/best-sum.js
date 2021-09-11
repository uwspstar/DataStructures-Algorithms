{
    const bestSum = (arr, target) => {
        let path = [];
        let bestRes = []; // the shortest
        const backTracking = (startIndex, remain) => {
            if (remain === 0) {
                if (bestRes.length === 0) {
                    bestRes = [...path];
                } else if (bestRes.length > path.length) {
                    bestRes = [...path]
                }
                return;
            } else if (remain < 0) {
                return;
            } else {
                for (let i = startIndex; i < arr.length; i++) {
                    path.push(arr[i]);
                    backTracking(i + 1, remain - arr[i]);
                    path.pop()
                }
            }
        }
        backTracking(0, target);
        return bestRes;
    }
    console.log(bestSum([5, 3, 4, 7], 7));
}
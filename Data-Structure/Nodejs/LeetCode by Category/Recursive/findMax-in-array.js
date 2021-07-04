{
    const findMax = (arr, i = 0, resMax = -Infinity) => {
        if (arr.length === 0) return 0;
        if (i >= arr.length) return resMax;
        if (resMax < arr[i]) {
            resMax = arr[i];
        }
        i++;
        return findMax(arr, i, resMax);
        
    }
    console.log('recursive:',findMax([1, 2, 3, 4]));
}
{
    const findMax = arr => {
        if (arr.length === 0) return 0;
        let i = 0;
        let resMax = -Infinity;
        while (i < arr.length) {
            if (resMax < arr[i]) {
                resMax = arr[i];
            }
            i++;
        }
        return resMax;
    }
    console.log('iterator:',findMax([1, 2, 3, 4]));
}
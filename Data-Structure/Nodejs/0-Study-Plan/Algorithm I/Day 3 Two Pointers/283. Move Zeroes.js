{
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

    const moveZeroes = arr => {
        let p0 = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 0) {
                swap(arr, i, p0);
                p0++;
            }
        }
    }
}
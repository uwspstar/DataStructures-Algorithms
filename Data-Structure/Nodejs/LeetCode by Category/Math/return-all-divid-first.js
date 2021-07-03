{
    let arr = [1, 2, 3, 4];
    if (arr[0] === 0) return null;
    if (arr[0] === 1) return arr;
    for (let i = 1; i < arr.length; i++) {
        arr[i] /= parseInt(arr[0]);
    }
    arr[0] = 1; // need this step
}
{
    // back track
    if (arr[0] === 0) return null;
    if (arr[0] === 1) return arr;
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i] /= parseInt(arr[0]);
    }
}
const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
const sort01 = arr => {
    if (arr.length < 2) return arr;
    let p = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            p++;
            swap(arr, i, p);
        }
    }
    return arr;
}
console.log(sort01([0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1]));

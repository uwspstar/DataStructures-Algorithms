const mergeSort = (arr1, arr2) => {
    if (arr1.length === 0) return arr2;
    if (arr2.length === 0) return arr1;

    let arr = [];
    
    while (arr1.length && arr2.length) {
        let v1 = arr1[0]; // cannot use shift() here before compare
        let v2 = arr2[0];

        if ( v1 <= v2 ) {
            arr.push(arr1.shift());
        } else {
            arr.push(arr2.shift());
        }
    }
    if (arr1.length) {
        arr.push(...arr1)
    }
    if (arr2.length) {
        arr.push(...arr2)
    }
    return arr;
}
const arr1 = [1,3,5,7];
const arr2 = [2,2,4,4,6,8]
console.log(mergeSort(arr1, arr2));
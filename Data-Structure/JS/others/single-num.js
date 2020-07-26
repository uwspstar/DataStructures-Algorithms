const singleNumber = (arr) => {
    let a = 0;
    for (let i = 0; i < arr.length; i++) {
        a ^= arr[i];
        console.log('a=', a, 'arr=', arr);
    }
    return a;
}
let arr = [1, 2, 3, 2, 1, 4];
console.log(singleNumber(arr));
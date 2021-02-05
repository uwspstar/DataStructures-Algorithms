const threeSum = arr => {
    if (arr.length < 3) return [];
    arr.sort((a, b) => a - b);
    if (arr[0] > 0) return [];
    if (arr[arr.length - 1] < 0) return [];
    let result = [];
    let i = 0;
    while (i < arr.length - 2) {
        if (arr[i] > 0) break;
        let left = i + 1;
        let right = arr.length - 1;
        while (left < right) {
            if (arr[i] * arr[right] > 0) break;
            let tmp = arr[i] + arr[left] + arr[right];
            if (tmp === 0) {
                result.push([arr[i], arr[left], arr[right]]);
            }
            if (tmp <= 0) {
                while (arr[left] === arr[++left]) { }
            } else {
                while (arr[right] === arr[--right]) { }
            };
        }
        while (arr[i] === arr[++i]) { }
    }
    return result;
}
console.log('threeSum - 2 :', threeSum([0, 0, 0, 0])) //[0,0,0]
console.log('threeSum - 8 :', threeSum([-2, 0, 1, 1, 2])) //[[-2,0,2],[-2,1,1]]
console.log('threeSum - 7 :', threeSum([-1, 0, 0, 0, 0, 1])) //[0,0,0]

console.log('threeSum - 1 :', threeSum([-1, 0, 1, 2, -1, -4])) //[[-1,-1,2],[-1,0,1]]
/*
console.log('threeSum - 2 :', threeSum([0, 0, 0, 0])) //[0,0,0]
console.log('threeSum - 3 :', threeSum([1, -1])) //[]
console.log('threeSum - 4 :', threeSum([4, 1, 2, 3])) //[]
console.log('threeSum - 5 :', threeSum([-4, -1, -2, -3])) //[]
console.log('threeSum - 6 :', threeSum([])) //[]
*/


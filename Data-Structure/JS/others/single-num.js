const singleNumber = (arr) => {
    let a = 0;
    for (let i = 0; i < arr.length; i++) {

        console.log('a=', a.toString(2), 'arr[i]=', arr[i].toString(2), ' a ^= arr[i]->', a.toString(2) ^ arr[i].toString(2));

        a ^= arr[i]; // a = a ^ arr[i];

        console.log('a=', a, 'arr=', arr, a.toString(2) ^ arr[i].toString(2));
    }
    return a;
}

let arr = [1, 2, 3, 2, 1, 4];
console.log(singleNumber(arr));

/*
a= 1 arr= [ 1, 2, 3, 2, 1, 4 ]
a= 3 arr= [ 1, 2, 3, 2, 1, 4 ]
a= 0 arr= [ 1, 2, 3, 2, 1, 4 ]
a= 2 arr= [ 1, 2, 3, 2, 1, 4 ]
a= 3 arr= [ 1, 2, 3, 2, 1, 4 ]
a= 7 arr= [ 1, 2, 3, 2, 1, 4 ]
*/
// 0000 + 0001 = 0001  -> 1
// 0001 + 0010 = 0011  -> 3
// 0011 + 0011 = 0000  -> 0
// 0000 + 0010 = 0010  -> 2
// 0010 + 0001 = 0011  -> 3
// 0010 + 0001 = 0011  -> 3
/*
https://medium.com/javascript-in-plain-english/8-tips-to-help-you-better-optimize-your-javascript-algorithms-c226871193fc

a⊕a⊕b
Explanation — If we take the XOR (⊕) of two same bits, it will return 0.
a⊕a=0
If we take the XOR of zero and some bit, it will return that bit
a⊕0=a
The expression a⊕a⊕b evaluates to
a⊕a⊕b=(a⊕a)⊕b=0⊕b=b
*/

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


[1, 2, 3, 2, 1, 4].sort((a, b) => a - b);

((a, b) => a - b)([1, 2, 3, 2, 1, 4]); //IIFE
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
/*
The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

The removed element from the array; undefined if the array is empty.

arr.shift()
*/

// string using slice(start[,end]) only
// arr use arr.slice(), arr.shift(), arr.pop()

var names = ["Andrew", "Edward", "Paul", "Chris", "John"];

while ((i = names.shift()) !== undefined) {
    console.log(i);
}
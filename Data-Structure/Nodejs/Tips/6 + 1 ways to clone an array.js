//https://stackoverflow.com/questions/3978492/fastest-way-to-duplicate-an-array-in-javascript-slice-vs-for-loop

//ES6 way? arr2 = [...arr1];
/*
loop
slice
Array.from()
concat
spread operator (FASTEST)
map A.map(function(e){return e;});
There has been a huuuge BENCHMARKS thread, providing following information:

for blink browsers slice() is the fastest method, concat() is a bit slower, and while loop is 2.4x slower.

for other browsers while loop is the fastest method, since those browsers don't have internal optimizations for slice and concat.
*/
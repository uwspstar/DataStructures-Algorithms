{ // 1
    for (var i = 0; i < n * 1000; i++) {
        for (var j = 0; j < n * 20; j++) {
            console.log(i + j);
        }
    }
}
{ // 2. 
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            for (var k = 0; k < n; k++) {
                for (var l = 0; l < 10; l++) { // O(1)
                    console.log(i + j + k + l);
                }
            }
        }
    }
}
{//3
    for (var i = 0; i < 1000; i++) { // nothing related n
        console.log("hi");
    }
}
{//4
    for (var i = 0; i < n * 10; i++) {
        console.log(n);
    }
}
{//5

    for (var i = 0; i < n; i * 2) { // * 2 means logN
        console.log(n);
    }
}
{//6
    while (true) {
        console.log(n);
    }
}
/*
1. O(n2)
There are two nested loops. Ignore the constants in front of n.
2. O(n3)
There are four nested loops, but the last loop runs only until 10.
3.
O(1)
Constant complexity. The function runs from 0 to 1000. This does not depend on n.
4.
O(n)
Linear complexity. The function runs from 0 to 10n. Constants are ignored in Big-O.
5.
O(log2n)
Logarithmic complexity. For a given n, this will operate only log2n
times because i is incremented by multiplying by 2 rather than adding 1 as in the other examples.
6.
O(∞)
Infinite loop. This function will not end.
*/
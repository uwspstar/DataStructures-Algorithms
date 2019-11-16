// Given a number N return the index value of the Fibonacci sequence, 
// where the sequence is:
// 0,  1,  1,  2,  3,  5,  8, 13, 21, 34, 55, 89, 144 ...
// [0],[1],[2],[3],[4],[5],[6]
// the pattern of the sequence is that 
// each value is the sum of the 2 previous values, 
// that means that for N=5 → 2+3

// 0,  1,  1,  2,  3,  5,  8, ...
// [0],[1],[2],[3],[4],[5],[6]
// For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){ 
   //O(n)   
   let arr = [0,1];
   for (let i = 2 ; i < n + 1; i++){
     // console.log(arr[i]);
     arr.push(arr[i-1] + arr[i-2]);
   }    
   return arr[n];  
} 

/*
function fibonacciIterative(n){
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++){
    arr.push(arr[i - 2] + arr[i -1]);
  }
 return arr[n];
}
*/

console.log(fibonacciIterative(8)); 

//my solution
function fibonacciRecursive(n) { //O(2^n)
  if(n===0) return 0;
  if(n===1) return 1;  
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2); 
}

// memo recurcive
function fib2 (n) {
  let memo = {};
  function fib_memo (n) {
    if (memo[n] != undefined) return memo[n];
    if(n < 3) return 1; 
    return memo[n] = fib_memo (n - 1) + fib_memo (n - 2);
  }
  return fib_memo (n);
}




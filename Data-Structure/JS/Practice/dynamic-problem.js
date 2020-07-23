// Dynamic Problem
// 1) recusive
// 2) Memoized Solution
// 3) Bottom-up
// 1, 1, 2, 3, 5


// 3) Bottom-up
const fibBottonUp = function (n) {

  if n < 3 return 1;
  
  let arr = [1, 1];

  for(let i = 2; i < n; i++) {
    arr[i] = arr[i-1] + arr[i-2];
  }

  return arr[n-1]; 
}

// 2) Memoized Solution
const fibMemoized = function (n) {

  let memo = [];

  let fibMemo = (n,memo) => {
    if(memo[n]!= undefined) return memo[n]; 
    if(n <= 2) return 1; 
    return memo[n] = fibMemo(n-1,memo) + fibMemo(n-2,memo);
  }

  return fibMemo(n, memo)
}

// 1) recusive
const fibRecusive = function(n) {
  if (n === 1) return 1;
  if (n === 2) return 1;

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(5)); //5
console.log(fib(10)); //55
console.log(fib(20)); //6765
console.log(fib(30)); //832040
console.log(fib(100)); //354224848179262000000 

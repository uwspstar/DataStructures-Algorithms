// By always getting the next permutation:

// Time complexity: O(n.n!)
// Space complexity: O(n.n!)

function getNextGreaterPermutation(arr){
  let i = arr.length-2;
  while(i >= 0 && arr[i] >= arr[i+1]) i--;
  if(i == -1) return arr;
  let j = arr.length-1;
  while(arr[j] <= arr[i]) j--;
  [arr[i], arr[j]] = [arr[j], arr[i]]
  arr.splice(i+1, arr.length-i, ...arr.slice(i+1).reverse())
  return arr;
}

function getPermutations(arr){
  if(arr.length < 2) return [arr];
  arr.sort((a, b) => a - b);
  let permutations = [[...arr]];
  let greatestPermutation = [...arr].reverse();
  while(JSON.stringify(arr) != JSON.stringify(greatestPermutation)){
    arr = getNextGreaterPermutation(arr);
    permutations.push([...arr]);
  }
  return permutations;
}



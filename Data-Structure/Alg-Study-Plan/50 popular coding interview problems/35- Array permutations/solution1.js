// By using recursion:

// Time complexity: O(n.n!)
// Space complexity: O(n.n!)

function getPermutations(arr){
  if(arr.length < 2){
    return [arr];
  }else{
    let permutations = [];
    for(let i = 0; i < arr.length; i++){
      if(!arr.slice(0, i).includes(arr[i])){
        let remainingElems = [...arr];
        remainingElems.splice(i, 1)
        let remainingPermutations = getPermutations(remainingElems);
        for(let permutation of remainingPermutations)
		  permutation.push(arr[i]);
          permutations.push(permutation);
      }
    }
    return permutations;
  }
}



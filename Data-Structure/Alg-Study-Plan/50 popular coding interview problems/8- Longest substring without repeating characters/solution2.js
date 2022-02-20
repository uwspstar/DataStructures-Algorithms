// By using two pointers technique:

// Time complexity: O(n)
// Space complexity: O(1)

function longestSubstringWithoutRepeating(str){
  let maxLength = 0;
  let start = 0;
  let indexes = [...Array(128)].map(x => -1);
  for(let i = 0; i < str.length; i++){
      if(indexes[str.charCodeAt(i)] >= start)
          start = indexes[str.charCodeAt(i)]+1;
      indexes[str.charCodeAt(i)] = i;
      maxLength = Math.max(maxLength, i-start+1);
  }
  return maxLength;
}



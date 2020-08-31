/*
Microsoft: Given a list of strings, find the longest common prefix between all strings.

Input ['helloworld', 'hellokitty', 'hell'] Output 'hell'

longestCommonPrefix(['helloworld', 'hellokitty', 'hell'])
*/

const longestCommonPrefix = (arr) => {
  if (arr.length === 0) return null;
  let longestCommonPrefix = arr[0][0];
  

  return longestCommonPrefix;
}

console.log('longestCommonPrefix', longestCommonPrefix(['helloworld', 'hellokitty', 'hell']));//hell
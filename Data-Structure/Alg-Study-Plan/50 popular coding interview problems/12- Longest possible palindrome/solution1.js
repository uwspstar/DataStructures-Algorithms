// Time complexity: O(n)
// Space complexity: O(1)

function longestPalindrome(str){
  let occurrences =  [...Array(128)].map(x => 0);
  for(const letter of str.split("")){
    occurrences[letter.charCodeAt(0)]++;
  }
  let length = 0;
  for(const occu of occurrences){
    length += occu % 2 == 0 ? occu : occu - 1;
  }
  if(length < str.length) length++;
  return length;
}



/*

URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. (Note: if implementing in Java, please use a character array so that you can perform this operation in place.)
EXAMPLE
Input: "Mr John Smith ", 13 Output: "Mr%20John%20Smith"
*/
const replaceSpaces = function (str, len) { 
   let spaceCount = 0;
   for (let i = 0; i < str.length; i++) {
     if(str[i] === ' ') spaceCount++;
   }
   console.log('spaceCount', spaceCount);
   let index = len + spaceCount * 2;
   console.log('index', index);
   let result = [];
   for (let i = len - 1; i >= 0; i--) {
     if (str[i] === ' ') {
       result[index - 1] = '0';
       result[index - 2] = '2';
       result[index - 3] = '%';
       index = index - 3;
     } else {
       result[index - 1] = str[i];
       index--;
     }
   }
   return result.join('');
}
console.log(replaceSpaces("Mr John Smith ", 13));// "Mr%20John%20Smith"
console.log(replaceSpaces("a b a  ", 5)); // "a%20b%20a"
console.log(replaceSpaces("dog% %2  ", 7)); // "dog%%20%2"
console.log(replaceSpaces("    ", 0)); // ""

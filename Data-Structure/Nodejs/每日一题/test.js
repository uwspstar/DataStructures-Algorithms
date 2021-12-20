
/*
You are running a classroom and suspect that some of your students are passing around the answers to multiple choice questions disguised as random strings.
Your task is to write a function that, given a list of words and a string, finds and returns the word in the list that is scrambled up inside the string, if any exists.There will be at most one matching word.The letters don't need to be in order or next to each other. The letters cannot be reused.
Example:
words = ['cat', 'baby', 'dog', 'bird', 'car', 'ax']
string1 = 'tcabnihjs'
find_embedded_word(words, string1) -> cat(the letters do not have to be in order)
string2 = 'tbcanihjs'
find_embedded_word(words, string2) -> cat(the letters do not have to be together)
string3 = 'baykkjl'
find_embedded_word(words, string3) -> None / null(the letters cannot be reused)
string4 = 'bbabylkkj'
find_embedded_word(words, string4) -> baby
string5 = 'ccc'
find_embedded_word(words, string5) -> None / null
string6 = 'breadmaking'
find_embedded_word(words, string6) -> bird
Complexity analysis variables:
W = number of words in `words`
S = maximal length of each word or string
  * /
"use strict";
const words = ["cat", "baby", "dog", "bird", "car", "ax"];
const string1 = "tcabnihjs";
const string2 = "tbcanihjs";
const string3 = "baykkjl";
const string4 = "bbabylkkj";
const string5 = "ccc";
const string6 = "breadmaking";
//key: act ; workStr : abc ...t // tcabnihjs
*/
const foundWord = (key, workStr) => {
  let i = 0;
  let j = 0;
  while (i < key.length) {
    while (j < workStr.length) {
      if (key[i] === workStr[j]) {
        i++;
        j++;
      } else j++;
    }
    if (i < key.length) return false;
  }
  return true;
}
// W = number of words in `words` :
// S = maximal length of each word or string
// t : O(W x S)
// s : O(S + W)
const findEmbeddedWord = (words, str) => {
  if (words.length === 0) return null;
  if (str.lenght === 0) return null;

  let map1 = new Map();
  for (let w of words) {
    let key1 = w.split('');
    key1.sort();
    let key = key1.join('');
    let val = w;
    map1.set(key, val); // map1 : { "act" : "cat", "abby" : "baby",...
  }

  let arr = str.split('');
  arr.sort();

  let workStr = arr.join(''); // abbb ... y// bbabylkkj
  let kyes = map1.keys(); // act , abby

  for (let key of kyes) {
    if (foundWord(key, workStr)) return map1.get(key);
  }

  return null;
}
//pass ....
//console.log(findEmbeddedWord(words,string1)); //cat
//console.log(findEmbeddedWord(words,string2)); //cat
//console.log(findEmbeddedWord(words,string3)); //null
//console.log(findEmbeddedWord(words,string4)); //baby
//console.log(findEmbeddedWord(words,string5)); //null
//console.log(findEmbeddedWord(words,string6)); //bird
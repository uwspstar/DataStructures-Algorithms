/*
Implement auto-completion. Given a large set of words (for instance 1,000,000 words) and then a single word prefix, find all words that it can complete to.
*/
//The brute force solution is to just scan through all the words and check whether they match the prefix. However, given a large set of words, this could be quite inefficient.

//1: Brute force
const autocompleteBruteForce = (arr, prefix) => {
    if (arr.length === 0) return null;
    if (prefix.length === 0) return null;

    let prefixLen = prefix.length;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < prefixLen) continue;
        if (arr[i].indexOf(prefix) === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}
//2: can we sort arr first

//3: 
//data structure into a Trie. A trie is a special type of a tree, in which each child corresponds to a letter. Using the trie, we can build up the words in a trie.
// https://medium.com/@alexanderv/tries-javascript-simple-implementation-e2a4e54e4330
// In a trie one can retrieve anything one can prefix and the most common example is to retrieve strings.
const autocomplete = (arr, prefix) => {

}
console.log('autocomplete', autocomplete(['dog', 'dark', 'cat', 'door', 'dodge'], 'do'));//['dog', 'door', 'dodge']


/*
class Node:
  def __init__(self, isWord, children):
    self.isWord = isWord
    # {'a': Node, 'b': Node, ...}
    self.children = children

class Solution:
  def build(self, words):
    trie = Node(False, {})
    for word in words:
      current = trie
      for char in word:
        if not char in current.children:
          current.children[char] = Node(False, {})
        current = current.children[char]
      current.isWord = True
    self.trie = trie

  def autocomplete(self, word):
    current = self.trie
    for char in word:
      if not char in current.children:
        return []
      current = current.children[char]

    words = []
    self.dfs(current, word, words)
    return words

  def dfs(self, node, prefix, words):
    if node.isWord:
      words.append(prefix)
    for char in node.children:
      self.dfs(node.children[char], prefix + char, words)

s = Solution()
s.build(['dog', 'dark', 'cat', 'door', 'dodge'])
print(s.autocomplete('do'))
# ['dog', 'door', 'dodge']
*/
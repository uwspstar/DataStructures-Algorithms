---
marp: true
---

- Trie, also called prefix tree, is a special form of a Nary tree
- https://www.youtube.com/watch?v=qU3SbJHb7o8
- https://learnersbucket.com/tutorials/data-structures/trie-data-structure-in-javascript/
- https://gist.github.com/tpae/72e1c54471e88b689f85ad2b3940a8f0
- https://medium.com/@alexanderv/tries-javascript-simple-implementation-e2a4e54e4330

---

# Trie 树 : N-array Tree

- 字典树、前缀树（Prefix Tree）、单词查找树 或 键树，是一种多叉树结构。
- 字典树的性质 :

  - 根节点（Root）不包含字符 dummy node，除根节点外的每一个节点都仅包含一个字符；
  - 从根节点到某一节点路径上所经过的字符连接起来，即为该节点对应的字符串；
  - 任意节点的所有子节点所包含的字符都不相同；

---

# 常用 method

1. addWord(String word) : Adds a new word
2. search(String word) : Checks if Trie has the given word.
3. searchPrefix(String prefix) : Checks if Trie has the given word.
4. remove(word): Removes the given word.

---

- A trie allows us to search for a string in O(m), where m is the number of characters in that string.

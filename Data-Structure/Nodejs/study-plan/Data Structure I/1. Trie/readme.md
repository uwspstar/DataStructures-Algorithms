---
marp: true
---

- Trie, also called prefix tree, is a special form of a Nary tree
- https://www.youtube.com/watch?v=qU3SbJHb7o8
- https://zhuanlan.zhihu.com/p/28891541
- https://learnersbucket.com/tutorials/data-structures/trie-data-structure-in-javascript/
- https://gist.github.com/tpae/72e1c54471e88b689f85ad2b3940a8f0
- https://medium.com/@alexanderv/tries-javascript-simple-implementation-e2a4e54e4330

---

# Trie 树 : N-array Tree

- 字典树、前缀树（Prefix Tree）、单词查找树 或 键树，是一种多叉树结构。
- Trie 的核心思想是空间换时间。利用字符串的公共前缀来降低查询时间的开销以达到提高效率的目的
- 通常字典树的查询时间复杂度是 O(logL)，L 是字符串的长度。所以效率还是比较高的

---

- 字典树的性质 :

  - 根节点（Root）不包含字符 dummy node，除根节点外的每一个节点都仅包含一个字符；
  - 从根节点到某一节点路径上所经过的字符连接起来，即为该节点对应的字符串；
  - 任意节点的所有子节点所包含的字符都不相同；

---

# Trie vs hash

- hash 表不支持动态查询，什么叫动态查询，当我们要查询单词 apple 时，hash 表必须等待用户把单词 apple 输入完毕才能 hash 查询。
- 对于单词查询这种，还是用字典树比较好，但也是有前提的，空间大小允许，字典树的空间相比较 hash 还是比较浪费的，毕竟 hash 可以用 bit 数组。

---

# 常用 method

1. addWord(String word) : Adds a new word
2. search(String word) : Checks if Trie has the given word.
3. searchPrefix(String prefix) : Checks if Trie has the given word.
4. remove(word): Removes the given word.

---

- A trie allows us to search for a string in O(m), where m is the number of characters in that string.

208. Implement Trie (Prefix Tree)
209. Add and Search Word - Data structure design
210. Word Search II
211. Maximum XOR of Two Numbers in an Array

//asked by Apple:
/*
You are given the root of a binary tree. You need to implement 2 functions:

1. serialize(root) which serializes the tree into a string representation
2. deserialize(s) which deserializes the string back to the original tree that it represents

For this problem, often you will be asked to design your own serialization format.

serialize(data): # 1 3 2 # # 5 # # 4 # 7 # #

#     1
#    / \
#   3   4
#  / \   \
# 2   5   7

*/

const serialize = (root) => {
    if (root === null) return '#'
    console.log(root.val);
    serialize(root.left);
    serialize(root.right);
}
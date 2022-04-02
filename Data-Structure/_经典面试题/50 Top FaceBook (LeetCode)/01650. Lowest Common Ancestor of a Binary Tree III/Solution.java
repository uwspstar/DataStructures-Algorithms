/*
// Definition for a Node.
class Node {
    public int val;
    public Node left;
    public Node right;
    public Node parent;
};
*/

class Solution {
    public Node lowestCommonAncestor(Node p, Node q) {
        // 施展链表双指针技巧
        Node a = p, b = q;
        while (a != b) {
            // a 走一步，如果走到根节点，转到 q 节点
            if (a == null)
                a = q;
            else
                a = a.parent;
            // b 走一步，如果走到根节点，转到 p 节点
            if (b == null)
                b = p;
            else
                b = b.parent;
        }
        return a;
    }
}

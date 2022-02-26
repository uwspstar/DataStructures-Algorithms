// 426. Convert Binary Search Tree to Sorted Doubly Linked List
{
    var treeToDoublyList = function (root) {
        if (root == null) return root;

        let head = null;
        let prev = null;

        const dfs = root => {
            if (root == null) return;

            dfs(root.left);

            if (head == null) head = root;

            if (prev == null) {
                prev = root;
            } else {
                prev.right = root; // doubly linked
                root.left = prev;
            }

            prev = root;

            dfs(root.right);
        }

        dfs(root);

        prev.right = head;
        head.left = prev;

        return head
    };
}
class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if root is None:
            return []
        res = []
        stk = [(root, 0)]
        while stk:
            node, cnt = stk.pop()
            if cnt == 0:
                res.append(node.val)
                stk.append((node, 1))
                if node.left:
                    stk.append((node.left, 0))
            elif cnt == 1:
                if node.right:
                    stk.append((node.right, 0))
        return res

    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if root is None:
            return []
        res = []
        stk = [(root, 0)]
        while stk:
            node, cnt = stk.pop()
            if cnt == 0:
                stk.append((node, 1))
                if node.left:
                    stk.append((node.left, 0))
            elif cnt == 1:
                res.append(node.val)
                if node.right:
                    stk.append((node.right, 0))
        return res

    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if root is None:
            return []
        res = []
        stk = [(root, 0)]

        while stk:
            node, cnt = stk.pop()
            if cnt == 0:
                stk.append((node, 1))
                if node.left:
                    stk.append((node.left, 0))
            elif cnt == 1:
                stk.append((node, 2))
                if node.right:
                    stk.append((node.right, 0))
            else: # cnt == 2
                res.append(node.val)

        return res
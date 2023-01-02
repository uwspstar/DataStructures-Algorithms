# https://www.youtube.com/watch?v=QfJsau0ItOY&list=PLot-Xpze53ldg4pN6PfzoJY7KsKcxF1jg

class TreeNode:
    def __init__(self,val = 0, left = None, right = None ) -> None:
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isBalanced(self, root) -> bool:
        def dfs(root):
            if root is None:
                return [True, 0] # return [isBalanced, height]
            left, right = dfs(root.left), dfs(root.right)
            balanced = left[0] and right[0] and abs(left[1] - right[1]) <= 1
            
            return [balanced, 1+ max(left[1],right[1])]
        
        return dfs(root)[0] # not dfs(root)


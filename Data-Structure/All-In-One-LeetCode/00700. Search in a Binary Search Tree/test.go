//700. Search in a Binary Search Tree

package main

import (
	"structures"
)

type TreeNode = structures.TreeNode

func searchBST(root *TreeNode, val int) *TreeNode {
	if root == nil {
		return nil
	}

	if root.val == val {
		return root
	} else if root.val < val {
		return searchBST(root.right, val)
	} else {
		return searchBST(root.left, val)
	}

}

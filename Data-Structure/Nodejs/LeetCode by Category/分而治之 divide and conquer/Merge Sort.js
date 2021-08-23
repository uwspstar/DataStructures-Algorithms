//mergeSort arr
//# 快速排序就是个二叉树的前序遍历，归并排序就是个二叉树的后序遍历.
{
    const mergeSortHelp = arr => {
        if (arr.length < 2) return arr;
        const merge = (left, right) => {
            if (left.length === 0) return right;
            if (right.length === 0) return left;
            let result = [];
            while (left.length && right.length) {
                left[0] < right[0]
                    ? result.push(left.shift())
                    : result.push(right.shift());
            }
            return result.concat(left, right);
        }
        const mergeSort = arr => {
            if (arr.length < 2) return arr;
            let mid = arr.length >> 1;
            let left = mergeSort(arr.slice(0, mid));
            let right = mergeSort(arr.slice(mid));
            return merge(left, right);
        }
        return mergeSort(arr);
    }
    console.log('4: mergeSortHelp', JSON.stringify(mergeSortHelp([8, 1, 2, 3, 4, 5, 6, 7])));

}
// 88. Merge Sorted Array

//mergeSort LinkedList : 21. Merge Two Sorted Lists
{

}
//mergeSort tree : 617. 合并二叉树
{
    var mergeTrees = function (root1, root2) {
        if (root1 === null) return root2;
        if (root2 === null) return root1;

        let node = new TreeNode(root1.val + root2.val);
        // left : left tree node after merge left subtrees
        let left = mergeTrees(root1.left, root2.left)
        let right = mergeTrees(root1.right, root2.right);
        node.left = left;
        node.right = right;

        return node;
    }
}
/* Merge Sorted (arr, linkedlist, tree)
88. Merge Sorted Array
21. Merge Two Sorted Lists
617. 合并二叉树 */
{
    //concept : arr
    const findMaxNum = arr => {
        if (arr.length === 1) return arr[0];

        let mid = arr.length >> 1;
        let leftHalfMax = findMaxNum(arr.slice(0, mid));
        let rightHalfMax = findMaxNum(arr.slice(mid));

        return Math.max(leftHalfMax, rightHalfMax)
    }
    let arr = [3,100,5,8,6,3,1, 9, -4];
    console.log('findMaxNum = ',findMaxNum(arr));
}
{
    //concept : tree
    const maxTreeNode = root => {
        if (root === null) return 0;
        let leftTreeMax = maxTreeNode(root.left);
        let rightTreeMax = maxTreeNode(root.right);
        return Math.max(root.val, leftTreeMax, rightTreeMax);
    }
}
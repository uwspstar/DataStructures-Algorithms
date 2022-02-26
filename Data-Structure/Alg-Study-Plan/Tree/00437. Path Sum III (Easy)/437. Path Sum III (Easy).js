// 437. Path Sum III (Easy)
{
    //递归每个节点时，需要分情况考虑:(1)如果选取该节点加入路径，则之后必须继续加入连 续节点，或停止加入节点(2)如果不选取该节点加入路径，则对其左右节点进行重新进行考虑。 因此一个方便的方法是我们创建一个辅函数，专门用来计算连续加入节点的路径。
    // 辅函数
    const pathSumStartWithRoot = (root, sum) => {
        if (root === null) return 0;

        let count = root.val == sum ? 1 : 0;

        count += pathSumStartWithRoot(root.left, sum - root.val);
        count += pathSumStartWithRoot(root.right, sum - root.val);

        return count;
    }
    const pathSum = (root, sum) => {
        if (root === null) return 0;

        return pathSumStartWithRoot(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
    }
}





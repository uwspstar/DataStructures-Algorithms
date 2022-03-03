/*
方法一：对角线迭代和翻转
思路

解决许多复杂问题的常见策略是首先解决该问题的简化问题，然后考虑从简化问题到原始问题需要做哪些修改，方法一就是这种思路。首先考虑按照逐条对角线打印元素，而不考虑翻转的情况。



在第一行最后一列的元素作为起点的对角线上，对于给定元素 [i, j][i,j]，可以向右移动一行向上移动一列沿对角线向上移动 [i - 1, j + 1][i−1,j+1]，也可以向左移动一行向下移动一列沿对角线向下移动 [i + 1, j - 1][i+1,j−1]。注意：这种移动方式仅适用于从右往左的对角线。

该问题比原始问题简单，没有考虑对角线打印顺序的情况。因此，这就是简化问题需要修改的地方。

将元素添加到最终结果数组之前，只需要翻转奇数对角线上的元素顺序即可。例如：从左边开始的第三条对角线 [3, 7, 11]，将这些元素添加到最后结果之前先翻转为 [11, 7, 3] 再添加即可。

算法

初始化数组 result，用于存储最后结果。

使用一个外层循环遍历所有的对角线。第一行和最后一列的元素都是对角线的起点。

使用一个内层 while 循环遍历对角线上的所有元素。可以计算指定对角线上的元素数量，也可以简单迭代直到索引超出范围。

因为不知道每条对角线上的元素数量，需要为每条对角线分配一个列表或动态数组。但是同样也可以通过计算得到当前对角线上的元素数量。

对于奇数编号的对角线，只需要将迭代结果翻转再加入结果数组即可。

作者：LeetCode
链接：https://leetcode-cn.com/problems/diagonal-traverse/solution/dui-jiao-xian-bian-li-by-leetcode/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/
class Solution {
    public int[] findDiagonalOrder(int[][] matrix) {
        
        // Check for empty matrices
        if (matrix == null || matrix.length == 0) {
            return new int[0];
        }
        
        // Variables to track the size of the matrix
        int N = matrix.length;
        int M = matrix[0].length;
        
        // The two arrays as explained in the algorithm
        int[] result = new int[N*M];
        int k = 0;
        ArrayList<Integer> intermediate = new ArrayList<Integer>();
        
        // We have to go over all the elements in the first
        // row and the last column to cover all possible diagonals
        for (int d = 0; d < N + M - 1; d++) {
            
            // Clear the intermediate array every time we start
            // to process another diagonal
            intermediate.clear();
            
            // We need to figure out the "head" of this diagonal
            // The elements in the first row and the last column
            // are the respective heads.
            int r = d < M ? 0 : d - M + 1;
            int c = d < M ? d : M - 1;
            
            // Iterate until one of the indices goes out of scope
            // Take note of the index math to go down the diagonal
            while (r < N && c > -1) {
                
                intermediate.add(matrix[r][c]);
                ++r;
                --c;
            }
                
            // Reverse even numbered diagonals. The
            // article says we have to reverse odd 
            // numbered articles but here, the numbering
            // is starting from 0 :P
            if (d % 2 == 0) {
                Collections.reverse(intermediate);
            }
            
            for (int i = 0; i < intermediate.size(); i++) {
                result[k++] = intermediate.get(i);
            }
        }
        return result;
    }
}

// https://leetcode-cn.com/problems/diagonal-traverse/solution/dui-jiao-xian-bian-li-by-leetcode/


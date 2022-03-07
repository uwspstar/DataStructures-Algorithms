/*
//https://www.youtube.com/watch?v=lkA2N_YAOXI

994. 腐烂的橘子
在给定的网格中，每个单元格可以有以下三个值之一：

值 0 代表空单元格；
值 1 代表新鲜橘子；
值 2 代表腐烂的橘子。

每分钟，任何与腐烂的橘子（在 4 个正方向上）相邻的新鲜橘子都会腐烂。

返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1。

输入：[[2,1,1],[1,1,0],[0,1,1]] 输出：4
*/

//graph BFS
/*
 [
    [2, 1, 0]
    [1, 2, 0]
    [0, 1, 1]
 ]

 queue : [(0, 0), (1, )]

 all rotten orange is start point

*/
{
   {
      var orangesRotting = function (grid) {
         let timeElapsed = 0;
         const queue = [];
         const rowArr = [0, -1, 1, 0];
         const colArr = [-1, 0, 0, 1];

         let r = grid.length;
         let c = grid[0].length;
         for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
               if (grid[i][j] == 2) {
                  queue.push([i, j, 0]);
               }
            }
         }

         while (queue.length) {
            const currentNode = queue.shift();
            const [i, j, val] = currentNode;
            timeElapsed = val;
            for (let k = 0; k < rowArr.length; k++) {
               let i1 = i + rowArr[k];
               let j1 = j + colArr[k];
               if (isSafe(r, c, i1, j1) && grid[i1][j1] == 1) {
                  grid[i1][j1] = 2;
                  queue.push([i1, j1, val + 1]);
               }
            }
         }

         for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
               if (grid[i][j] == 1) {
                  return -1;
               }
            }
         }

         return timeElapsed;
      };

      var isSafe = function (r, c, i, j) {
         return i >= 0 && i < r && j >= 0 && j < c;
      }
   }
}
{
   // https://leetcode.com/problems/rotting-oranges/discuss/910426/BFS-JS-Solution
   var orangesRotting = function (grid) {
      if (grid.length === 0 || grid[0].length === 0) {
         return -1;
      }
      let DIRECTIONS = [[-1, 0], [0, 1], [1, 0], [0, -1]];
      let height = grid.length, width = grid[0].length;
      let fresh = 0;
      let queue = [], depth = 0;
      // Get the number of fresh oranges at start and
      // collect starting points of BFS traversal
      for (let i = 0; i < height; i++) {
         for (let j = 0; j < width; j++) {
            if (grid[i][j] === 1) {
               fresh++;
            } else if (grid[i][j] === 2) {
               queue.push([i, j]);
            }
         }
      }
      if (fresh === 0) {
         return 0;
      }
      while (queue.length > 0) {
         let queueLen = queue.length;
         let rot = 0;
         for (let i = 0; i < queueLen; i++) {
            let [row, col] = queue.shift();
            if (grid[row][col] === 1) {
               rot++;
               grid[row][col] = 2;
            }
            for (let dir of DIRECTIONS) {
               let newRow = row + dir[0], newCol = col + dir[1];
               if (newRow >= 0 && newRow < height
                  && newCol >= 0 && newCol < width
                  && grid[newRow][newCol] === 1) {
                  queue.push([newRow, newCol]);
               }
            }
         }
         if (rot > 0) {
            fresh -= rot;
            depth++;
         }
      }
      return fresh === 0 ? depth : -1;
   };

   /*
   Solution
   
   1. Perform BFS traversal at each rotten orange simultaneously
   2. Check if there is no fresh orange at the end of traversal
   3. The depth of the traversal is equivalent to the number of minutes elapsed
   
   Time Complexity: O(m*n) where m = the number of rows, n = the number of columns
   Space Complexity: O(m*n)
   */
}
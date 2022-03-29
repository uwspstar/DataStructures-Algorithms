// 1565 · 飞行棋 I
/*
描述
有一个一维的棋盘，起点在棋盘的最左侧，终点在棋盘的最右侧，棋盘上有几个位置是跟其他的位置相连的，即如果A与B相连，则当棋子落在位置A时, 你可以选择是否不投骰子，直接移动棋子从A到B。并且这个连接是单向的，即不能从B移动到A，现在给定这个棋盘的长度length和位置的相连情况connections，你有一个六面的骰子(点数1-6)，最少需要丢几次才能到达终点。

下标从 1 开始
length > 1
起点不与任何其他位置连接
connections[i][0] < connections[i][1]

输入: length = 10 和 connections = [[2, 10]]
输出: 1
解释: 
1->2 (投骰子)
2->10(直接相连)

输入: length = 15 和 connections = [[2, 8],[6, 9]]
输出: 2
解释: 
1->6 (投骰子)
6->9 (直接相连)
9->15(投骰子)
*/
export class Solution {
    /**
     * @param length: the length of board
     * @param connections: the connections of the positions
     * @return: the minimum steps to reach the end
     */
    modernLudo(length, connections) {
        // Write your code here
    }
}
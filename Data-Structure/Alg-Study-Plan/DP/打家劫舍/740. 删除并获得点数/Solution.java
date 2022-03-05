/*
首先，我们先明确一个概念，就是每个位置上的数字是可以在两种前结果之上进行选择的：

如果你不删除当前位置的数字，那么你得到就是前一个数字的位置的最优结果。
如果你觉得当前的位置数字i需要被删，那么你就会得到i - 2位置的那个最优结果加上当前位置的数字乘以个数。
以上两个结果，你每次取最大的，记录下来，然后答案就是最后那个数字了

https://leetcode-cn.com/problems/delete-and-earn/solution/ru-guo-ni-li-jie-liao-da-jia-jie-she-zhe-ti-ni-ken/

*/

// 455. Assign Cookies (Easy)
/*
有一群孩子和一堆饼干，每个孩子有一个饥饿度，每个饼干都有一个大小。每个孩子只能吃 一个饼干，且只有饼干的大小不小于孩子的饥饿度时，这个孩子才能吃饱。求解最多有多少孩子 可以吃饱。
*/
//因为饥饿度最小的孩子最容易吃饱，所以我们先考虑这个孩子。
//为了尽量使得剩下的饼干可 以满足饥饿度更大的孩子，所以我们应该把大于等于这个孩子饥饿度的、且大小最小的饼干给这 个孩子。
//满足了这个孩子之后，我们采取同样的策略，考虑剩下孩子里饥饿度最小的孩子，直到 没有满足条件的饼干存在
/*
这里的贪心策略是，给剩余孩子里最小饥饿度的孩子分配最小的能饱腹的饼干。
至于具体实现，因为我们需要获得大小关系，一个便捷的方法就是把孩子和饼干分别排序。 这样我们就可以从饥饿度最小的孩子和大小最小的饼干出发，计算有多少个对子可以满足条件
*/
const findContentChildren = (kids, cookies) => {
    if (cookies.length === 0) return 0;
    if (kids.length === 0) return 0;

    kids.sort((a, b) => a - b);
    cookies.sort((a, b) => a - b);

    let kid = 0, cookie = 0;
    let res = 0;

    while (kid < kids.length && cookie < cookies.length) {
        if (kids[kid] <= cookies[cookie]) {
            res++;
            kid++;
        }
        cookie++;
    }
    return res;
}
//Minimum Deletions to Make Character Frequencies Unique
//Minimum Operations to Reduce X to Zero
//Minimum Operations to Make a Subsequence
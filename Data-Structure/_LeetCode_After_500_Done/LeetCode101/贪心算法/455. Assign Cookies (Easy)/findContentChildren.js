/*
因为饥饿度最小的孩子最容易吃饱，所以我们先考虑这个孩子。为了尽量使得剩下的饼干可 以满足饥饿度更大的孩子，所以我们应该把大于等于这个孩子饥饿度的、且大小最小的饼干给这 个孩子。满足了这个孩子之后，我们采取同样的策略，考虑剩下孩子里饥饿度最小的孩子，直到 没有满足条件的饼干存在。

Input: [1,2], [1,2,3]
Output: 2

*/
{

    const findContentChildren = (children, cookie) => {
        children.sort();
        cookie.sort();
        let i = 0;
        let j = 0;
        let N1 = children.length;
        let N2 = cookie.length;
        while (i < N1 && j < N2) {
            if (children[i] < cookie[j]) {
                i++;
            }
            j++;
        }
        return i;
    }

    console.log(findContentChildren([1, 2], [1, 2, 3]));
}
{
    //为了了满足更多的小孩，就不要造成饼干尺寸的浪费。
    //大尺寸的饼干既可以满足胃口大的孩子也可以满足胃口小的孩子，
    //那么就应该优先满足胃口大的。
    var findContentChildren = function (g, s) {
        g.sort((a, b) => a - b);
        s.sort((a, b) => a - b);
        let res = 0;
        let index = s.length - 1;
        for (let i = g.length - 1; i >= 0; i--) {
            if (index >= 0 && s[index] >= g[i]) {
                res++;
                index--;
            }
        }
        return res;
    };
}
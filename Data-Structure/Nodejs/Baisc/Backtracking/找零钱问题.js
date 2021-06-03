//找零钱问题
/*
假设你开了间小店，不能电子支付，钱柜里的货币只有 25 分、10 分、5 分和 1 分四种硬币，如果你是售货员且要找给客户 41 分钱的硬币，如何安排才能找给客人的钱既正确且硬币的个数又最少？

这里需要明确的几个点：
1.货币只有 25 分、10 分、5 分和 1 分四种硬币；
2.找给客户 41 分钱的硬币；
3.硬币最少化
*/
/*
思考，能使用我们今天学到的贪婪算法吗？怎么做？

1.找给顾客sum_money=41分钱，可选择的是25 分、10 分、5 分和 1 分四种硬币。能找25分的，不找10分的原则，初次先找给顾客25分；
2.还差顾客sum_money=41-25=16。然后从25 分、10 分、5 分和 1 分四种硬币选取局部最优的给顾客，也就是选10分的，此时sum_money=16-10=6。重复迭代过程，还需要sum_money=6-5=1,sum_money=1-1=0。至此，顾客收到零钱，交易结束；
3.此时41分，分成了1个25，1个10，1个5，1个1，共四枚硬币。
*/

//can we use backtracking ? so slow, stack overflow
{
    const changing = (nums, sum) => {
        let res = [];
        let path = [];
        let minCoins = []
        const backTracking = (remain) => {
            if (remain === 0) {
                if (minCoins.length === 0 || minCoins.length > path.length) {
                    minCoins = [...path];
                }
                res.push([...path]);
                return;
            } else if (remain < 0) {
                return;
            } else {
                for (let i = 0; i < nums.length; i++) {
                    path.push(nums[i]);
                    backTracking(remain - nums[i]);
                    path.pop();
                }
            }
        }
        backTracking(sum);
        return minCoins;

    }
    console.log(changing([20, 10, 5, 1], 41))//[ 20, 20, 1 ]
    console.log(changing([1, 3, 4], 6)) //[ 3, 3 ]
}
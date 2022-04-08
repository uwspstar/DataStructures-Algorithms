// 1852 · 最终优惠价
// https://www.lintcode.com/problem/1852/
/*
一位店主需要完成一项销售任务，他将要出售的物品排成一排。
从左侧开始，店主以其全价减去位于该物品右侧的第一个价格较低或价格相同的商品的价格。
如果右侧没有价格低于或等于当前商品价格的商品，则以全价出售当前商品。
你需要返回每一个物品实际售出价格

输入: Prices = [2, 3, 1, 2, 4, 2] 输出: [1, 2, 1, 0, 2, 2]
解释：
第0个和第1个物品右边第一个更低的价格都是1，所以实际售价需要在全价上减去1， 第3个物品右边第一个更低的价格是2，所以实际售价要在全价上面减去2。 

示例 2:
输入: Prices = [1, 2, 3, 4, 5] 输出:  [1, 2, 3, 4, 5]
解释: 
每一个物品都保持原价，他们的右边都没有等于或者更低价格的物品
*/
export class Solution {
    // 以其全价减去位于该物品右侧的第一个价格较低或价格相同的商品的价格。
    FinalDiscountedPrice(prices) {
        let res = [...prices];
        let N = prices.length;
        let stk = []; // index
        console.log('res=', res, 'stk=', stk)
        for (let i = 0; i < N; i++) {
            while (stk.length && prices[stk[stk.length - 1]] >= prices[i]) {
                res[stk[stk.length - 1]] = res[stk[stk.length - 1]] - prices[i];
                stk.pop();
            }
            stk.push(i);
            console.log(res, stk)
        }
        return res;
    }
}
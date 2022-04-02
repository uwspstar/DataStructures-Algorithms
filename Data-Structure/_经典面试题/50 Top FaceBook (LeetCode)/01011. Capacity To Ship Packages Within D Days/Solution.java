class Solution {
    public int shipWithinDays(int[] weights, int days) {
        int left = 0;
        int right = 1;
        for (int w : weights) {
            left = Math.max(left, w);
            right += w;
        }

        while (left < right) {
            int mid = left + (right - left) / 2;
            if (f(weights, mid) <= days) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }

    // 定义：当运载能力为 x 时，需要 f(x) 天运完所有货物
    // f(x) 随着 x 的增加单调递减
    int f(int[] weights, int x) {
        int days = 0;
        for (int i = 0; i < weights.length; ) {
            // 尽可能多装货物
            int cap = x;
            while (i < weights.length) {
                if (cap < weights[i]) break;
                else cap -= weights[i];
                i++;
            }
            days++;
        }
        return days;
    }
}

/*
基本思路
PS：这道题在《算法小抄》 的第 360 页。

二分搜索的套路比较固定，如果遇到一个算法问题，能够确定 x, f(x), target 分别是什么，并写出单调函数 f 的代码。

船的运载能力就是自变量 x，运输天数和运载能力成反比，所以可以定义 f(x) 表示 x 的运载能力下需要的运输天数，target 显然就是运输天数 D，我们要在 f(x) == D 的约束下，算出船的最小载重。

关于本题二分搜索的具体思路见详细题解。

详细题解：我写了一个套路，助你随心所欲运用二分搜索

标签：二分搜索

解法代码
*/
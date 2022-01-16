//849. 到最近的人的最大距离
/*
给你一个数组 seats 表示一排座位，其中 seats[i] = 1 代表有人坐在第 i 个座位上，seats[i] = 0 代表座位 i 上是空的（下标从 0 开始）。

至少有一个空座位，且至少有一人已经坐在座位上。

亚历克斯希望坐在一个能够使他与离他最近的人之间的距离达到最大化的座位上。

返回他到离他最近的人的最大距离。
*/
var maxDistToClosest = function (seats) {
    let lastId = -1;
    let max = 0;
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] == 1) {
            max = lastId < 0 ? i : Math.max(max, Math.floor((i - lastId) / 2));
            lastId = i;
        }
    }
    max = Math.max(max, seats.length - 1 - lastId); // last seat
    return max
};
{
    var maxDistToClosest = function (seats) {
        let N = seats.length;
        let prev = -1, future = 0;
        let ans = 0;

        for (let i = 0; i < N; ++i) {
            if (seats[i] == 1) {
                prev = i;
            } else {
                while (future < N && seats[future] == 0 || future < i) {
                    future++;
                }

                let left = prev == -1 ? N : i - prev;
                let right = future == N ? N : future - i;
                ans = Math.max(ans, Math.min(left, right));

                console.log('i=', i, 'left=', left, 'right=', right, 'prev=', prev, 'future=', future, 'ans=', ans);
            }
        }
        return ans;
    }
}
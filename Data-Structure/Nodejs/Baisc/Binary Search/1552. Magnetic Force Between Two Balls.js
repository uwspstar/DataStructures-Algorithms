/*
1552. Magnetic Force Between Two Balls (Medium)

In universe Earth C-137, Rick discovered a special form of magnetic force between two balls if they are put in his new invented basket. Rick has n empty baskets, the ith basket is at position[i], Morty has m balls and needs to distribute the balls into the baskets such that the minimum magnetic force between any two balls is maximum.

Rick stated that magnetic force between two different balls at positions x and y is |x - y|.

Given the integer array position and the integer m. Return the required force.

Input: position = [1,2,3,4,7], m = 3 Output: 3
Explanation: Distributing the 3 balls into baskets 1, 4 and 7 will make the magnetic force between ball pairs [3, 3, 6]. The minimum magnetic force is 3. We cannot achieve a larger minimum magnetic force than 3.

Input: position = [5,4,3,2,1,1000000000], m = 2 Output: 999999999
Explanation: We can use baskets 1 and 1000000000.

*/
{
    const check = (x, position, m) => {
        let pre = position[0], cnt = 1;
        for (let i = 1; i < position.length; ++i) {
            if (position[i] - pre >= x) {
                pre = position[i];
                cnt += 1;
            }
        }
        return cnt >= m;
    }
    var maxDistance = function (position, m) {
        
        position.sort((x, y) => x - y);

        let left = 1, right = position[position.length - 1] - position[0], ans = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (check(mid, position, m)) {
                ans = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return ans;
    };
}
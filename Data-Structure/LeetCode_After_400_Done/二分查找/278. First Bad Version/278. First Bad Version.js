//278. First Bad Version
//https://leetcode.com/problems/first-bad-version/
{
    var solution = function (isBadVersion) {
        return function (n) {
            let left = 1;
            let right = n;
            let res = 1;
            while (left <= right) {
                let mid = parseInt(left + (right - left) / 2);
                if (isBadVersion(mid)) {// ggg gb bbbbb
                    res = mid;
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            return res;
        }
    };
}
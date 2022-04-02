// 973. K Closest Points to Origin
/*
Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

 

Example 1:


Input: points = [[1,3],[-2,2]], k = 1
Output: [[-2,2]]
Explanation:
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
Example 2:

Input: points = [[3,3],[5,-1],[-2,4]], k = 2
Output: [[3,3],[-2,4]]
Explanation: The answer [[-2,4],[3,3]] would also be accepted.*/
{
    const getDistance = (point) => {  // 求point到原点的距离
        return point[0] * point[0] + point[1] * point[1];
    }
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    const getPivotIndex = (points, low, high) => {
        let pi = low;
        let pivot = getDistance(points[high]);
        for (let i = low; i <= high; i++) {
            if (getDistance(points[i]) < pivot) {
                swap(points, i, pi);
                pi++;
            }
        }
        swap(points, pi, high);
        return pi
    }

    const quickSelect = (points, start, end, K) => {
        if (start < end) {
            let pi = getPivotIndex(points, start, end);
            if (pi == K) { // 排好了
                return;
            } else if (pi < K) { // 左边还不够K个，则[r+1:end]要继续排
                quickSelect(points, pi + 1, end, K);
            } else { // 左边大于K个，则对左边继续排
                quickSelect(points, start, pi - 1, K);
            }
        }
    }

    var kClosest = function (points, K) {
        if (points.length <= K) return points;
        quickSelect(points, 0, points.length - 1, K); // 范围是整个数组
        return points.slice(0, K);  // 排完后，取前K个
    };
}
{
    var kClosest = function (points, K) {
        if (points.length <= K) return points;
        quickSelect(points, 0, points.length - 1, K); // 范围是整个数组
        return points.slice(0, K);  // 排完后，取前K个
    };

    function quickSelect(points, start, end, K) {
        const pivot = distance(points[start]);

        let l = start, r = end;

        while (l <= r) { 	     // 左右两个指针
            if (distance(points[l]) <= pivot) { // 左指针指向的元素比pivot小，没毛病，看下一个，指针右移
                l++;
                continue;
            }
            if (distance(points[r]) > pivot) { // 右指针指向的元素比pivot大，没毛病，看下一个，指针左移
                r--;
                continue;
            }
            // 左指针指向的元素比pivot大，右指针指向的元素比pivot小，交换左右指针指向的元素
            [points[l], points[r]] = [points[r], points[l]];
            l++;
            r--;        // 指针同时收缩1
        }
        [points[start], points[r]] = [points[r], points[start]]; // 交换pivot元素和右指针指向的元素
        if (r == K) { // 排好了
            return;
        } else if (r < K) { // 左边还不够K个，则[r+1:end]要继续排
            quickSelect(points, r + 1, end, K);
        } else { // 左边大于K个，则对左边继续排
            quickSelect(points, start, r - 1, K);
        }
    }

    function distance(point) {  // 求point到原点的距离
        return point[0] * point[0] + point[1] * point[1];
    }
}

/*
https://www.cnblogs.com/cnoodle/p/14906687.html

这个题目问的是对于每一个 query，query[0] 代表的是要找的某个 index，query[1] 代表的是要找的 color。也就是说我们每一个 query 要找的是离某个 index 最近的 color 在哪里。注意到 input 数组是无序的，但是因为找的元素是确定的，所以我们先用一个 hashmap 把 input 数组中的不同数字在 input 数组中出现的下标记录一下。注意到对于每个元素来说，我们记录 index 的 list 最后是有序的，所以我们二分的范围也就是在这些 list 中。

所以对于一个要找的元素来说，首先我们看一下他是否存在于hashmap，如果不存在直接就返回 -1 了。如果存在，我们就在 hashmap 中找到的 list 中做二分法。注意最后二分跳出的时候需要有特判，因为要找的某个 index 很有可能在list的左边或者右边。所以最后的特判是如果左指针/右指针在合法范围内，我们再去判断哪个指针离 index 更近。

时间O(nlogn)

空间O(n)
*/
class Solution {
    public List<Integer> shortestDistanceColor(int[] colors, int[][] queries) {
        HashMap<Integer, List<Integer>> map = new HashMap<>();
        // 记录每个color的index
        for (int i = 0; i < colors.length; i++) {
            int c = colors[i];
            map.putIfAbsent(c, new ArrayList<>());
            map.get(c).add(i);
        }

        List<Integer> res = new ArrayList<>();
        for (int[] query : queries) {
            int index = query[0];
            int c = query[1];
            // corner case
            if (!map.containsKey(c)) {
                res.add(-1);
            } else {
                res.add(binarySearch(index, map.get(c)));
            }
        }
        return res;
    }

    private int binarySearch(int index, List<Integer> list) {
        int left = 0;
        int right = list.size() - 1;
        // left + 1 == right when exit from while loop
        while (left + 1 < right) {
            int mid = left + (right - left) / 2;
            if (list.get(mid) == index) {
                return 0;
            } else if (list.get(mid) < index) {
                left = mid;
            } else {
                right = mid;
            }
        }
        // System.out.println("left is " + left + " right is " + right);
        int res = right;
        if (right - 1 >= 0 && Math.abs(index - list.get(right - 1)) < Math.abs(index - list.get(right))) {
            res = right - 1;
        }
        return Math.abs(list.get(res) - index);
    }
}
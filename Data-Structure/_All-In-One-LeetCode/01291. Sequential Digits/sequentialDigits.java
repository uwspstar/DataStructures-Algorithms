class Solution {
    public List<Integer> sequentialDigits(int low, int high) {
        List<Integer> res = new LinkedList<>();
        // 顺次数第一位(1~9);遍历以i开头的所有顺次数
        for (int i = 1; i <= 9; i++) {
            int num = i;
            // 顺次数其他位;其他位都比上一位多1,使用j++
            for (int j = i + 1; j <= 9; j++) {
                // 因为是尾部添加，所以之前的数字要扩大十倍
                num = num * 10 + j;
                // 如果这个顺次数在范围内，加入结果集
                if (num >= low && num <= high) {
                    res.add(num);
                }
            }
        }
        // 调用集合工具包排序方法进行排序
        Collections.sort(res);
        return res;
    }
}
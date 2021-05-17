//给定一组连续的整数，例如：10，11，12，……，20，但其中缺失一个数字，试找出缺失的数字：
// better than O(N) means O(logN)
//1) order, can we use binary search ?
//2) what is bigO for list.contains(num)?
//https://www.liaoxuefeng.com/wiki/1252599548343744/1265116446975264
//List还提供了boolean contains(Object o)方法来判断List是否包含某个指定元素。此外，int indexOf(Object o)方法可以返回某个元素的索引，如果元素不存在，就返回-1。
// 因为List内部并不是通过==判断两个元素是否相等，而是使用equals()方法判断两个元素是否相等
public class solution {

    static int findMissingNumber(int start, int end, List<Integer> list) {
        while (list.contains(start)) {
            start++;
        }
        return start;
    }
}
// 和上述题目一样，但整数不再有序，试找出缺失的数字：O(N)
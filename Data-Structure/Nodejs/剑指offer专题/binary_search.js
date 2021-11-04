{
    const binary_search = (start, end, key) => {
        let res = -1;  // 未搜索到数据返回-1下标
        let mid;
        while (start <= end) {
            mid = start + ((end - start) >> 1);  // 直接平均可能会溢出，所以用这个算法
            if (arr[mid] < key)
                start = mid + 1;
            else if (arr[mid] > key)
                end = mid - 1;
            else {  // 最后检测相等是因为多数搜索情况不是大于就是小于
                res = mid;
                break;
            }
        }
        return res;  // 单一出口
    }
}
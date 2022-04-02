// https://oi-wiki.org/basic/divide-and-conquer/
{
    const merge_sort = (一个数组) => {
        if (可以很容易处理) return;
        merge_sort(左半个数组);
        merge_sort(右半个数组);
        merge(左半个数组, 右半个数组);
    }
}
{
    const merge_sort = (a, front, end) => {
        if (front >= end) return;
        let mid = front + (end - front) / 2;
        merge_sort(a, front, mid);
        merge_sort(a, mid + 1, end);
        merge(a, front, mid, end);
    }
}
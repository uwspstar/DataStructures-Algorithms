{
    var arr = [12, 3, 13, 4, 2, 40, 23];
    const getKthBiggestElement = (arr, k) => {
        var maxH = new MaxHeap();
        for (let n of arr) {
            maxH.push(n);
        }
        for (var i = 1; i < k; i++) {
            maxH.pop();
        }
        return maxH.pop();
    }

    getKthBiggestElement(arr, 2); // 23 
    getKthBiggestElement(arr, 1); // 40 
    getKthBiggestElement(arr, 7); // 2
}
/*
Time Complexity: O(klog2(n))
Here, n is the size of the array since each .pop costs O(log2(n)),
which has to be done k times.
Space Complexity: O(n)
O(n) in memory is needed to store the heap array.
*/

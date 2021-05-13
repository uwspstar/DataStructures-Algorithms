{
    var arr = [12, 3, 13, 4, 2, 40, 23];
    const getKthSmallestElement = (arr, k) => {
        var minH = new MinHeap();
        for (let n of arr) {
            minH.add(n);
        }
        for (var i = 1; i < k; i++) {
            maxH.poll();
        }
        return maxH.poll();
    }

    getKthSmallestElement(arr, 2); // 3 
    getKthSmallestElement(arr, 1); // 2 
    getKthSmallestElement(arr, 7); // 40
}
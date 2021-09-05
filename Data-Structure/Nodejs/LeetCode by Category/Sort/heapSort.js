//堆排序是利用堆这种数据结构而设计的一种排序算法，堆排序是一种选择排序，它的最坏，最好，平均时间复杂度均为O(nlogn)，它也是不稳定排序。首先简单了解下堆结构。
/*
堆節點的訪問
通常堆是通過一維数组來實現的。在陣列起始位置為0的情形中：
父節點i的左子節點在位置 (2i+1);
父節點i的右子節點在位置 (2i+2);
子節點i的父節點在位置 Math.floor (i-1)/2;

堆的操作
在堆的資料結構中，堆中的最大值總是位於根節點（在优先队列中使用堆的话堆中的最小值位于根节点）。堆中定義以下幾種操作：

最大堆調整（Max Heapify）：將堆的末端子節點作調整，使得子節點永遠小於父節點
建立最大堆（Build Max Heap）：將堆中的所有數據重新排序
堆排序（HeapSort）：移除位在第一個數據的根節點，並做最大堆調整的遞迴運算

i node leftLeave = i * 2 + 1
i node leftLeave = i * 2 + 2

i node parent = parseInt([i-1] / 2)

let left = 2 * parent + 1
let right = left + 1

let array = [6, 5, 3, 1, 8, 7, 2, 4]
*/

//Build Heap

//We are going to heapify this array from the bottom up. 
//largest and i are just referring to indexes
{


    const heapify = (arr, length, i) => {
        let largest = i;
        let left = i * 2 + 1;
        let right = left + 1;
        if (arr[left] > arr[largest]) {
            largest = left;
        }
        // do not use if else here
        if (arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];

            heapify(arr, length, largest);
        }

        return arr;
    }

    const heapSort = arr => {
        let length = arr.length;
        let i = Math.floor(length / 2);
        let k = length - 1;
        while (i >= 0) {
            heapify(arr, length, i);
            i--;
        }
        //k is the last child in the heap
        while (k >= 0) {
            [arr[0], arr[k]] = [arr[k], arr[0]];
            heapify(arr, k, 0);
            k--;
        }

        return arr;
    }
}
//wiki
{
    rray.prototype.heap_sort = function () {
        var arr = this.slice(0);
        function swap(i, j) {
            var tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }

        function max_heapify(start, end) {
            //建立父節點指標和子節點指標
            var dad = start;
            var son = dad * 2 + 1;
            if (son >= end)//若子節點指標超過範圍直接跳出函數
                return;
            if (son + 1 < end && arr[son] < arr[son + 1])//先比較兩個子節點大小，選擇最大的
                son++;
            if (arr[dad] < arr[son]) {//如果父節點小於子節點時，交換父子內容再繼續子節點和孫節點比較
                swap(dad, son);
                max_heapify(son, end);
            }
        }

        var len = arr.length;
        //初始化，i從最後一個父節點開始調整
        for (var i = Math.floor(len / 2) - 1; i >= 0; i--) {
            max_heapify(i, len);
        }

        //先將第一個元素和已排好元素前一位做交換，再從新調整，直到排序完畢
        for (var i = len - 1; i > 0; i--) {
            swap(0, i);
            max_heapify(0, i);
        }

        return arr;
    };
    var a = [3, 5, 3, 0, 8, 6, 1, 5, 8, 6, 2, 4, 9, 4, 7, 0, 1, 8, 9, 7, 3, 1, 2, 5, 9, 7, 4, 0, 2, 6];
    console.log(a.heap_sort());
}
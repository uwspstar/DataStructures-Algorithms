### Heap / Priority Queue

堆是一种特殊的基于树的数据结构，它满足堆属性。二叉堆是一种常见的堆，可以是**最小堆**或**最大堆**。在最小堆中，每个节点的值都大于或等于其父节点的值；在最大堆中，每个节点的值都小于或等于其父节点的值。堆通常用于实现**优先队列**。

### Characteristics 特点

1. **Binary Heap 二叉堆**：一种完全二叉树，满足堆属性。
2. **Min-Heap 最小堆**：根节点具有最小值。
3. **Max-Heap 最大堆**：根节点具有最大值。
4. **Heap Property 堆属性**：对于最小堆，每个父节点小于或等于其子节点。对于最大堆，每个父节点大于或等于其子节点。

### Priority Queue 优先队列

优先队列是一种类似于常规队列的抽象数据类型，但具有每个元素都关联有优先级的额外属性。优先级高的元素在优先级低的元素之前出队。

### Operations 操作

1. **Insertion 插入**：向堆中添加新元素。
2. **Deletion 删除**：从堆中删除根元素。
3. **Peek 查看**：获取根元素而不删除它。
4. **Heapify 堆化**：在插入或删除后维护堆属性。

### Node.js Example 例子

以下是在 Node.js 中实现最小堆（优先队列）的方法：

```javascript
class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] > this.heap[index]) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    remove() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            let smallest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
                smallest = leftChildIndex;
            }

            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
                smallest = rightChildIndex;
            }

            if (smallest !== index) {
                this.swap(index, smallest);
                index = smallest;
            } else {
                break;
            }
        }
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }
}

// Example usage:
// 示例用法：
const minHeap = new MinHeap();
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(8);
minHeap.insert(1);
console.log(minHeap.peek()); // Output: 1 输出: 1
console.log(minHeap.remove()); // Output: 1 输出: 1
console.log(minHeap.peek()); // Output: 3 输出: 3
```

### Detailed Process Explanation 详细过程解释

1. **Insert 插入**：将新元素添加到堆的末尾，然后调用 `heapifyUp` 以维护堆属性。
2. **Heapify Up 上滤**：将添加的元素与其父节点进行比较；如果添加的元素较小，则交换它们。重复直到恢复堆属性。
3. **Remove 删除**：用堆的最后一个元素替换根元素，然后调用 `heapifyDown` 以维护堆属性。
4. **Heapify Down 下滤**：将根元素与其子节点进行比较；如果一个子节点较小，则交换它们。重复直到恢复堆属性。
5. **Peek 查看**：返回堆的根元素。

### Comparison Table 比较表

| Feature 特点 | Min-Heap 最小堆 | Max-Heap 最大堆 | Priority Queue 优先队列 |
| --- | --- | --- | --- |
| Root Property 根属性 | Smallest element 最小元素 | Largest element 最大元素 | Highest/Lowest priority 最高/最低优先级 |
| Insertion Time 插入时间 | O(log n) | O(log n) | O(log n) |
| Deletion Time 删除时间 | O(log n) | O(log n) | O(log n) |
| Peek Time 查看时间 | O(1) | O(1) | O(1) |
| Use Case 使用场景 | Find smallest element 查找最小元素 | Find largest element 查找最大元素 | Task scheduling, Dijkstra's algorithm 任务调度，Dijkstra算法 |

### Use Cases and Tips 用例和提示

#### Use Cases 用例

1. **Task Scheduling 任务调度**：根据紧急性或重要性来优先处理任务。
2. **Dijkstra's Algorithm Dijkstra算法**：在图中查找最短路径。
3. **Median Maintenance 中位数维护**：在动态变化的数据集中查找中位数。

#### Tips 提示

- **Maintain Heap Property 维护堆属性**：每次插入和删除后都要确保堆属性。
- **Use Efficient Storage 使用高效存储**：将堆元素存储在数组中以便于高效索引。
- **Understand Operations 理解操作**：熟悉 `heapifyUp` 和 `heapifyDown` 操作，因为它们对维护堆非常重要。

By understanding heaps and priority queues, you can efficiently manage and prioritize tasks and data in various computational problems.

通过理解堆和优先队列，您可以在各种计算问题中高效地管理和优先处理任务和数据。

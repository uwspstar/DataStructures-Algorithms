class Heap {
    constructor() {
        this.items = [];
    }
    swap(i, j) {
        [this.items[i], this.items[j]] = [this.items[j], this.items[i]]
    }
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    getLeftChildIndex(index) {
        return index * 2 + 1;
    }
    getRightChildIndex(index) {
        return index * 2 + 2;
    }
    getParent(index) {
        return this.items[this.getParentIndex(index)]
    }
    getLeftChild(index) {
        return this.items[this.getLeftChildIndex(index)];
    }
    getRightChild(index) {
        return this.items[this.getRightChildIndex(index)];
    }
    peek() {
        return this.items[0];
    }
    size() {
        this.items.length;
    }

}
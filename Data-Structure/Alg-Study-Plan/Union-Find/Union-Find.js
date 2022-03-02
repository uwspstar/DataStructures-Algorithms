class UnionFind {
    constructor(n) {
        this.parent = new Array(n).fill(0).map((element, index) => index);
    }

    union(index1, index2) {
        this.parent[this.find(index2)] = this.find(index1);
    }

    find(index) {
        if (this.parent[index] !== index) {
            this.parent[index] = this.find(this.parent[index]);
        }
        return this.parent[index];
    }
}
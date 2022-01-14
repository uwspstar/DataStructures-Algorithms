//305. Number of Islands II
var numIslands2 = function (m, n, positions) {
    const uf = new UnionFind(m * n);
    const ans = [];
    positions.forEach((p) => {
        const pIndex = pos2Index(p, n);
        uf.setParent(pIndex);
        const nI = [];
        [
            [p[0] - 1, p[1]],
            [p[0] + 1, p[1]],
            [p[0], p[1] - 1],
            [p[0], p[1] + 1],
        ].forEach((pN) => {
            if (pN[0] >= m || pN[1] >= n || pN[0] < 0 || pN[1] < 0) return;
            const pNI = pos2Index(pN, n);
            if (uf.isValid(pNI)) nI.push(pNI);
        });
        for (let i = 0; i < nI.length; i++) {
            uf.union(nI[i], pIndex);
        }
        ans.push(uf.count);
    });
    return ans;
};

function pos2Index(p, w) {
    return p[0] * w + p[1];
}

class UnionFind {
    constructor(N) {
        this.parents = Array(N).fill(null);
        this.count = 0;
    }
    isValid(i) {
        return this.parents[i] !== null;
    }
    find(i) {
        if (this.parents[i] === null) return null;
        while (this.parents[i] >= 0) {
            i = this.parents[i];
        }
        return { parent: i, rank: this.parents[i] };
    }
    setParent(i) {
        if (this.parents[i] !== null) return;
        this.parents[i] = -1;
        this.count++;
    }
    union(i, j) {
        const pI = this.find(i);
        const pJ = this.find(j);
        if (pI.parent === pJ.parent) return;
        if (pI.rank < pJ.rank) {
            this.parents[pJ.parent] = pI.parent;
            this.parents[pI.parent] += pJ.rank;
        } else {
            this.parents[pI.parent] = pJ.parent;
            this.parents[pJ.parent] += pI.rank;
        }
        this.count--;
    }
}
  //Couples Holding Hands
  //Rank Transform of a Matrix
  //Checking Existence of Edge Length Limited Paths II
{
    const lengthOfLongestSubstring = s => {
        let ans = 0;
        let res = [];
        for (let i = 0; i < s.length; i++) {
            let curr = s[i];
            while (res.indexOf(curr)) {
                res.shift();
            }
            res.push(curr);
            ans = Math.max(ans, res.length);
        }
        return ans;
    }
    const twoSum = (arr, target) => {
        if (arr.length < 2) return [];
        let map = new Map();
        for (let i = 0; i < arr; i++) {
            let key = target - arr[i];
            if (map.has(key)) return [map.get(key), i];
            map.set(arr[i], i);
        }

        return []
    }
}


{
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    const bubbleSort = arr => {
        if (arr === null) return arr;
        if (arr.length < 2) return arr;
        let N = arr.length;
        for (let i = N - 1; i >=0; i++) {
            let isSwap = false;
            for (let j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                    isSwap = true;
                }
            }
            if (!isSwap) break;
        }
        return arr;
    }
    const selectionSort = arr => {
        if (arr === null) return arr;
        if (arr.length < 2) return arr;
        let N = arr.length;
        for (let i = 0; i < N; i++) {
            let smallIndex = i;
            for (let j = i + 1; j < N; j++) {
                if (arr[j] < arr[smallIndex]) {
                    smallIndex = j; 
                }
            }
            if (smallIndex !== i) swap(arr, smallIndex, i);
        }
        return arr;
    }
    const insertionSort = arr => {
        if (arr === null) return arr;
        if (arr.length < 2) return arr;
        let N = arr.length;
        for (let i = 1; i < N; i++) {
            let curr = arr[i];
            for (let j = i - 1; j >= 0; j--) {
                if (arr[j] > curr) {
                    arr [j + 1] = arr[j]
                } else break;
            }
            arr[j + 1] = curr;
        }
        return arr;
    }
    const merge = (arr1, arr2) =>{
        if (arr1.length === 0) return arr2;
        if (arr2.length === 0) return arr1;
        let res = [];
        while (arr1.length && arr2.length) {
            arr1[0] < arr2[0] ? res[arr1.shift()] : res[arr2.shift()]; 
        }
        return res.concat(arr1, arr2);
    }
    const mergeSort = (arr) => {
        if (arr.length < 2) return arr;
        let mid = arr.length >> 1;
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));
        return merge (left, right);
    }
    const getPivotIndex = (arr, low, high) => {
        let pivot = arr[high];
        let pi = low;
        for (let i = low; i <= high; i++) {
            if (arr[i] < pivot) {
                swap(arr, i, pi)
                pi++;
            }
        }
        swap(arr, high, pi);
        return pi;
    }
    const quickSort = (arr, low = 0, high = arr.length - 1) => {
        if (arr === null) return arr;
        if (arr.length < 2) return arr;
        if (low < high) {
            let pi = getPivotIndex(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
        return arr;
    }
}

{
    const bfs = root => {
        if (root === null) return root;
        let q = [root];
        let res = [];
        while (q.length) {
            let sz = q.length;
            for (let i = 0; i < sz; i++) {
                let n = q.shift();
                res.push(n.val);
                if (n.left) q.push(n.left);
                if (n.right) q.push(q.right);
            }
        }
        return res;
    }
}
{
    const perOrder = root => {
        if (root === null) return root;
        let res = [];
        const dfs = root => {
            res.push(root.val);
            if (root.left) dfs(root.left); 
            if (root.right) dfs(root.right);           
        }
        dfs(root);
        return res;
    }
    const inOrder = root => {
        if (root === null) return root;
        let res = [];
        const dfs = root => {
            if (root.left) dfs(root.left);
            res.push(root.val);
            if (root.right) dfs(root.right);           
        }
        dfs(root);
        return res;
    }
    const postOrder = root => {
        if (root === null) return root;
        let res = [];
        const dfs = root => {
            if (root.left) dfs(root.left);
            if (root.right) dfs(root.right);
            res.push(root.val);
        }
        dfs(root);
        return res;
    }

    const perOrder = root => {
        if (root === null) return root;
        let res = [];
        let s = [root];
        while (s.length) {
            let sz = s.length;
            for (let i = 0; i < sz; i++) {
                let n = s.pop();
                res = n.push(n.val);
                if (n.right) s.push(n.right);
                if (n.left) s.push(n.left);
            }
        }
        return res;
    }
    const inOrder = root => {
        if (root === null) return root;
        let res = [];
        let s = [];
        let p = root;
        while (s.length || p !== null) {
            while(p) {
                s.push(p);
                p = p.left;
            }
            let n = s.pop();
            res = n.push(n.val);
            p = n.right;
        }
        return res;
    }

    const postOrder = root => {
        if (root === null) return root;
        let res = [];
        let s = [root];
        let out = [];
        while (s.length) {
            let n = s.pop();
            out.push(n);
            if (n.left) s.push(n.left);
            if (n.right) s.push(n.right);
        }
        while (out.length > 0) {
            res = n.push(n.val);
        }
        return res;
    }
}
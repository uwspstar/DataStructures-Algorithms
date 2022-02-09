//1268. Search Suggestions System (M)
const findLower = (w, arr) => {
    let left = 0, right = arr.length;
    while (left < right) {
        let mid = parseInt(left + (right - left) / 2);
        let cmp = arr[mid].localeCompare(w);
        if (cmp < 0) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}
const search = (w, arr) => {
    let lo = findLower(w, arr);
    let res = [];
    while (lo < arr.length && res.length < 3 && arr[lo].startsWith(w)) {
        res.push(arr[lo++]);
    }
    return res;
}
var suggestedProducts = function (products, searchWord) {
    products.sort();
    let res = [];
    for (let i = 1; i <= searchWord.length; i++) {
        let pre = searchWord.substring(0, i);
        res.push(search(pre, products));
    }
    return res;
};
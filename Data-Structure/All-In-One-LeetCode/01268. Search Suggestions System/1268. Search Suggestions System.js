//1268. Search Suggestions System
const findLower = (w, arr) => {
    let left = 0, right = arr.length;
    //console.log('w=',w, 'arr=',arr);
    while (left < right) {
        let mid = parseInt(left + (right - left) / 2);
       
        let cmp = arr[mid].localeCompare(w);

        /*
        -1 if the string is sorted before the compareString
        0 if the two strings are equal
        1 if the string is sorted after the compareString
        */

        console.log('arr[mid]=', arr[mid], 'w=', w, 'mid=', mid, 'cmp=', cmp);
        
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
    //console.log('lo=', lo, 'w=',w, 'arr=',arr);
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
        console.log('pre=', pre);
        res.push(search(pre, products));
    }
    return res;
};
let products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"], searchWord = "mouse"
console.log(suggestedProducts(products, searchWord));


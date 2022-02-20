const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
const findDuplicate = arr => {
    // [5, 6, 4, 2, 1, 6, 3]
    // [5, 6, 4, 2, 1, 6, 3]
     
    for (let i = 0; i < arr.length; i++) {
        while (arr[i] !== i) { 
            if (arr[i] === arr[arr[i]]) return true; 
            swap(arr, i, arr[i]);
        }
    }
    
    return false;
}
console.log(findDuplicate([5, 6, 4, 2, 1, 3, 7, 0])); //false
console.log(findDuplicate([5, 6, 4, 2, 1, 3, 6, 0])); //true;
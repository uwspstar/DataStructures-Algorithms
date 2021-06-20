/*
Given an array of integers arr, create a function that returns an array containing the values of arr without duplicates (the order doesn't matter).

Input: arr = [4, 2, 5, 3, 3, 1, 2, 4, 1, 5, 5, 5, 3, 1] Output: [4, 2, 5, 3, 1]
Input: arr = [1, 1, 1, 1, 1, 1, 1, 1] Output: [1]
Input: arr = [4, 4, 2, 3, 2, 2, 4, 3] Output: [4, 2, 3]
*/
{
    //O(N) / O(N)
    const removeDuplicate = arr => {
        if (arr.length < 2) return arr;
        let res = [];
        let set = new Set();
        for (let num of arr) {
            if (!set.has(num)) {
                set.add(num);
                res.push(num);
            }
        }
        return res;
    }
    console.log(removeDuplicate([4, 4, 2, 3, 2, 2, 4, 3]));//[4,2,3]
    console.log(removeDuplicate([1, 1, 1, 1, 1, 1, 1, 1]));//1
    console.log(removeDuplicate([4, 2, 5, 3, 3, 1, 2, 4, 1, 5, 5, 5, 3, 1]))//[4, 2, 5, 3, 1]
}
{
    //sort arr : since the output the order doesn't matter.
    //O(nlogn) / O(N)
    const removeDuplicate = arr => {
        if (arr.length < 2) return arr;
        arr.sort((a, b) => a - b);
        let res = [arr[0]];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] !== arr[i]) {
                res.push(arr[i]);
            }
        }
        return res;
    }
    console.log(removeDuplicate([4, 4, 2, 3, 2, 2, 4, 3]));//[4,2,3]
    console.log(removeDuplicate([1, 1, 1, 1, 1, 1, 1, 1]));//1
    console.log(removeDuplicate([4, 2, 5, 3, 3, 1, 2, 4, 1, 5, 5, 5, 3, 1]))//[4, 2, 5, 3, 1]
}
{   //sort arr : since the output the order doesn't matter.
    //O(nlogn) / O(1)
    const removeDuplicate = arr => {
        if (arr.length < 2) return arr;
        arr.sort((a, b) => a - b);
        let p = 0;
        //[2, 2, 2, 3, 3, 4, 4, 4]
        //[2, 3, 4, 3, 3, 4, 4, 4]
        for (let i = 0; i < arr.length; i++) {
            if (arr[p] !== arr[i]) {
                //p++;
                arr[++p] = arr[i];
            }
        }
        arr.length = p + 1;
        return arr;
    }
    console.log(removeDuplicate([4, 4, 2, 3, 2, 2, 4, 3]));//[4,2,3]
    console.log(removeDuplicate([1, 1, 1, 1, 1, 1, 1, 1]));//1
    console.log(removeDuplicate([4, 2, 5, 3, 3, 1, 2, 4, 1, 5, 5, 5, 3, 1]))//[4, 2, 5, 3, 1]
}
 
{
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    const sortColor = arr => {
        if (arr.length < 2) return arr;
        let p0 = 0, current = 0, p2 = arr.length - 1;
        while (current <= p2) {
            if (arr[current] === 2) {
                swap(arr, )
                p2--;
            } else if (arr[current] === 0)
        }
    }

    console.log('sortColor', JSON.stringify(sortColor([0, 1, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 2, 1]))); // [0,0,0,0,0,1,1,1,1,2,2,2,2,2]
    console.log('sortColor', JSON.stringify(sortColor([0, 1, 2])));// [0,1,2]
    console.log('sortColor', JSON.stringify(sortColor([0, 0, 2, 1])));// [0,0,1,2]
    console.log('sortColor', JSON.stringify(sortColor([2, 0])));// [0,2]
    console.log('sortColor', JSON.stringify(sortColor([2])));// [2]
}
{
    const isPalindrome = arr => {
        if (arr.length < 2) return true;
        let left = 0, right = arr.length - 1;
        while (left < right) {
            if (arr[left] !== arr[right]) return false;
            left++;
            right--
        }
        return true;
    }
    console.log('isPalindrome', JSON.stringify(isPalindrome('amanaplanacanalpanama'))) // true
    console.log('isPalindrome', JSON.stringify(isPalindrome('a'))) // true
    console.log('isPalindrome', JSON.stringify(isPalindrome(''))) // true
    console.log('isPalindrome', JSON.stringify(isPalindrome('abcdc'))) // false

}
{
    const isBalance = arr => {
        if (arr.length & 1 === 1) return false;
        let map = { "{": "}", "[": "]", "(": ")" };
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            let key = arr[i];
            if (map[key]) {
                result.push(key);
            } else {
                let last = result.pop();
                if (map[last] !== key) return false;
            }
        }
        return !result.length;
    }
    console.log('5: isBalance: ', JSON.stringify(isBalance("[{()()}]")));//true
    console.log('5: isBalance: ', JSON.stringify(isBalance("[[[]")));//false
}
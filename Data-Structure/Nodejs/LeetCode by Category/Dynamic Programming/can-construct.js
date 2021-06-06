{
    const canConstruct = (arr, str) => {
        let res = [];
        let path = [];
        const backTracking = (startIndex, remainStr) => {
            if (remainStr.length === 0) {
                res.push(...path);
            } else {
                for (let i = startIndex; i < arr.length; i++) {
                    if (remainStr.indexOf(arr[i]) === 0) {
                        path.push(arr[i]); 
                        let tmpStr = remainStr.substring(arr[i].length);
                        backTracking(i + 1, tmpStr);
                        path.pop();
                    }
                   
                }
            }
        }
        backTracking(0, str);
        return res;
    }
    console.log(canConstruct(['cat', 'dog', 'mouse'], '')) //true
    console.log(canConstruct(['ab', 'abc', 'cd', 'def', 'abcd'], 'abcdef')) //true
    console.log(canConstruct(['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'], 'skateboard')) //false
}
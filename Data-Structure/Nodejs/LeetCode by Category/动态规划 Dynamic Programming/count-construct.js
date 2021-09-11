{
    const countConstruct = (arr, str) => {
        let res = [];
        let path = [];
        let count = 0;
        const backTracking = (remainStr) => {
            if (remainStr.length === 0) {
                count++;
                res.push([...path]);
            } else {
                for (let i = 0; i < arr.length; i++) {
                    if (remainStr.indexOf(arr[i]) === 0) {
                        path.push(arr[i]);
                        let tmpStr = remainStr.substring(arr[i].length);
                        backTracking(tmpStr);
                        path.pop();
                    }

                }
            }
        }
        backTracking(str); // permutation 
        return { res, count };
    }
    console.log(countConstruct(['purp', 'p', 'ur', 'le', 'purpl'], 'purple'))
    //{ res: [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ], count: 2 } 
    console.log(countConstruct(['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'], 'abcdef'))
    /*
    {
        res: [
            [ 'ab', 'cd', 'ef' ],
            [ 'ab', 'c', 'def' ],
            [ 'abc', 'def' ],
            [ 'abcd', 'ef' ]
        ],
        count: 4
    }
    */
}
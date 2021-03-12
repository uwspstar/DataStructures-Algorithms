{
    const reverseWords = str => {
        if (str.length < 2) return '';
        let arr = str.trim().split(' '); // has empty space
        console.log(arr)
        let point = 0
        for (let i = arr.length - 1; i >=0; i++) {
            if (arr[i] !== '') {
                arr[point] = arr[i];
                point++;
            }
        }
        arr.length =  point;
        return arr.join(' ');
    }
    console.log(`result :`, reverseWords('a good   example'));
}
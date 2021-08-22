
{
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    //[ 5,3,8,6,1,2,]
    const bubbleSort = arr => {
        if (arr.length === 0) return arr;
        let len = arr.length;
        for (let i = len - 1; i >= 0; i--) {
            let isSwap = false;
            for (let j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, i, j);
                    isSwap = true;
                }
            }
            if (!isSwap) break;
        }
        return arr;
    }

    let arr = [5, 3, 8, 6, 1, 2,];
    console.log(bubbleSort(arr));

}
{
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    //[ 5,3,8,6,1,2,]
    const bubbleSort = arr => {
        if (arr.length === 0) return arr;
        let len = arr.length;
        for (let i = len - 1; i >= 0; i--) {
            console.log('i=', i, 'arr=', arr);
            for (let j = 0; j < i && (arr[j] > arr[j + 1]); j++) {
                swap(arr, i, j);
                console.log('i=', i, 'j=', j, 'arr=', arr, arr[j], arr[j + 1]);
            }
        }
        return arr;
    }
    let arr = [5, 3, 8, 6, 1, 2,]
    console.log(bubbleSort(arr));
}
{

    const bubbleSort1 = arr => {

        const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

        if (arr.length === 0) return arr;
        let len = arr.length;
        for (let i = len - 1; i >= 0; i--) {
            let isSwap = false;
            for (let j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, i, j);
                    isSwap = true;
                }
            }
            if (!isSwap) break;
        }
        return arr;
    }
    let arr1 = [5, 3, 8, 6, 1, 2,]
    console.log(bubbleSort1(arr1));
}

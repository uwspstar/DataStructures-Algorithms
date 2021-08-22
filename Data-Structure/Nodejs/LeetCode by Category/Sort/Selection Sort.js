//selectionSort

{
    // use first index as the smallest Index
    const arr = [8, 1, 2, 3, 4, 5, 6, 7];
    const len = arr.length;
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

    const selectionSort = arr => {
        if (arr.length < 2) return arr;
        for (let i = 0; i < len; i++) {
            let smallIndex = i;
            for (let j = i + 1; j < len; j++) {
                if (arr[j] < arr[smallIndex]) {
                    smallIndex = j;
                }
            }
            if (smallIndex !== i) swap(arr, smallIndex, i);// not swap in this turn, which mean all numbers are sorted
        }
        return arr;
    }
    console.log('2: selectionSort', JSON.stringify(selectionSort(arr)));
}
{
    //where it is wrong

    const selectionSort = arr => {
        if (arr.length < 2) return arr;
        let len = arr.length;

        for (let i = 0; i < len; i++) {
            let smallIndex = i;
            for (let j = i + 1; j < len; j++) {
                if (arr[j] < arr[smallIndex]) {
                    smallIndex = i;
                }
            }
            if (smallIndex !== i) swap(arr, smallIndex, i);
        }
        return arr;
    }

    // pay attention :  smallIndex = i; ??? or smallIndex = j;

}
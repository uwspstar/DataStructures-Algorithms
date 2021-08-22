//bubbleSort

//const arr = [8, 1, 2, 3, 4, 5, 6, 7];
//const len = arr.length;
const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

{
    const bubbleSort = arr => {
        // only have 1 number, or 0 number, just return arr, nothing need to sort;
        if (arr.length < 2) return arr;

        // each loop put the biggest number on the right;
        for (let i = arr.length - 1; i >= 0; i--) {

            let isSwap = false;

            for (let j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                    isSwap = true;
                }
            }

            //if (isSwap === false) break; 
            // not swap in this turn, which mean all numbers are sorted
            if (!isSwap) break;

        }
        return arr;
    }
    console.log('1 - 1: bubbleSort   ', JSON.stringify(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])));//[1,2,3,4,5,6,7,8]
    console.log('1 - 2: bubbleSort   ', JSON.stringify(bubbleSort([8, 2, 1, 3, 5])));//[1,2,3,5,8]
    console.log('1 - 3: bubbleSort   ', JSON.stringify(bubbleSort([0])));//[0]
    console.log('1 - 4: bubbleSort   ', JSON.stringify(bubbleSort([8, 1])));//[1,8]
}
//!!!! Pay attention 
{
    //where it is wrong
    const bubbleSort = arr => {
        if (arr.length === 0) return arr;
        let len = arr.length;
        for (let i = len - 1; i >= 0; i--) {
            for (let j = 0; j < i && (arr[j] > arr[j + 1]); j++) {  // not working
                swap(arr, i, j);
            }
        }
        return arr;
    }
    let arr = [5, 3, 8, 6, 1, 2,]
    console.log(bubbleSort(arr));
    /*
    i= 5 arr= [ 5, 3, 8, 6, 1, 2 ]
    i= 5 j= 0 arr= [ 2, 3, 8, 6, 1, 5 ] 2 3 ==> this is only go inside for j first time, because not time the arr[j] = 3, arr[j + 1] = 8, 
    i= 4 arr= [ 2, 3, 8, 6, 1, 5 ] ==> no inside j loop
    i= 3 arr= [ 2, 3, 8, 6, 1, 5 ] ==> no inside j loop
    i= 2 arr= [ 2, 3, 8, 6, 1, 5 ] ==> no inside j loop
    i= 1 arr= [ 2, 3, 8, 6, 1, 5 ] ==> no inside j loop
    i= 0 arr= [ 2, 3, 8, 6, 1, 5 ] ==> no inside j loop
    */

    //cannot use for (let j = 0; j < i && (arr[j] > arr[j + 1]); j++), because the j++ happens only when j < i && (arr[j] > arr[j + 1]), in fact, we want to j++ in each step, include when arr[j] <= arr[j + 1] 

    //thinks the while loop 
    let j = 0;
    while (j < i) {
        if (arr[j] > arr[j + 1]) { swap(arr, j, j + 1) }
        j++;
    }


}
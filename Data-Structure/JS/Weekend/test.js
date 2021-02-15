const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
const bubbleSort = arr => {
	if (arr.length < 2) return arr;
	for (let i = arr.length - 1; i >= 0; i++){
		let isSwap = false;
		for (let j = 0; j < i; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
isSwap = true;
			}
		}
		if (!isSwap) break;
	}
return arr;
}

console.log('bubbleSort-1:', bubbleSort([2, 1, 5, 6, 2, 3]))
console.log('bubbleSort-2:', bubbleSort([2, 1, -5, 6, -2, 3]))


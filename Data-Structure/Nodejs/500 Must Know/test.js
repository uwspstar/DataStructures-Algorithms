const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
const moveZeros = arr => {
	if (arr.length < 2) return arr;
	let p = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== 0) {
			swap(arr, i, p);
			p++;
		}
	}
    return arr;
}
console.log(moveZeros([0,1,0,3,12,1]));

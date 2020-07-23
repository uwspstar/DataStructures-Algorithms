let arr = [1, 0, 1, 0, 1, 1, 0, 1, 0, 0];
//i++ vs ++i

function sort(arr) {
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
      arr[k++] = 0; // https://www.youtube.com/watch?v=lrtcfgbUXm4
    }
    console.log('i=',i,' k=',k,arr);
  }
  for (let i = k; i < arr.length; i++) {
		arr[k++] = 1;
	}

  return arr;
}
console.log((arr));
console.log(sort(arr));

/*
           [ 1, 0, 1, 0, 1, 1, 0, 1, 0, 0 ]
i= 0  k= 0 [ 1, 0, 1, 0, 1, 1, 0, 1, 0, 0 ]
i= 1  k= 1 [ 0, 0, 1, 0, 1, 1, 0, 1, 0, 0 ]
i= 2  k= 1 [ 0, 0, 1, 0, 1, 1, 0, 1, 0, 0 ]
i= 3  k= 2 [ 0, 0, 1, 0, 1, 1, 0, 1, 0, 0 ]
i= 4  k= 2 [ 0, 0, 1, 0, 1, 1, 0, 1, 0, 0 ]
i= 5  k= 2 [ 0, 0, 1, 0, 1, 1, 0, 1, 0, 0 ]
i= 6  k= 3 [ 0, 0, 0, 0, 1, 1, 0, 1, 0, 0 ]
i= 7  k= 3 [ 0, 0, 0, 0, 1, 1, 0, 1, 0, 0 ]
i= 8  k= 4 [ 0, 0, 0, 0, 1, 1, 0, 1, 0, 0 ]
i= 9  k= 5 [ 0, 0, 0, 0, 0, 1, 0, 1, 0, 0 ]
[ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1 ]
*/

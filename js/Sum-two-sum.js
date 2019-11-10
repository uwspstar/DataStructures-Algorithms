
// Given nums = [2, 7, 11, 15], target = 9, 
// return index
// hasOwnProperty 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

const twoSum = function (arr, target) {
  let mySet = new Set();
  for (let i = 0; i < arr.length; i++) {
    if(mySet.has(target - arr[i])) return true;
    mySet.add(arr[i]);
  }
  return false;
}
console.log(twoSum([-1, 7, 11, 15], 14));
console.log(twoSum([-1, 7, 11, 15], 13));
console.log(twoSum([2, 7, 11, 15], 13)); 

var twoSum = function(nums, target) {
    
    let hashmap = {}; 
    for (let i = 0 ; i < nums.length; i++) { 
       let temp = target - nums[i];
       if (hashmap.hasOwnProperty(temp)) {  
         return [hashmap[temp], i]
       }  
       if (!hashmap[nums[i]]) {
         hashmap[nums[i]] = i;
       }   
    }
    return [];
};

// Given nums = [2, 7, 11, 15], target = 9, 
// return true / false
const twoSum = function (arr, target) { 
   
  let mySet =  new Set();
  for (let i = 0; i < arr.length; i++) {
    if (!mySet.has(arr[i])){
      mySet.add(arr[i])
    }

    if (mySet.has(target - arr[i])){
      return true;
    } 
  }
  return false;  
}

console.log(twoSum([-1, 7, 11, 15], 13));
console.log(twoSum([2, 7, 11, 15], 13)); 



// return 2 nums
const twoSum = function(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let x = nums[i];
    let y = target - x;

    if(!map[x]) {
      map[x] = x;
    }

    if(map[y]) {
      return [x, y]
    }
  }

}

console.log(twoSum([2, 7, 11, 15],13));

//Solution-1-Brute Force — O(n²)
const twoSum = (arr, target) => {
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === target) {
				result.push(i);
				result.push(j);
			}
		}
	}
	return result;
}
console.log(twoSum([2, 7, 11, 15], 9));
// => Output [ 0, 1 ]

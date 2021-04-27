{
  // put all zero to right side
  const putAllZeroToRight = nums => {
    
    //[0,  -1,  0, 2, 0, 3, -2, 0]
    //[-1, 2,  3, -2, 0, 3, -2, 0]
    //                          S
    //                P
    let p =  0;
    let start = 0;
    while (start < nums.length) {
      if (nums[start] !== 0) {
        nums[p] = nums[start];
        p++;
      }
      start++;
    }

    for (let i = p + 1; i < nums.length; i++) {
      nums[i] = 0;
    } 
    return nums;
  }

  console.log('putAllZeroToRight', putAllZeroToRight([-1, 0, 2, 0, 3, -2, 0]));
}
{
  var removeElement = function (nums, val) {
      if (nums.length === 0) return 0;
      let point = 0;
      for (let i = 0; i < nums.length; i++) {
          if (nums[i] !== val) {
              nums[point] = nums[i];
              point++;
          }
      }
      nums.length = point;
      return nums;
  };
  console.log('removeElement', removeElement([3, 2, 2, 3], 3));
  console.log('removeElement', removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
}
{
  //const countOfAirplan
}

//Permutation with a arr
{
  var permute = function(nums) {
      const res = [];
      const backtrack = (path) => {
          
          if (path.length === nums.length) {
              res.push(path);
              return;
          };
          
          nums.forEach(n => { 
              console.log('path=', path);

              if (path.includes(n)) return; 
              backtrack(path.concat(n));
          }); 
      };
      
      backtrack([]);
      return res;
  };

  console.log(permute([1, 2, 3]));
}
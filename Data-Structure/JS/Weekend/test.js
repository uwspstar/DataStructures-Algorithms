{
    const getPermutationStr = (prefix, suffix, res) => {
        if (suffix.length === 0) {
            res.push(prefix);
        } else {
            for (let i = 0; i < suffix.length; i++) {
                getPermutationStr(prefix + suffix[i], suffix.slice(0, i) + suffix.slice(i + 1), res);
            }
        }
        return res;
    }
    const permutationStr = str => {
        let res = [];
        getPermutationStr('', str, res);
        return res;
    }

    console.log(permutationStr('abc'));

    return;
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
//Permutation with a str
{
    const getPermutationStr = (prefix, suffix, res) {
        if (suffix.length === 0) {
             res.push(suffix);
        } else {
            for (let i = 0; i < suffix.length; i++) {
             getPermutationStr( prefix + suffix[i],  suffix.slice(i+1) , res);
           }
       }
       return res;
    }
    const permutationStr = str => {
        let res = [];
        return getPermutationStr('', str, res); 
    }

    console.log(permutationStr('abc'));
}
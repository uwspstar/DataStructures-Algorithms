{
    const permuteStr = str => {
        if (str.length < 2) return str;
        let res = [];
        const getPermuteStr = (prefix, suffix) => {
            if (suffix.length === 0) { // suffix finished, add prefix
                res.push(prefix); 
            } else {
                for (let i = 0; i < suffix.length; i++) {
                    let tmpPrefix = prefix + suffix[i]; 
                    // cannot use prefix = prefix + suffix[i];
                    // backTrack, need original status of the input
                    let tmpSuffix = suffix.slice(0, i) + suffix.slice(i + 1);
                    getPermuteStr(tmpPrefix, tmpSuffix);
                    //getPermuteStr(prefix + suffix[i], suffix.slice(0, i) + suffix.slice(i + 1));
                }
            } 
        }
        getPermuteStr('', str);
        return res;
    }
    console.log(permuteStr('abc'));
}
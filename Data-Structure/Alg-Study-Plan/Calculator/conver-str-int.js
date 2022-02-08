const convertStrToInt = (str) =>{
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        res = res * 10 + (str[i] - '0');
    }
    return res;
}

console.log(convertStrToInt('456'));
{
    let str = 'ababbc'
    let newStr = [...new Set(str)].join('');
    console.log('str', str, 'newStr', newStr);
}
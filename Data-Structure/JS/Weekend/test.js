
console.log('a' -'A');

const isAlphanumeric = c => {
    if ((c >='0' && c <='9') || (c >='A' && c <= 'z')) {
      return true;
    }
    return false;
}

console.log(isAlphanumeric('c'));
console.log(isAlphanumeric('-'));
console.log(isAlphanumeric('0'));
console.log(isAlphanumeric('&&'));

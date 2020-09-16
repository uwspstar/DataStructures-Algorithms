// reverse int 123 -> 3 2 1 , -123 -> - 3 2 1
const reverseNum = (num) => {
    if (num > -9 && num < 9) return num;

    let negative = -1;
    //convert to positive, need to use num = (-1) * num , not (-1) * num
    num < 0 ? num = (-1) * num : negative = 1;

    let result = 0;

    while (num > 0) {
        let temp = num % 10;
        result = result * 10 + temp;
        num = parseInt(num / 10);

        console.log('temp', temp, 'result', result, 'num', num);
    }

    return negative * result;
}

console.log('reverseNum', reverseNum(123)); //321
console.log('reverseNum', reverseNum(-123));
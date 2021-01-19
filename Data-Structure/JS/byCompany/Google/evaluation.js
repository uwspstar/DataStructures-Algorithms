/*
Given a mathematical expression with just single digits, plus signs, negative signs, and brackets, evaluate the expression. Assume the expression is properly formed.

Example:
Input: - ( 3 + ( 2 - 1 ) )
Output: -4
*/

const eval = (str) => {

    if (str.length < 2) return str;
    let result = 0;
    const eval_help = (str, index = 0) => {
        let op = '+';
        let current = index;
        ////////////////////////////////
        //let { result, index } = {};
        while (current < str.length) {
            let char = str[current];
            console.log('my char is : ', char)

            if (!isNaN(char)) {

                if (op === '+') {
                    result = result + parseInt(char);
                } else {
                    result = result - parseInt(char);
                }
            } else if (char === '+' || char === '-') {
                console.log('char + - is : ', char);
                op = char;
            } else if (char === '(') {
                let n = eval_help(str, index + 1).result;
                index = eval_help(str, index + 1).index;
                if (op === '+') {
                    result = result + n;
                }
                else {
                    result = result - n;
                }
            } else if (char === ')') {
                return { result, index };
            }
            current++;
        }
        return { result, index }
    }
    /////////////////////////////
    return eval_help(str); //{ result, index }
}
console.log('eval - 0 :', eval('- (3+(2-1))'))
//console.log('eval - 1 :', eval(''))
//console.log('eval - 2 :', eval('1'))
//console.log('eval - 3 :', eval('-1'))
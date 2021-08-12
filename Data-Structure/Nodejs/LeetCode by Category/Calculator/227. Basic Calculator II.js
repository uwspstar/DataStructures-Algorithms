//227. Basic Calculator II
const calculate = s => {
    if (s == null || s.length === 0) return 0;

        let len = s.length;
        let stack = [];
        let currentNumber = 0;
        let operation = '+';
        for (let i = 0; i < len; i++) {
            let currentChar = s.charAt(i);
            if (currentChar >= 0 || currentChar <= 9) {
                currentNumber = (currentNumber * 10) + (currentChar - '0');
            }
            if (!Character.isDigit(currentChar) && !Character.isWhitespace(currentChar) || i == len - 1) {
                if (operation === '-') {
                    stack.push(-currentNumber);
                }
                else if (operation === '+') {
                    stack.push(currentNumber);
                }
                else if (operation === '*') {
                    stack.push(stack.pop() * currentNumber);
                }
                else if (operation === '/') {
                    stack.push(stack.pop() / currentNumber);
                }
                operation = currentChar;
                currentNumber = 0;
            }
        }
        let result = 0;
        while (stack.length) {
            result += stack.pop();
        }
        return result;
}
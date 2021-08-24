//537. Complex Number Multiplication
/*
A complex number can be represented as a string on the form "real+imaginaryi" where:

real is the real part and is an integer in the range [-100, 100].
imaginary is the imaginary part and is an integer in the range [-100, 100].
i2 == -1.
Given two complex numbers num1 and num2 as strings, return a string of the complex number that represents their multiplications. 

Input: num1 = "1+1i", num2 = "1+1i" Output: "0+2i"
Explanation: (1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i, and you need convert it to the form of 0+2i.
*/

//(a+bi)(x+yi) = ax-by + (xb + ay) i = real + imaginary i
{
    //T: O(1) , the split take constant time, since the string length < 20
    //S: O(1)
    var complexNumberMultiply = function (num1, num2) {
        const getNumber = arr => {
            let res = arr.slice(0, -1).split('+'); // the last char is "i";
            res[0] = +res[0]; // as number
            res[1] = +res[1];
            return res;
        }
        let n1 = getNumber(num1);
        let n2 = getNumber(num2);
        let real = n1[0] * n2[0] - n1[1] * n2[1];
        let imaginary = n1[0] * n2[1] + n2[0] * n1[1];
        return `${real}+${imaginary}i`

    };
}
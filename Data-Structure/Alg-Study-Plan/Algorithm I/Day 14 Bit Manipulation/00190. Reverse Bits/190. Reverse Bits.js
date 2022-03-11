// 190. Reverse Bits
/*
Reverse bits of a given 32 bits unsigned integer.

Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.
 
Example 1:

Input: n = 00000010100101000001111010011100
Output:    964176192 (00111001011110000010100101000000)
Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
*/
{
    var reverseBits = function (n) {
        let res = 0, pow = 31;
        while (n > 0) {
            let rightMost = n & 1;
            res = res + (rightMost << pow);
            pow--;
            n = n >>> 1;
        }
        // take negative into positive
        return res >>> 0;
        // T.C: O(1)
        // S.C: O(1)
    };
    //A Number After a Double Reversal
}
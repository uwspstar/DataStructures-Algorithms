/*
Rotational Cipher
One simple way to encrypt a string is to "rotate" every alphanumeric character by a certain amount. Rotating a character means replacing it with another character that is a certain number of steps away in normal alphabetic or numerical order.

For example, if the string "Zebra-493?" is rotated 3 places, the resulting string is "Cheud-726?". Every alphabetic character is replaced with the character 3 letters higher (wrapping around from Z to A), and every numeric character replaced with the character 3 digits higher (wrapping around from 9 to 0). Note that the non-alphanumeric characters remain unchanged.
Given a string and a rotation factor, return an encrypted string.
Signature

string rotationalCipher(string input, int rotationFactor)
Input
1 <= |input| <= 1,000,000
0 <= rotationFactor <= 1,000,000
Output
Return the result of rotating input a number of times equal to rotationFactor.
Example 1
input = Zebra-493?
rotationFactor = 3
output = Cheud-726?
Example 2
input = abcdefghijklmNOPQRSTUVWXYZ0123456789
rotationFactor = 39
output = nopqrstuvwxyzABCDEFGHIJKLM9012345678
*/

{


    const rotationalCipher = (input, rotationFactor) => {
        if (input.length === 0) return '';
        if (rotationFactor === 0) return input;
        let res = '';

        const enCipher = (c, rotationFactor) => { 
            console.log(c)
            if (c >= 'A' && c <= 'Z') {
                console.log(1)
                let code = (c.charCodeAt(0) - 'A'.charCodeAt(0) + rotationFactor) % 26 + 'A'.charCodeAt(0);
                 
                console.log('rotationFactor', rotationFactor, 'code', code);
                console.log('String.fromCharCode(code)', String.fromCharCode(code));

                return String.fromCharCode(code);
            } else if (c >= 'a' && c <= 'z') {
                let code = (c.charCodeAt(0) - 'a'.charCodeAt(0) + rotationFactor) % 26 + 'a'.charCodeAt(0);
                return String.fromCharCode(code);

            } else if (c >= '0' && c <= '9') {
                let code = (c.charCodeAt(0) - '0'.charCodeAt(0) + rotationFactor) % 10 +  '0'.charCodeAt(0);
                return String.fromCharCode(code);
            }
            return c;

        }
        for (let i = 0; i < input.length; i++) {
            res += enCipher(input[i], rotationFactor);
        }

        return res;
    }

    console.log(rotationalCipher('Zebra-493?',3)); //Cheud-726?
}

{
    function rotationalCipher(input, rotationFactor) {
        // Write your code here
        if (input.length === 0) return input;

        const rotateCharacter = (c, rotationFactor) => {
            let tmp = c - 'A';
            console.log(tmp);
            let code = tmp.charCodeAt(0);
            let newCode = (code + rotationFactor) % 26;
            let newChar = String.fromCharCode(newCode);
            console.log(c, c - 'A', c - 'A' + rotationFactor, newChar);

            return ((c - 'A' + rotationFactor) % 26) + 'A';
        }

        let res = '';

        for (let i = 0; i < input.length; i++) {
            res += rotateCharacter(input[i], rotationFactor) ;
        }
        return res;
    }

    var input_1 = "All-convoYs-9-be:Alert1.";
    var rotationFactor_1 = 4;
    console.log(rotationalCipher(input_1, rotationFactor_1)); //Epp-gsrzsCw-3-fi:Epivx5.
    //Epp-gsrzsCw-3-fi:Epivx5.
    //Epp1gsrzs]w1=1fi>Epivx52
}
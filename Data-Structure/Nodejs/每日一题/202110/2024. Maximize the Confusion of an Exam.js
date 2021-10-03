//2024. Maximize the Confusion of an Exam
//1004.
//404.

var maxConsecutiveAnswers = function (answerKey, k) {
    let len = answerKey.length;
    let res = 0;


    let j = 0;
    let flip = 0;

    // case 1 : continues 'T'
    for (let i = 0; i < len; i++) {
        while (j < len && (flip < k || answerKey[j] === 'T')) {

            if (answerKey[j] === 'F') flip++;

            j++;
        }

        res = Math.max(res, j - i); // j is invalid after jump out while loop

        if (answerKey[i] === 'F') { // move i, may affect flip
            flip--;
        }
    }

    // case 2 : continues 'F'
    j = 0;
    flip = 0;

    for (let i = 0; i < len; i++) {
        while (j < len && (flip < k || answerKey[j] === 'F')) {

            if (answerKey[j] === 'T') flip++;
            j++;
        }

        res = Math.max(res, j - i); // j is invalid after jump out while loop

        if (answerKey[i] === 'T') { // move i, may affect flip
            flip--;
        }
    }

    return res;
};

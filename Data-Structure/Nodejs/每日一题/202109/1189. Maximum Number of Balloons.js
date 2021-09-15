//1189. Maximum Number of Balloons
/*
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

Input: text = "nlaebolko"
Output: 1 

Input: text = "loonbalxballpoon"
Output: 2
*/
{
    var maxNumberOfBalloons = function (text) {
        let map = {
            'b': 0,
            'a': 0,
            'l': 0,
            'o': 0,
            'n': 0
        }

        for (let t of text) {
            if (map[t] >= 0) {
                map[t]++;
            }
        }

        map["l"] = parseInt(map["l"] / 2);
        map["o"] = parseInt(map["o"] / 2);

        return Math.min(...Object.values(map));;
    };

}